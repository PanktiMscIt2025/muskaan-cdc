import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/contact-schema'

const validData = {
  parentName: 'Priya Sharma',
  childName: 'Aryan',
  childAge: '8 years',
  email: 'priya@example.com',
  phone: '8777024470',
  concern: 'school-readiness',
  message: 'Looking for help with my child.',
}

describe('contactSchema', () => {
  it('accepts valid data', () => {
    const result = contactSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('accepts valid data with optional preferredTime', () => {
    const result = contactSchema.safeParse({ ...validData, preferredTime: 'morning' })
    expect(result.success).toBe(true)
  })

  it('allows missing preferredTime', () => {
    const { preferredTime: _, ...withoutTime } = { ...validData, preferredTime: undefined }
    const result = contactSchema.safeParse(withoutTime)
    expect(result.success).toBe(true)
  })

  it('rejects parentName shorter than 2 chars', () => {
    const result = contactSchema.safeParse({ ...validData, parentName: 'A' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Parent name must be at least 2 characters')
    }
  })

  it('rejects childName shorter than 2 chars', () => {
    const result = contactSchema.safeParse({ ...validData, childName: 'A' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Child name must be at least 2 characters')
    }
  })

  it('rejects empty childAge', () => {
    const result = contactSchema.safeParse({ ...validData, childAge: '' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({ ...validData, email: 'not-an-email' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid email address')
    }
  })

  it('rejects phone shorter than 10 chars', () => {
    const result = contactSchema.safeParse({ ...validData, phone: '123456' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid phone number')
    }
  })

  it('rejects empty concern', () => {
    const result = contactSchema.safeParse({ ...validData, concern: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please select a concern area')
    }
  })

  it('rejects message shorter than 10 chars', () => {
    const result = contactSchema.safeParse({ ...validData, message: 'Too short' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please tell us a bit more (min 10 characters)')
    }
  })

  it('rejects missing required fields', () => {
    const result = contactSchema.safeParse({})
    expect(result.success).toBe(false)
  })
})
