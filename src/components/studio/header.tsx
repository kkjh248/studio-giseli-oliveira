import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigation, studio } from '@/lib/studio'
import { WhatsAppButton } from './whatsapp-button'

export function Brand() {
  return <a href="#inicio" className="brand" aria-label={`${studio.name} — início`}><span className="brand-studio">STUDIO</span><span className="brand-name">Giseli Oliveira<span className="brand-dot">.</span></span><span className="brand-specialty">CABELO AFRO</span></a>
}
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const update = () => setScrolled(window.scrollY > 40); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, [])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="header-inner"><Brand/>
    <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <div className="header-cta"><WhatsAppButton>Agendar pelo WhatsApp</WhatsAppButton></div>
    <Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger asChild><Button variant="tool" size="icon" className="mobile-toggle" aria-label="Abrir menu"><Menu/></Button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="menu-overlay"/><Dialog.Content className="mobile-menu"><Dialog.Title className="sr-only">Menu de navegação</Dialog.Title><Dialog.Description className="sr-only">Seções do Studio Giseli Oliveira</Dialog.Description><Brand/><Dialog.Close asChild><Button variant="tool" size="icon" className="menu-close" aria-label="Fechar menu"><X/></Button></Dialog.Close><nav aria-label="Navegação no celular">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={20}/></a>)}</nav><WhatsAppButton/><small>Guarulhos — SP</small></Dialog.Content></Dialog.Portal></Dialog.Root>
  </div></header>
}