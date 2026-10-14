import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { messages, studio, whatsappUrl } from '@/lib/studio'

export function WhatsAppButton({ children = 'Falar pelo WhatsApp', message = messages.booking, variant = 'studio', className = '', showStatus = false }: { children?: React.ReactNode; message?: string; variant?: 'studio' | 'editorial'; className?: string; showStatus?: boolean }) {
  const href = whatsappUrl(studio.whatsapp, message)
  return <div className={`whatsapp-action ${className}`}>
    {href ? <Button asChild variant={variant}><a href={href} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{children}<ArrowUpRight size={16}/></a></Button> : <Button variant={variant} disabled title="WhatsApp oficial ainda não informado" aria-describedby={showStatus ? 'contact-pending' : undefined}><MessageCircle size={17}/>{children}<ArrowUpRight size={16}/></Button>}
    {showStatus && !href && <small id="contact-pending" className="pending-note">WhatsApp em breve · contato oficial em configuração</small>}
  </div>
}