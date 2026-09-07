'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowUpLeft, Check, ChevronDown, Menu, Play, Search, Sparkles, X } from 'lucide-react'

const categories = ['الكل', 'مطاعم ومقاهي', 'متاجر إلكترونية', 'شركات وخدمات', 'إبداع وفنون']

const templates = [
  { title: 'سُلاف', category: 'مطاعم ومقاهي', tag: 'الأكثر طلباً', image: '/template-1.png', color: 'فاتح وهادئ' },
  { title: 'نواة', category: 'شركات وخدمات', tag: 'جديد', image: '/template-2.png', color: 'تقني عصري' },
  { title: 'لُمعان', category: 'متاجر إلكترونية', tag: 'مختار بعناية', image: '/template-3.png', color: 'فاخر وأنيق' },
  { title: 'مدى', category: 'إبداع وفنون', tag: 'إبداعي', image: '/template-4.png', color: 'جريء ومختلف' },
]

const steps = [
  { number: '01', title: 'اختر نقطة البداية', text: 'استكشف قوالبنا الجاهزة واختر التصميم الأقرب لرؤيتك.' },
  { number: '02', title: 'أخبرنا عن فكرتك', text: 'شاركنا التفاصيل، وسنحوّلها إلى تجربة رقمية تناسبك.' },
  { number: '03', title: 'أطلق حضورك', text: 'نُنجز كل شيء بدقة لتبدأ قصتك الرقمية بثقة.' },
]

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const visibleTemplates = useMemo(
    () => activeCategory === 'الكل' ? templates : templates.filter((template) => template.category === activeCategory),
    [activeCategory],
  )

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-navy/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-3" aria-label="العودة للرئيسية">
            <Image src="/town-media-logo.png" alt="شعار تاون ميديا" width={38} height={38} className="size-9 rounded-xl object-cover" />
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">TOWN <span className="text-cyan">MEDIA</span></span>
          </button>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <button onClick={() => scrollTo('templates')} className="transition-colors hover:text-white">القوالب</button>
            <button onClick={() => scrollTo('how-it-works')} className="transition-colors hover:text-white">كيف نعمل</button>
            <button onClick={() => scrollTo('about')} className="transition-colors hover:text-white">عن تاون ميديا</button>
          </div>
          <button onClick={() => scrollTo('contact')} className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy transition-transform hover:scale-105 sm:flex">
            ابدأ مشروعك <ArrowLeft className="size-4" />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full p-2 text-white md:hidden" aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}>
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {mobileOpen && <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-white/10 bg-navy/95 p-3 text-white backdrop-blur-xl md:hidden"><button onClick={() => scrollTo('templates')} className="rounded-2xl p-3 text-right hover:bg-white/10">القوالب</button><button onClick={() => scrollTo('how-it-works')} className="rounded-2xl p-3 text-right hover:bg-white/10">كيف نعمل</button><button onClick={() => scrollTo('about')} className="rounded-2xl p-3 text-right hover:bg-white/10">عن تاون ميديا</button></div>}
      </nav>

      <section id="top" className="relative flex min-h-[760px] items-center px-6 pt-32 lg:min-h-[860px] lg:px-10">
        <div className="absolute inset-0 -z-10 bg-navy" />
        <Image src="/hero-bg.png" alt="" fill priority className="-z-10 object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_30%,rgba(8,194,255,0.14),transparent_26%),radial-gradient(circle_at_75%_60%,rgba(113,69,255,0.12),transparent_30%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]" id="about">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm text-cyan"><Sparkles className="size-4" /> منصتك لبداية مختلفة</div>
            <h1 className="text-balance text-5xl font-semibold leading-[1.12] tracking-tight text-white sm:text-7xl lg:text-[6.5rem]">نصنع حضورك<br /><span className="hero-gradient">بشكل استثنائي.</span></h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-white/55 sm:text-xl">قوالب رقمية مصممة بعناية، وخبرة إبداعية تساعد علامتك على أن تُرى، تُفهم، وتُتذكر.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><button onClick={() => scrollTo('templates')} className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-bold text-navy transition-all hover:gap-5"><span>استكشف القوالب</span><ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /></button><button onClick={() => scrollTo('how-it-works')} className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"><Play className="size-4 fill-current" /> كيف نعمل؟</button></div>
            <div className="mt-14 flex items-center gap-8 text-sm text-white/45"><div><strong className="block text-2xl font-semibold text-white">+120</strong> مشروعاً أطلقناه</div><div className="h-10 w-px bg-white/15" /><div><strong className="block text-2xl font-semibold text-white">4.9/5</strong> رضا عملائنا</div></div>
          </div>
          <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] lg:block"><div className="absolute inset-8 rounded-[40%] border border-cyan/15 bg-cyan/5 blur-3xl" /><div className="relative flex h-full items-center justify-center rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur-md"><Image src="/town-media-logo.png" alt="Town Media" width={430} height={430} className="relative z-10 h-auto w-full object-contain" /><div className="absolute bottom-10 left-10 right-10 flex justify-between text-xs tracking-[0.3em] text-white/30"><span>CREATIVE</span><span>DIGITAL</span></div></div></div>
        </div>
      </section>

      <section id="templates" className="bg-background px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-3 text-sm font-semibold text-cyan">ابدأ من هنا</p><h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">تصميم يليق بفكرتك.</h2><p className="mt-4 max-w-lg leading-7 text-muted-foreground">نقطة بداية ذكية لمشروعك القادم. اختر القالب، عدّل التفاصيل، وانطلق.</p></div><button onClick={() => scrollTo('contact')} className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan">أحتاج تصميماً مخصصاً <ArrowLeft className="size-4" /></button></div><div className="mb-10 flex gap-2 overflow-x-auto pb-2">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-all ${activeCategory === category ? 'bg-white text-navy' : 'border border-white/10 text-white/55 hover:border-white/25 hover:text-white'}`}>{category}</button>)}</div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{visibleTemplates.map((template) => <article key={template.title} className="group cursor-pointer" onClick={() => setSelectedTemplate(template.title)}><div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-card"><Image src={template.image} alt={`قالب ${template.title}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-70" /><span className="absolute right-4 top-4 rounded-full bg-navy/70 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">{template.tag}</span><span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-md">معاينة حية</span></div><div className="mt-4 flex items-start justify-between"><div><h3 className="text-xl font-semibold text-white">{template.title}</h3><p className="mt-1 text-sm text-muted-foreground">{template.category} · {template.color}</p></div><span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all group-hover:border-cyan group-hover:text-cyan"><ArrowUpLeft className="size-4" /></span></div></article>)}</div></div></section>

      <section id="how-it-works" className="border-y border-white/5 bg-card/40 px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="mb-3 text-sm font-semibold text-cyan">بكل بساطة</p><h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">من الفكرة إلى الواقع،<br />نرافقك في كل خطوة.</h2></div><div className="mt-16 grid gap-8 md:grid-cols-3">{steps.map((step) => <div key={step.number} className="border-t border-white/15 pt-6"><span className="font-mono text-sm text-cyan">{step.number}</span><h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3><p className="mt-4 max-w-xs leading-7 text-muted-foreground">{step.text}</p></div>)}</div></div></section>

      <section id="contact" className="px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-navy p-8 sm:p-14 lg:p-20"><div className="grid gap-12 lg:grid-cols-2 lg:items-end"><div><p className="mb-4 text-sm font-semibold text-cyan">خطوتك الأولى تبدأ هنا</p><h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">جاهز لنصنع<br /><span className="hero-gradient">شيئاً استثنائياً؟</span></h2><p className="mt-6 max-w-md leading-7 text-white/55">أخبرنا عن فكرتك، وسنعود إليك بمقترح يناسب طموحك.</p></div>{submitted ? <div className="rounded-3xl border border-cyan/30 bg-cyan/10 p-8 text-center"><div className="mx-auto flex size-12 items-center justify-center rounded-full bg-cyan text-navy"><Check className="size-6" /></div><h3 className="mt-5 text-2xl font-semibold text-white">وصلتنا رسالتك</h3><p className="mt-2 text-white/55">سنتواصل معك قريباً لنبدأ الحديث.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-4"><input required aria-label="الاسم" placeholder="الاسم الكامل" className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-cyan" /><input required type="email" aria-label="البريد الإلكتروني" placeholder="البريد الإلكتروني" className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-cyan" /><textarea required aria-label="عن المشروع" placeholder="أخبرنا قليلاً عن مشروعك" rows={3} className="resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-cyan" /><button className="flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-bold text-navy transition-transform hover:scale-[1.02]">أرسل طلبك <ArrowLeft className="size-4" /></button></form>}</div></div></section>

      <footer className="border-t border-white/5 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-right"><div className="flex items-center gap-3"><Image src="/town-media-logo.png" alt="Town Media" width={28} height={28} className="size-7 rounded-lg object-cover" /><span>© 2024 Town Media</span></div><span>إبداع · احترافية · نتائج</span></div></footer>

      {selectedTemplate && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`معاينة قالب ${selectedTemplate}`} onClick={() => setSelectedTemplate(null)}><div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-card" onClick={(event) => event.stopPropagation()}><button onClick={() => setSelectedTemplate(null)} className="absolute left-4 top-4 z-10 rounded-full bg-navy/80 p-2 text-white" aria-label="إغلاق"><X className="size-5" /></button><div className="relative aspect-video"><Image src={templates.find((template) => template.title === selectedTemplate)?.image ?? '/template-1.png'} alt={`معاينة ${selectedTemplate}`} fill className="object-cover" /></div><div className="flex items-center justify-between p-6"><div><h3 className="text-2xl font-semibold text-white">قالب {selectedTemplate}</h3><p className="mt-1 text-sm text-muted-foreground">هذه معاينة أولية للتصميم</p></div><button onClick={() => { setSelectedTemplate(null); scrollTo('contact') }} className="rounded-full bg-white px-5 py-3 text-sm font-bold text-navy">أريد هذا القالب</button></div></div></div>}
    </main>
  )
}
