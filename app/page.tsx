'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, Check, ChevronLeft, Home, Layers3, Menu, MessageCircle, Play, Sparkles, X } from 'lucide-react'

const categories = ['الكل', 'مطاعم', 'متاجر', 'شركات', 'إبداع']
const templates = [
  { title: 'سُلاف', category: 'مطاعم', tag: 'الأكثر طلباً', image: '/template-1.png', tone: 'فاتح وهادئ' },
  { title: 'نواة', category: 'شركات', tag: 'جديد', image: '/template-2.png', tone: 'تقني عصري' },
  { title: 'لُمعان', category: 'متاجر', tag: 'مختار بعناية', image: '/template-3.png', tone: 'فاخر وأنيق' },
  { title: 'مدى', category: 'إبداع', tag: 'إبداعي', image: '/template-4.png', tone: 'جريء ومختلف' },
]

const steps = [
  ['01', 'اختر الإلهام', 'ابدأ بقالب يقترب من رؤيتك.'],
  ['02', 'شارك فكرتك', 'نصغي لك ونصمم التجربة المناسبة.'],
  ['03', 'أطلق حضورك', 'نحوّل فكرتك إلى حضور رقمي يُتذكر.'],
]

export default function Page() {
  const [category, setCategory] = useState('الكل')
  const [selected, setSelected] = useState<(typeof templates)[number] | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const visible = useMemo(() => category === 'الكل' ? templates : templates.filter((item) => item.category === category), [category])
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main dir="rtl" className="min-h-screen overflow-x-hidden bg-background pb-24 text-foreground">
      <header className="safe-top fixed inset-x-0 top-0 z-40 px-4 pt-3">
        <div className="mx-auto flex h-14 max-w-md items-center justify-between rounded-full border border-white/10 bg-[#080b18]/75 px-3 shadow-2xl backdrop-blur-2xl">
          <button onClick={() => go('top')} aria-label="الرئيسية"><Image src="/town-media-logo.png" alt="تاون ميديا" width={38} height={38} className="size-9 rounded-xl object-cover" /></button>
          <span className="text-sm font-bold tracking-wide text-white">TOWN <span className="text-cyan">MEDIA</span></span>
          <button onClick={() => go('contact')} className="rounded-full bg-white px-4 py-2 text-xs font-bold text-navy">ابدأ الآن</button>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[720px] items-end px-5 pb-14 pt-32">
        <Image src="/hero-bg.png" alt="" fill priority className="-z-10 object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(22,213,255,.2),transparent_32%),linear-gradient(180deg,#050817_0%,#080b18_75%)]" />
        <div className="mx-auto w-full max-w-md">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-2 text-xs text-cyan"><Sparkles className="size-3.5" /> منصتك لبداية مختلفة</div>
          <h1 className="text-balance text-[3.2rem] font-bold leading-[1.1] tracking-tight text-white">نصنع حضورك<br /><span className="hero-gradient">بشكل استثنائي.</span></h1>
          <p className="mt-5 max-w-sm text-pretty text-base leading-7 text-white/55">قوالب رقمية مصممة بعناية، وخبرة إبداعية تساعد علامتك على أن تُرى وتُفهم وتُتذكر.</p>
          <div className="mt-8 flex gap-3"><button onClick={() => go('templates')} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-sm font-bold text-navy">استكشف القوالب <ArrowLeft className="size-4" /></button><button onClick={() => go('how-it-works')} className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white"><Play className="size-4 fill-current" /></button></div>
          <div className="mt-10 flex items-center gap-6 text-xs text-white/45"><div><strong className="block text-xl text-white">+120</strong>مشروعاً</div><div className="h-8 w-px bg-white/15" /><div><strong className="block text-xl text-white">4.9/5</strong>رضا العملاء</div></div>
        </div>
      </section>

      <section id="templates" className="px-5 py-16"><div className="mx-auto max-w-md"><div className="mb-7 flex items-end justify-between"><div><p className="mb-2 text-xs font-bold text-cyan">ابدأ من هنا</p><h2 className="text-3xl font-bold text-white">تصميم يليق بفكرتك.</h2></div><button onClick={() => go('contact')} className="text-xs font-bold text-white/60">مخصص <ChevronLeft className="inline size-4" /></button></div><div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold ${category === item ? 'bg-white text-navy' : 'border border-white/10 text-white/55'}`}>{item}</button>)}</div><div className="no-scrollbar -mx-5 mt-6 flex snap-x gap-4 overflow-x-auto px-5 pb-3">{visible.map((item) => <article key={item.title} onClick={() => setSelected(item)} className="w-[78vw] max-w-[310px] shrink-0 snap-center"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-card"><Image src={item.image} alt={`قالب ${item.title}`} fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" /><span className="absolute right-3 top-3 rounded-full bg-navy/70 px-3 py-1.5 text-[11px] text-white backdrop-blur-md">{item.tag}</span><span className="absolute bottom-3 right-3 text-xs text-white/75">معاينة حية</span></div><div className="mt-3 flex items-center justify-between"><div><h3 className="font-bold text-white">{item.title}</h3><p className="mt-1 text-xs text-muted-foreground">{item.tone}</p></div><span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white"><ArrowLeft className="size-4" /></span></div></article>)}</div></div></section>

      <section id="how-it-works" className="border-y border-white/5 bg-card/35 px-5 py-16"><div className="mx-auto max-w-md"><p className="mb-2 text-xs font-bold text-cyan">بكل بساطة</p><h2 className="text-3xl font-bold leading-tight text-white">من الفكرة إلى الواقع،<br />نرافقك في كل خطوة.</h2><div className="mt-10 flex flex-col gap-7">{steps.map(([number, title, text]) => <div key={number} className="flex gap-4 border-b border-white/10 pb-7 last:border-0"><span className="font-mono text-sm text-cyan">{number}</span><div><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}</div></div></section>

      <section id="contact" className="px-5 py-16"><div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-navy p-6"><p className="text-xs font-bold text-cyan">خطوتك الأولى تبدأ هنا</p><h2 className="mt-3 text-3xl font-bold leading-tight text-white">جاهز لنصنع<br /><span className="hero-gradient">شيئاً استثنائياً؟</span></h2>{submitted ? <div className="mt-8 rounded-2xl border border-cyan/30 bg-cyan/10 p-6 text-center"><div className="mx-auto flex size-11 items-center justify-center rounded-full bg-cyan text-navy"><Check className="size-5" /></div><h3 className="mt-4 font-bold text-white">وصلتنا رسالتك</h3><p className="mt-2 text-sm text-white/55">سنتواصل معك قريباً.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-7 flex flex-col gap-3"><input required aria-label="الاسم الكامل" placeholder="الاسم الكامل" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan" /><input required type="email" aria-label="البريد الإلكتروني" placeholder="البريد الإلكتروني" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan" /><textarea required aria-label="عن المشروع" placeholder="أخبرنا عن مشروعك" rows={3} className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan" /><button className="rounded-2xl bg-white px-4 py-4 text-sm font-bold text-navy">أرسل طلبك</button></form>}</div></section>

      <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#080b18]/90 px-5 pb-3 pt-2 backdrop-blur-2xl"><div className="mx-auto flex max-w-md items-center justify-around"><button onClick={() => go('top')} className="flex flex-col items-center gap-1 text-cyan"><Home className="size-5" /><span className="text-[10px]">الرئيسية</span></button><button onClick={() => go('templates')} className="flex flex-col items-center gap-1 text-white/50"><Layers3 className="size-5" /><span className="text-[10px]">القوالب</span></button><button onClick={() => go('how-it-works')} className="flex flex-col items-center gap-1 text-white/50"><Menu className="size-5" /><span className="text-[10px]">كيف نعمل</span></button><button onClick={() => go('contact')} className="flex flex-col items-center gap-1 text-white/50"><MessageCircle className="size-5" /><span className="text-[10px]">تواصل</span></button></div></nav>

      {selected && <div className="fixed inset-0 z-50 flex items-end bg-navy/70 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`معاينة ${selected.title}`} onClick={() => setSelected(null)}><div className="sheet-in relative w-full rounded-t-[2rem] border-t border-white/15 bg-card p-5 pb-8" onClick={(event) => event.stopPropagation()}><button onClick={() => setSelected(null)} aria-label="إغلاق" className="absolute left-5 top-5 flex size-9 items-center justify-center rounded-full bg-white/10 text-white"><X className="size-4" /></button><div className="relative mt-8 aspect-video overflow-hidden rounded-2xl"><Image src={selected.image} alt={`معاينة ${selected.title}`} fill className="object-cover" /></div><h3 className="mt-5 text-2xl font-bold text-white">قالب {selected.title}</h3><p className="mt-1 text-sm text-muted-foreground">{selected.tone} · مصمم ليبدأ معك</p><button onClick={() => { setSelected(null); go('contact') }} className="mt-6 w-full rounded-2xl bg-white py-4 text-sm font-bold text-navy">أريد هذا القالب <ArrowLeft className="mr-2 inline size-4" /></button></div></div>}
    </main>
  )
}
