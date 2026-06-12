const ph = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&q=80`

export const testimonials = [
  {
    quote: {
      uk: 'Будували нам будинок під Києвом майже рік. Пару разів зміщували строки через погоду, але попереджали заздалегідь — і в кошторис уклались, що для мене було головним.',
      en: 'They built our house near Kyiv for almost a year. Twice the timeline shifted because of weather, but they warned us in advance — and they stayed within budget, which mattered most to me.',
    },
    name: { uk: 'Олена Кравець', en: 'Olena Kravets' },
    role: { uk: 'Будинок, Козин', en: 'House, Kozyn' },
    photo: ph('1544005313-94ddf0286df2'),
  },
  {
    quote: {
      uk: 'Найбільше зайшло, що щопонеділка приходив звіт із фото з обʼєкта. Я бачив, на що йдуть гроші, і не мусив дзвонити прорабу щодня.',
      en: 'What I liked most was the Monday report with photos from the site. I could see where the money went and didn’t have to call the foreman every day.',
    },
    name: { uk: 'Андрій Мельник', en: 'Andrii Melnyk' },
    role: { uk: 'Офіс компанії, Поділ', en: 'Company office, Podil' },
    photo: ph('1507003211169-0a1dd7228f2d'),
  },
  {
    quote: {
      uk: 'З підрядниками працюю давно, є з чим порівняти. Тут хоча б не довелось нічого переробляти за ними, а дрібні питання вирішували на місці.',
      en: 'I’ve worked with contractors for years, so I have something to compare to. At least here I didn’t have to redo anything after them, and small issues were solved on the spot.',
    },
    name: { uk: 'Ірина Гордієнко', en: 'Iryna Hordiienko' },
    role: { uk: 'Девелопер', en: 'Developer' },
    photo: ph('1438761681033-6461ffad8d80'),
  },
]
