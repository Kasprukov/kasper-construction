const ph = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const team = [
  { name: { uk: 'Артем Ковальчук', en: 'Artem Kovalchuk' }, role: { uk: 'Засновник, CEO', en: 'Founder, CEO' }, photo: ph('1507003211169-0a1dd7228f2d') },
  { name: { uk: 'Ірина Левченко', en: 'Iryna Levchenko' }, role: { uk: 'Головна архітекторка', en: 'Lead architect' }, photo: ph('1494790108377-be9c29b29330') },
  { name: { uk: 'Олег Дорош', en: 'Oleh Dorosh' }, role: { uk: 'Керівник будівництва', en: 'Head of construction' }, photo: ph('1500648767791-00dcc994a43e') },
  { name: { uk: 'Марія Гнатюк', en: 'Mariia Hnatiuk' }, role: { uk: 'Дизайнерка інтерʼєру', en: 'Interior designer' }, photo: ph('1438761681033-6461ffad8d80') },
  { name: { uk: 'Дмитро Савчук', en: 'Dmytro Savchuk' }, role: { uk: 'Інженер ОВК', en: 'HVAC engineer' }, photo: ph('1472099645785-5658abf4ff4e') },
  { name: { uk: 'Софія Бондар', en: 'Sofiia Bondar' }, role: { uk: 'Менеджерка проєктів', en: 'Project manager' }, photo: ph('1544005313-94ddf0286df2') },
]
