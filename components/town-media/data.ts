export const categories = ['الكل', 'مطاعم', 'متاجر', 'شركات', 'إبداع'] as const

export const templates = [
  { title: 'سُلاف', category: 'مطاعم', tag: 'الأكثر طلباً', image: '/template-1.png', tone: 'فاتح وهادئ' },
  { title: 'نواة', category: 'شركات', tag: 'جديد', image: '/template-2.png', tone: 'تقني عصري' },
  { title: 'لُمعان', category: 'متاجر', tag: 'مختار بعناية', image: '/template-3.png', tone: 'فاخر وأنيق' },
  { title: 'مدى', category: 'إبداع', tag: 'إبداعي', image: '/template-4.png', tone: 'جريء ومختلف' },
] as const

export const steps = [
  ['01', 'اختر الإلهام', 'ابدأ بقالب يقترب من رؤيتك.'],
  ['02', 'شارك فكرتك', 'نصغي لك ونصمم التجربة المناسبة.'],
  ['03', 'أطلق حضورك', 'نحوّل فكرتك إلى حضور رقمي يُتذكر.'],
] as const

export type Template = (typeof templates)[number]
export type ChatMessage = { id: number; text: string; from: 'team' | 'user'; time: string }

export const starterMessages: ChatMessage[] = [
  { id: 1, from: 'team', text: 'أهلاً بك في تاون ميديا. كيف نقدر نساعدك اليوم؟', time: 'الآن' },
  { id: 2, from: 'team', text: 'هذه مساحة داخلية تجريبية لفهم فكرتك.', time: 'الآن' },
]

export const quickReplies = ['اختيار قالب مناسب', 'أريد تصميم مخصص', 'ما هي الخطوات؟']
