import hero from '@/assets/afro-editorial.webp'
import natural from '@/assets/natural.webp'
import curls from '@/assets/curls.webp'
import texture from '@/assets/texture.webp'
import braids from '@/assets/braids.webp'

export type Service = { id: string; name: string; description: string; confirmed: boolean; image: string }
export type StudioImage = { src: string; alt: string; label: string }
export type Testimonial = { name: string; text: string; authorized: boolean }
export const studio = {
  name: 'Studio Giseli Oliveira', specialty: 'Cabelo Afro', city: 'Guarulhos', state: 'SP',
  description: 'Conheça o Studio Giseli Oliveira, especializado em cabelo afro em Guarulhos. Consulte os serviços e entre em contato para saber mais.',
  whatsapp: '', instagram: '', phone: '', address: '', hours: '',
  hero,
  images: [
    { src: natural, alt: 'Retrato de referência de mulher sorrindo com cabelo crespo curto e natural', label: 'Beleza natural' },
    { src: curls, alt: 'Retrato de referência em perfil com cachos longos e definidos', label: 'Movimento e expressão' },
    { src: texture, alt: 'Imagem de referência da textura e do volume de um cabelo afro visto de costas', label: 'Texturas únicas' },
    { src: braids, alt: 'Retrato de referência de mulher com tranças em um coque alto', label: 'Formas de ser você' },
  ] satisfies StudioImage[],
  services: [
    { id: 'afro', name: 'Cuidados com cabelos afro', description: 'Converse sobre as características e necessidades dos seus fios.', confirmed: false, image: natural },
    { id: 'cortes', name: 'Cortes e valorização da textura natural', description: 'Consulte as possibilidades de corte com o estúdio.', confirmed: false, image: texture },
    { id: 'tratamentos', name: 'Tratamentos capilares', description: 'Consulte os cuidados disponíveis para o seu cabelo.', confirmed: false, image: natural },
    { id: 'cachos', name: 'Definição e finalização de cachos', description: 'Converse sobre as opções de finalização disponíveis.', confirmed: false, image: curls },
    { id: 'penteados', name: 'Penteados e estilização', description: 'Conte sua ideia e consulte as possibilidades.', confirmed: false, image: braids },
    { id: 'outros', name: 'Outros serviços especializados', description: 'Tire suas dúvidas sobre outros cuidados.', confirmed: false, image: texture },
  ] satisfies Service[],
  testimonials: [] as Testimonial[],
}
export const messages = {
  booking: 'Olá! Conheci o site do Studio Giseli Oliveira e gostaria de saber mais sobre os serviços e a disponibilidade para agendar um horário.',
  general: 'Olá! Encontrei o site do Studio Giseli Oliveira e gostaria de tirar algumas dúvidas.',
  services: 'Olá! Gostaria de conhecer os serviços disponíveis no Studio Giseli Oliveira e saber qual combina com o meu cabelo.',
}
export function whatsappUrl(number: string, message: string) {
  if (!/^55\d{10,11}$/.test(number)) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
export function serviceMessage(name: string) {
  return `Olá! Gostaria de obter mais informações sobre ${name} e consultar os horários disponíveis.`
}
export function confirmedServices(services: Service[]) { return services.filter(service => service.confirmed) }
export const navigation = [ ['inicio', 'Início'], ['sobre', 'Sobre'], ['servicos', 'Serviços'], ['galeria', 'Galeria'], ['contato', 'Contato'] ] as const
export const faq = [
  ['Como faço para agendar?', 'Entre em contato pelo WhatsApp para consultar os serviços e verificar a disponibilidade.'],
  ['Como saber qual serviço é indicado para o meu cabelo?', 'Envie sua dúvida pelo WhatsApp e converse com o estúdio sobre as características dos seus fios e o resultado desejado.'],
  ['Onde fica o Studio Giseli Oliveira?', 'O estúdio está localizado em Guarulhos, São Paulo. Entre em contato para confirmar o endereço e as orientações de chegada.'],
  ['Como consulto os preços?', 'Entre em contato para consultar os serviços disponíveis e seus respectivos valores.'],
  ['Quais são os horários de atendimento?', 'Consulte os dias e horários disponíveis diretamente com o estúdio.'],
]