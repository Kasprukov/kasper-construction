export const journalCategories = [
  { id: 'all', label: { uk: 'Усі', en: 'All' } },
  { id: 'process', label: { uk: 'Процес', en: 'Process' } },
  { id: 'design', label: { uk: 'Дизайн', en: 'Design' } },
  { id: 'construction', label: { uk: 'Будівництво', en: 'Construction' } },
]

const CAT = {
  process: { uk: 'Процес', en: 'Process' },
  design: { uk: 'Дизайн', en: 'Design' },
  construction: { uk: 'Будівництво', en: 'Construction' },
}

export const posts = [
  {
    slug: 'budget-without-surprises',
    cat: 'process',
    category: CAT.process,
    title: { uk: 'Чому фінальна сума буває вдвічі більшою — і як цього не допустити', en: 'Why the final bill doubles — and how to avoid it' },
    excerpt: { uk: 'Розповідаємо, звідки беруться доплати «по факту» і чому ми так не працюємо.', en: 'Where “we’ll-add-it-later” charges come from, and why we don’t work that way.' },
    date: '2026-05-12',
    read: 6,
    cover: '/img/hero-build.jpg',
    body: [
      { uk: 'Класична історія: домовились на одну суму, а під кінець будівництва вона виросла вдвічі. Зазвичай це не зловмисність, а просто кошторис, який ніхто толком не порахував на старті — «по ходу розберемось».', en: 'The classic story: you agree on one number, and by the end of the build it has doubled. Usually it’s not malice — just an estimate nobody really worked out up front, with a “we’ll figure it out as we go”.' },
      { uk: 'Ми так не вміємо. Перед стартом проходимось по кожній позиції: матеріали, обсяги, постачальники. Так, це довше на етапі підготовки. Зате потім ви бачите, за що платите, а не дивитесь на цифру, що росте сама собою.', en: 'We can’t work like that. Before we start, we go through every line: materials, quantities, suppliers. Yes, the prep takes longer. But then you see what you’re paying for, instead of watching a number grow on its own.' },
      { uk: 'Якщо щось таки змінюється — наприклад, ви захотіли інший камінь — ми показуємо різницю до того, як купити, а не після. Дрібниця, але саме на таких дрібницях бюджети й тікають.', en: 'If something does change — say you want a different stone — we show the difference before buying, not after. A small thing, but budgets leak exactly on small things like this.' },
    ],
  },
  {
    slug: 'light-in-interior',
    cat: 'design',
    category: CAT.design,
    title: { uk: 'Світло важливіше за меблі. Серйозно', en: 'Light matters more than furniture. Really' },
    excerpt: { uk: 'Чому про освітлення треба думати ще до штукатурки, а не коли вже поклеїли шпалери.', en: 'Why lighting should be planned before plastering, not after the wallpaper is up.' },
    date: '2026-04-02',
    read: 5,
    cover: '/img/int-6.jpg',
    body: [
      { uk: 'Можна купити дорогі меблі й гарну плитку, а кімната все одно виглядатиме дешево. Часто річ у світлі: одна люстра по центру стелі робить навіть хороший інтерʼєр пласким.', en: 'You can buy expensive furniture and nice tiles, and the room will still look cheap. Often it’s the light: a single ceiling fixture flattens even a good interior.' },
      { uk: 'Тому про сценарії світла ми думаємо ще на чорнових роботах, коли можна сховати проводку й підсвітку куди треба. Потім уже пізно — довбати готову стіну ніхто не хоче.', en: 'So we plan lighting scenes during rough works, while we can run the wiring and hidden light wherever it’s needed. Later it’s too late — nobody wants to chase a finished wall.' },
      { uk: 'Кілька сценаріїв на одну кімнату — робоче, вечірнє, акцентне — і простір живе по-різному вранці й увечері. Це коштує копійки порівняно з декором, а ефект більший.', en: 'A few scenes per room — task, evening, accent — and the space lives differently morning and night. It costs pennies next to decor, with a bigger effect.' },
    ],
  },
  {
    slug: 'tech-supervision-why',
    cat: 'construction',
    category: CAT.construction,
    title: { uk: 'Навіщо платити за технагляд, якщо є прораб', en: 'Why pay for supervision if you have a foreman' },
    excerpt: { uk: 'Коротко про те, де зазвичай економлять будівельники і чому це видно не одразу.', en: 'A short take on where builders usually cut corners — and why you don’t see it right away.' },
    date: '2026-02-20',
    read: 4,
    cover: '/img/hero-construction.jpg',
    body: [
      { uk: 'Технагляд — це людина на вашому боці, яка перевіряє, що зробили саме те і саме так, як у проєкті. Не «загалом нормально», а по факту.', en: 'Supervision is someone on your side who checks that what got built is exactly what’s in the project, exactly how. Not “fine overall”, but for real.' },
      { uk: 'Економлять майже завжди на тому, чого не видно: гідроізоляція, армування, вузли інженерії. Поки все працює — питань немає. А вилазить це через рік-два, коли переробляти найдорожче.', en: 'Corners get cut almost always on what you can’t see: waterproofing, rebar, engineering joints. While it works, no questions. It surfaces in a year or two, when redoing costs the most.' },
      { uk: 'Наша задача — зафіксувати такі моменти на етапі, поки їх ще можна виправити дешево. По досвіду, технагляд окуповується вже на першому серйозному обʼєкті.', en: 'Our job is to catch these while they’re still cheap to fix. In our experience, supervision pays for itself on the first serious project.' },
    ],
  },
  {
    slug: 'materials-that-age-well',
    cat: 'design',
    category: CAT.design,
    title: { uk: 'Матеріали, які з роками стають кращими', en: 'Materials that get better with age' },
    excerpt: { uk: 'Чому інколи дорожче — це насправді дешевше, якщо рахувати на 10 років.', en: 'Why pricier is sometimes cheaper, if you count over ten years.' },
    date: '2026-03-18',
    read: 5,
    cover: '/img/int-4.jpg',
    body: [
      { uk: 'Є матеріали, що виглядають ідеально в день здачі й жахливо через рік. А є навпаки — камінь, масив дерева, латунь — вони з часом набувають характеру, а не зношуються.', en: 'Some materials look perfect on handover day and awful a year later. Others are the opposite — stone, solid wood, brass — they gain character over time instead of wearing out.' },
      { uk: 'Ми за друге. Так, на старті це дорожче. Але якщо порахувати, скільки разів доведеться переробляти дешевий варіант, картина змінюється.', en: 'We’re for the second kind. Yes, it costs more up front. But once you count how many times you’ll redo the cheap option, the picture changes.' },
      { uk: 'Тому на зустрічі ми чесно показуємо, як матеріал поводитиметься через пʼять років — а не лише гарну картинку на рендері.', en: 'So at the meeting we honestly show how a material will behave in five years — not just a pretty render.' },
    ],
  },
  {
    slug: 'timeline-of-a-house',
    cat: 'construction',
    category: CAT.construction,
    title: { uk: 'Скільки насправді будується будинок', en: 'How long a house actually takes to build' },
    excerpt: { uk: 'Спойлер: не «за пів року». Розкладаємо реальний таймлайн по етапах.', en: 'Spoiler: not “in six months”. We break the real timeline down by stage.' },
    date: '2026-01-28',
    read: 7,
    cover: '/img/hero-house.jpg',
    body: [
      { uk: 'Найчастіше очікують будинок «за літо». На практиці одне літо — це добре якщо коробка з дахом, і то не завжди.', en: 'Most people expect a house “in one summer”. In practice one summer is, at best, a shell with a roof — and not always that.' },
      { uk: 'Спочатку проєкт і дозволи — це місяць-два, які легко недооцінити. Далі нульовий цикл, конструктив, інженерія, оздоблення. Кожен етап залежить від попереднього, перескочити не вийде.', en: 'First the project and permits — a month or two that’s easy to underestimate. Then groundworks, structure, engineering, finishing. Each stage depends on the previous one; you can’t skip ahead.' },
      { uk: 'У сумі нормальний приватний будинок — це 10–14 місяців активних робіт. Чесний графік на старті не прискорить будівництво, але збереже вам нерви: ви розумієте, що зараз відбувається і що далі.', en: 'In total, a normal private house is 10–14 months of active work. An honest schedule won’t speed up the build, but it will save your nerves: you know what’s happening now and what’s next.' },
    ],
  },
  {
    slug: 'one-contact-principle',
    cat: 'process',
    category: CAT.process,
    title: { uk: 'Один телефон замість пʼяти', en: 'One phone number instead of five' },
    excerpt: { uk: 'Що не так, коли за обʼєкт відповідає одразу кілька підрядників.', en: 'What goes wrong when several contractors are responsible for one site.' },
    date: '2025-12-10',
    read: 4,
    cover: '/img/office-prohub.jpg',
    body: [
      { uk: 'Коли на обʼєкті пʼять окремих бригад, відповідального немає взагалі. Електрики кивають на штукатурів, ті — на постачальників, а ви посередині намагаєтесь зрозуміти, хто винен.', en: 'When there are five separate crews on site, nobody is actually responsible. The electricians point at the plasterers, they point at the suppliers, and you’re in the middle trying to figure out who’s to blame.' },
      { uk: 'Ми працюємо інакше: один менеджер, один графік, один бюджет. Усі питання — через нього, а не через груповий чат на двадцять людей.', en: 'We work differently: one manager, one schedule, one budget. Everything goes through them, not through a twenty-person group chat.' },
      { uk: 'Це не лише про зручність. Там, де зникають «сірі зони» між підрядниками, зникають і гроші, що в них зазвичай провалюються.', en: 'It’s not only about convenience. Where the grey zones between contractors disappear, so does the money that usually falls into them.' },
    ],
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
