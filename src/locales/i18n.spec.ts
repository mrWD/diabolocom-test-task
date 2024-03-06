import { describe, expect, it, beforeEach, vi } from 'vitest'
import { getDefaultLanguage, setDefaultLanguage, languages } from './i18n'

describe('i18n module', () => {
  vi.spyOn(localStorage, 'getItem')
  vi.spyOn(localStorage, 'setItem')
  vi.spyOn(navigator, 'language', 'get')

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns correct default language', () => {
    expect(getDefaultLanguage()).toBe(languages.EN)

    vi.spyOn(navigator, 'language', 'get').mockReturnValueOnce(languages.FR)

    expect(getDefaultLanguage()).toBe(languages.FR)

    vi.spyOn(navigator, 'language', 'get').mockReturnValueOnce(languages.EN)

    expect(getDefaultLanguage()).toBe(languages.EN)
  })

  it('sets default language in localStorage', () => {
    setDefaultLanguage(languages.FR)
    expect(localStorage.getItem('lang')).toBe(languages.FR)
  })
})
