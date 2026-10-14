import { describe, expect, it } from 'vitest'
import { confirmedServices, messages, serviceMessage, studio, whatsappUrl } from '../lib/studio'

describe('Studio publication safeguards', () => {
  it('does not create a WhatsApp link without the confirmed number', () => {
    expect(studio.whatsapp).toBe('')
    expect(whatsappUrl(studio.whatsapp, messages.booking)).toBeNull()
  })
  it('uses the official Brazilian link and encodes the contextual message', () => {
    const message = 'Olá! Gostaria de obter mais informações sobre Cuidados com cabelos afro e consultar os horários disponíveis.'
    expect(serviceMessage('Cuidados com cabelos afro')).toBe(message)
    expect(whatsappUrl('5511999999999', message)).toBe(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`)
  })
  it('rejects numbers with symbols or missing country code', () => {
    expect(whatsappUrl('+55 (11) 99999-9999', messages.general)).toBeNull()
    expect(whatsappUrl('11999999999', messages.general)).toBeNull()
  })
  it('does not publish any of the six unconfirmed services', () => {
    expect(studio.services).toHaveLength(6)
    expect(confirmedServices(studio.services)).toEqual([])
    const confirmed = { ...studio.services[0], confirmed: true }
    expect(confirmedServices([confirmed, studio.services[1]])).toEqual([confirmed])
  })
  it('does not fabricate a full address, opening hours, Instagram or reviews', () => {
    expect(studio.address).toBe('')
    expect(studio.hours).toBe('')
    expect(studio.instagram).toBe('')
    expect(studio.testimonials).toEqual([])
  })
})