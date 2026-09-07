'use client'

import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import type { Template } from './data'

type TemplateCardProps = { item: Template; onOpen: (item: Template) => void }

export function TemplateCard({ item, onOpen }: TemplateCardProps) {
  return (
    <article
      className="template-card w-[78vw] max-w-[310px] shrink-0 snap-center"
      role="button"
      tabIndex={0}
      aria-label={`معاينة قالب ${item.title}`}
      onClick={() => onOpen(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen(item)
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/10 bg-card">
        <Image src={item.image} alt={`قالب ${item.title}`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-navy/70 px-3 py-1.5 text-[11px] text-white backdrop-blur-md">{item.tag}</span>
        <span className="absolute bottom-3 right-3 text-xs text-white/75">معاينة حية</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div><h3 className="font-bold text-white">{item.title}</h3><p className="mt-1 text-xs text-muted-foreground">{item.tone}</p></div>
        <span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white"><ArrowLeft className="size-4" /></span>
      </div>
    </article>
  )
}
