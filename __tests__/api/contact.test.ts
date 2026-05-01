import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from '@/app/api/contact/route'

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: vi.fn().mockResolvedValue({ messageId: 'test-id' }),
    })),
  },
}))

function makeRequest(body: Record<string, unknown>) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const validBody = {
  parentName: 'Priya Sharma',
  childName: 'Aryan',
  childAge: '8 years',
  email: 'priya@example.com',
  phone: '8777024470',
  concern: 'school-readiness',
  message: 'Looking for help with my child in school readiness program.',
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    process.env.GMAIL_USER = 'test@gmail.com'
    process.env.GMAIL_APP_PASSWORD = 'testpassword'
  })

  it('returns 200 with valid body', async () => {
    const res = await POST(makeRequest(validBody) as never)
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
  })

  it('returns 400 when parentName missing', async () => {
    const { parentName: _, ...body } = validBody
    const res = await POST(makeRequest(body) as never)
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toBe('Please fill in all required fields.')
  })

  it('returns 400 when childName missing', async () => {
    const { childName: _, ...body } = validBody
    const res = await POST(makeRequest(body) as never)
    expect(res.status).toBe(400)
  })

  it('returns 400 when email missing', async () => {
    const { email: _, ...body } = validBody
    const res = await POST(makeRequest(body) as never)
    expect(res.status).toBe(400)
  })

  it('returns 400 when phone missing', async () => {
    const { phone: _, ...body } = validBody
    const res = await POST(makeRequest(body) as never)
    expect(res.status).toBe(400)
  })

  it('returns 400 when concern missing', async () => {
    const { concern: _, ...body } = validBody
    const res = await POST(makeRequest(body) as never)
    expect(res.status).toBe(400)
  })

  it('returns 400 when message missing', async () => {
    const { message: _, ...body } = validBody
    const res = await POST(makeRequest(body) as never)
    expect(res.status).toBe(400)
  })

  it('returns 400 when body is empty', async () => {
    const res = await POST(makeRequest({}) as never)
    expect(res.status).toBe(400)
  })

  it('sends two emails on success', async () => {
    const nodemailer = await import('nodemailer')
    const mockSendMail = vi.fn().mockResolvedValue({ messageId: 'test-id' })
    vi.mocked(nodemailer.default.createTransport).mockReturnValue({
      sendMail: mockSendMail,
    } as never)

    await POST(makeRequest(validBody) as never)
    expect(mockSendMail).toHaveBeenCalledTimes(2)
  })

  it('returns 500 when email send fails', async () => {
    const nodemailer = await import('nodemailer')
    vi.mocked(nodemailer.default.createTransport).mockReturnValue({
      sendMail: vi.fn().mockRejectedValue(new Error('SMTP error')),
    } as never)

    const res = await POST(makeRequest(validBody) as never)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.error).toContain('Failed to send email')
  })

  it('formats concernLabel correctly (dashes to title case)', async () => {
    const nodemailer = await import('nodemailer')
    const mockSendMail = vi.fn().mockResolvedValue({ messageId: 'test-id' })
    vi.mocked(nodemailer.default.createTransport).mockReturnValue({
      sendMail: mockSendMail,
    } as never)

    await POST(makeRequest({ ...validBody, concern: 'special-education' }) as never)

    const firstCallArgs = mockSendMail.mock.calls[0][0]
    expect(firstCallArgs.subject).toContain('Special Education')
  })

  it('shows "Not specified" for missing preferredTime', async () => {
    const nodemailer = await import('nodemailer')
    const mockSendMail = vi.fn().mockResolvedValue({ messageId: 'test-id' })
    vi.mocked(nodemailer.default.createTransport).mockReturnValue({
      sendMail: mockSendMail,
    } as never)

    await POST(makeRequest(validBody) as never)

    const firstCallArgs = mockSendMail.mock.calls[0][0]
    expect(firstCallArgs.html).toContain('Not specified')
  })
})
