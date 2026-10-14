import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { studio } from '@/lib/studio'

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const image = selected === null ? undefined : studio.images[selected]
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + studio.images.length) % studio.images.length)
  return <section id="galeria" className="section gallery-section"><div className="container"><div className="section-heading gallery-heading"><div><p className="eyebrow">UM UNIVERSO DE POSSIBILIDADES</p><h2>Texturas, formas<br/>e <em>possibilidades.</em></h2></div><p>Cada cabelo é único. Encontre inspiração<br className="desktop-break"/> para valorizar o seu.</p></div>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null) }}><div className="gallery-grid">{studio.images.map((item, index) => <Button variant="photo" key={item.src} aria-label={`Ampliar imagem: ${item.label}`} onClick={() => setSelected(index)}><img src={item.src} alt={item.alt} width={768} height={960} loading="lazy"/><span className="photo-caption">{item.label}<ArrowUpRight size={20}/></span><span className="photo-number">0{index + 1}</span></Button>)}</div><Dialog.Portal><Dialog.Overlay className="gallery-overlay"/><Dialog.Content className="gallery-modal" onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1) } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) } }}><Dialog.Title className="sr-only">{image?.label ?? 'Galeria de inspiração'}</Dialog.Title><Dialog.Description className="modal-caption">Imagens ilustrativas de referência · não representam trabalhos do estúdio</Dialog.Description>{image && <img src={image.src} alt={image.alt} width={768} height={960}/>}<Dialog.Close asChild><Button variant="tool" size="icon" className="gallery-close" aria-label="Fechar imagem"><X/></Button></Dialog.Close><div className="gallery-controls"><Button variant="tool" size="icon" onClick={() => move(-1)} aria-label="Imagem anterior"><ArrowLeft/></Button><span>{selected === null ? 0 : selected + 1} / {studio.images.length}</span><Button variant="tool" size="icon" onClick={() => move(1)} aria-label="Próxima imagem"><ArrowRight/></Button></div></Dialog.Content></Dialog.Portal></Dialog.Root>
    <p className="image-disclaimer">Imagens ilustrativas criadas para inspiração. Não representam trabalhos realizados pelo Studio.</p>
  </div></section>
}