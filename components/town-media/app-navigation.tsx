'use client'

import { Home, Layers3, Menu, MessageCircle } from 'lucide-react'

type AppNavigationProps = { onHome: () => void; onTemplates: () => void; onHowItWorks: () => void; onChat: () => void; unread: number }

export function AppNavigation({ onHome, onTemplates, onHowItWorks, onChat, unread }: AppNavigationProps) {
  return <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#080b18]/92 px-5 pt-2 backdrop-blur-2xl" aria-label="التنقل الرئيسي"><div className="mx-auto flex max-w-md items-center justify-around pb-1"><button onClick={onHome} className="nav-item nav-item-active"><Home className="size-5" /><span>الرئيسية</span></button><button onClick={onTemplates} className="nav-item"><Layers3 className="size-5" /><span>القوالب</span></button><button onClick={onHowItWorks} className="nav-item"><Menu className="size-5" /><span>كيف نعمل</span></button><button onClick={onChat} className="nav-item relative"><MessageCircle className="size-5" /><span>تواصل</span>{unread > 0 && <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-cyan text-[9px] font-bold text-navy">{unread}</span>}</button></div></nav>
}
