const ph = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const team = [
  { name: 'Артем Ковальчук', role: 'Засновник, CEO', photo: ph('1507003211169-0a1dd7228f2d') },
  { name: 'Ірина Левченко', role: 'Головна архітекторка', photo: ph('1494790108377-be9c29b29330') },
  { name: 'Олег Дорош', role: 'Керівник будівництва', photo: ph('1500648767791-00dcc994a43e') },
  { name: 'Марія Гнатюк', role: 'Дизайнерка інтерʼєру', photo: ph('1438761681033-6461ffad8d80') },
  { name: 'Дмитро Савчук', role: 'Інженер ОВК', photo: ph('1472099645785-5658abf4ff4e') },
  { name: 'Софія Бондар', role: 'Менеджерка проєктів', photo: ph('1544005313-94ddf0286df2') },
]
