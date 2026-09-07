'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ChevronLeft, Play, Sparkles, X } from 'lucide-react'
import { AppNavigation } from '@/components/town-media/app-navigation'
import { InternalChat } from '@/components/town-media/internal-chat'
import { categories, starterMessages, steps, templates, type ChatMessage, type Template } from '@/components/town-media/data'
import { TemplateCard } from '@/components/town-media/template-card'

export default function Page() {
  const [category, setCategory] = useState<(typeof categories)[number]>('الكل')
  const [selected, setSelected] = useState<Template | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatText, setChatText] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages)
  const [unread, setUnread] = useState(0)
  const visible = useMemo(() => category === 'الكل' ? templates : templates.filter((item) => item.category === category), [category])
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const openChat = () => { setChatOpen(true); setUnread(0) }
  const sendMessage = (value = chatText) => {
    const cleanValue = value.trim()
    if (!cleanValue) return
    setMessages((current) => [...current, { id: Date.now(), from: 'user', text: cleanValue, time: 'الآن' }])
    setChatText('')
    window.setTimeout(() => setMessages((current) => [...current, { id: Date.now() + 1, from: 'team', text: 'وصلت فكرتك. سنرتبها معك هنا ونقترح الخطوة التالية.', time: 'الآن' }]), 700)
  }

  return <main id="top" dir="rtl" className="min-h-screen overflow-x-hidden bg-background pb-24 text-foreground">
    <header className="safe-top fixed inset-x-0 top-0 z-40 px-4 pt-3"><div className="glass-bar mx-auto flex h-14 max-w-md items-center justify-between px-3"><button onClick={() => go('top')} aria-label="الرئيسية"><Image src="/town-media-logo.png" alt="تاون ميديا" width={38} height={38} priority className="size-9 rounded-xl object-cover" /></button><span className="text-sm font-bold tracking-wide text-white">TOWN <span className="text-cyan">MEDIA</span></span><button onClick={openChat} className="rounded-full bg-white px-4 py-2 text-xs font-bold text-navy">تواصل معنا</button></div></header>

    <section className="hero-section relative flex min-h-[690px] items-end px-5 pb-14 pt-32"><Image src="/hero-bg.png" alt="" fill priority className="-z-10 object-cover opacity-40" /><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(22,213,255,.18),transparent_32%),linear-gradient(180deg,#050817_0%,#080b18_78%)]" /><div className="mx-auto w-full max-w-md"><div className="eyebrow mb-5"><Sparkles className="size-3.5" /> منصتك لبداية مختلفة</div><h1 className="text-balance text-[3rem] font-bold leading-[1.1] tracking-tight text-white">نصنع حضورك<br /><span className="hero-gradient">بشكل استثنائي.</span></h1><p className="mt-5 max-w-sm text-pretty text-base leading-7 text-white/55">قوالب رقمية مصممة بعناية، وخبرة إبداعية تساعد علامتك على أن تُرى وتُفهم وتُتذكر.</p><div className="mt-8 flex gap-3"><button onClick={() => go('templates')} className="primary-button flex-1">استكشف القوالب <ArrowLeft className="size-4" /></button><button onClick={() => go('how-it-works')} aria-label="كيف نعمل" className="icon-button size-14"><Play className="size-4 fill-current" /></button></div><div className="mt-10 flex items-center gap-6 text-xs text-white/45"><div><strong className="block text-xl text-white">+120</strong>مشروعاً</div><div className="h-8 w-px bg-white/15" /><div><strong className="block text-xl text-white">4.9/5</strong>رضا العملاء</div></div></div></section>

    <section id="templates" className="section-shell"><div className="mx-auto max-w-md"><div className="mb-7"><p className="eyebrow-text">ابدأ من هنا</p><div className="mt-2 flex items-end justify-between"><h2 className="section-title">تصميم يليق بفكرتك.</h2><span className="text-xs text-white/35">{visible.length} قوالب</span></div></div><div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2" role="tablist" aria-label="تصنيفات القوالب">{categories.map((item) => <button key={item} role="tab" aria-selected={category === item} onClick={() => setCategory(item)} className={`category-pill ${category === item ? 'category-pill-active' : ''}`}>{item}</button>)}</div>{visible.length > 0 ? <div className="no-scrollbar -mx-5 mt-6 flex snap-x gap-4 overflow-x-auto px-5 pb-3">{visible.map((item) => <TemplateCard key={item.title} item={item} onOpen={setSelected} />)}</div> : <div className="empty-state mt-6">لا توجد قوالب في هذا التصنيف حالياً.</div>}</div></section>

    <section id="how-it-works" className="section-shell border-y border-white/5 bg-card/35"><div className="mx-auto max-w-md"><p className="eyebrow-text">بكل بساطة</p><h2 className="section-title mt-2">من الفكرة إلى الواقع،<br />نرافقك في كل خطوة.</h2><div className="mt-10 flex flex-col gap-7">{steps.map(([number, title, text]) => <div key={number} className="flex gap-4 border-b border-white/10 pb-7 last:border-0"><span className="font-mono text-sm text-cyan">{number}</span><div><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}</div></div></section>

    <section className="section-shell"><div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-navy p-6"><p className="eyebrow-text">تواصل داخلي</p><h2 className="mt-3 text-3xl font-bold leading-tight text-white">فكرتك تبدأ<br /><span className="hero-gradient">من محادثة.</span></h2><p className="mt-4 text-sm leading-6 text-white/55">استخدم المساحة الداخلية لكتابة فكرتك أو الاستفسار عن القوالب. لا يوجد إرسال خارجي حالياً.</p><button onClick={openChat} className="primary-button mt-6 w-full">افتح المحادثة <ArrowLeft className="size-4" /></button></div></section>

    <AppNavigation onHome={() => go('top')} onTemplates={() => go('templates')} onHowItWorks={() => go('how-it-works')} onChat={openChat} unread={unread} />
    {chatOpen && <InternalChat messages={messages} text={chatText} onTextChange={setChatText} onSend={sendMessage} onClose={() => setChatOpen(false)} />}
    {selected && <div className="fixed inset-0 z-50 flex items-end bg-navy/75 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`معاينة ${selected.title}`} onClick={() => setSelected(null)}><div className="sheet-in relative w-full rounded-t-[2rem] border-t border-white/15 bg-card p-5 pb-8" onClick={(event) => event.stopPropagation()}><button onClick={() => setSelected(null)} aria-label="إغلاق" className="icon-button absolute left-5 top-5 size-9"><X className="size-4" /></button><div className="relative mt-8 aspect-video overflow-hidden rounded-2xl"><Image src={selected.image} alt={`معاينة ${selected.title}`} fill className="object-cover" /></div><h3 className="mt-5 text-2xl font-bold text-white">قالب {selected.title}</h3><p className="mt-1 text-sm text-muted-foreground">{selected.tone} · مصمم ليبدأ معك</p><button onClick={openChat} className="primary-button mt-6 w-full">ناقش هذا القالب داخلياً <ArrowLeft className="size-4" /></button></div></div>}
  </main>
}
