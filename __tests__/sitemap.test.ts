import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import sitemap from '@/app/sitemap'

const DEFAULT_BASE = 'https://muskaan-cdc.vercel.app'

describe('sitemap', () => {
  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_SITE_URL
  })

  afterEach(() => {
    delete process.env.NEXT_PUBLIC_SITE_URL
  })

  it('returns 5 entries', () => {
    const entries = sitemap()
    expect(entries).toHaveLength(5)
  })

  it('uses default base URL when env var not set', () => {
    const entries = sitemap()
    expect(entries[0].url).toBe(DEFAULT_BASE)
  })

  it('uses NEXT_PUBLIC_SITE_URL when set', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com'
    const entries = sitemap()
    expect(entries[0].url).toBe('https://example.com')
  })

  it('homepage has priority 1', () => {
    const entries = sitemap()
    const home = entries.find(e => e.url === DEFAULT_BASE)
    expect(home?.priority).toBe(1)
  })

  it('programs page has priority 0.9', () => {
    const entries = sitemap()
    const programs = entries.find(e => e.url === `${DEFAULT_BASE}/programs`)
    expect(programs?.priority).toBe(0.9)
  })

  it('all entries have valid URLs', () => {
    const entries = sitemap()
    entries.forEach(entry => {
      expect(entry.url).toMatch(/^https?:\/\//)
    })
  })

  it('all entries have lastModified date', () => {
    const entries = sitemap()
    entries.forEach(entry => {
      expect(entry.lastModified).toBeInstanceOf(Date)
    })
  })

  it('contains expected routes', () => {
    const entries = sitemap()
    const urls = entries.map(e => e.url)
    expect(urls).toContain(DEFAULT_BASE)
    expect(urls).toContain(`${DEFAULT_BASE}/about`)
    expect(urls).toContain(`${DEFAULT_BASE}/programs`)
    expect(urls).toContain(`${DEFAULT_BASE}/gallery`)
    expect(urls).toContain(`${DEFAULT_BASE}/contact`)
  })
})
