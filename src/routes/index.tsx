import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/studio/header'
import { Gallery } from '@/components/studio/gallery'
import { Hero, About, Services, Differentials, BookingSteps, Testimonials, FAQ, Contact, Footer } from '@/components/studio/sections'
import { studio } from '@/lib/studio'

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      { title: 'Studio Giseli Oliveira | Cabelo Afro em Guarulhos' },
      { name: 'description', content: studio.description },
      { property: 'og:title', content: 'Studio Giseli Oliveira | Cabelo Afro em Guarulhos' },
      { property: 'og:description', content: studio.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: '/' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: '/' }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: studio.name, description: studio.description, address: { '@type': 'PostalAddress', addressLocality: studio.city, addressRegion: studio.state, addressCountry: 'BR' } }) }],
  }),
})

function Index() {
  return <><a className="skip-link" href="#conteudo">Ir para o conteúdo</a><Header/><main id="conteudo"><Hero/><About/><Services/><Gallery/><Differentials/><BookingSteps/><Testimonials/><FAQ/><Contact/></main><Footer/></>
}
