# Сайт адвоката Анатолія Сарнавського

Сучасний преміальний сайт адвоката з фокусом на захист по економічним злочинам.

## Технології

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** для анімацій
- **EmailJS** для форм
- **Lucide React** для іконок
- **i18n** система перекладів (6 мов)

## Швидкий старт

### 1. Встановлення залежностей

```bash
cd website
npm install
```

**Важливо:** Після встановлення залежностей, переконайтесь що всі фото з папки `files` скопійовані в `public/assets/`.

### 2. Налаштування змінних оточення

Створіть файл `.env.local` на основі `.env.example`:

```bash
cp .env.example .env.local
```

Заповніть необхідні значення:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Contact Information
NEXT_PUBLIC_PHONE=+380XXXXXXXXX
NEXT_PUBLIC_EMAIL=your@email.com
NEXT_PUBLIC_TELEGRAM=@your_telegram
NEXT_PUBLIC_VIBER=+380XXXXXXXXX

# Site URL (для SEO)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Запуск проекту

```bash
npm run dev
```

Сайт буде доступний за адресою [http://localhost:3000](http://localhost:3000)

### 4. Збірка для продакшену

```bash
npm run build
npm start
```

## Структура проекту

```
website/
├── app/                    # Next.js App Router сторінки
│   ├── page.tsx           # Головна сторінка
│   ├── about/             # Про мене
│   ├── services/          # Послуги
│   ├── cases/             # Кейси
│   ├── blog/              # Блог
│   ├── materials/         # Матеріали (PDF)
│   ├── contact/           # Контакти
│   └── consultation/      # Консультація (лендинг)
├── components/            # React компоненти
│   ├── Header.tsx         # Шапка сайту
│   ├── Footer.tsx         # Підвал
│   ├── Hero.tsx           # Hero секція
│   ├── ConsultationModal.tsx  # Модалка консультації
│   └── ...
├── lib/                   # Утиліти та константи
├── public/                # Статичні файли
│   ├── assets/            # Зображення (логотипи, фото)
│   └── materials/         # PDF файли для завантаження
└── content/               # Контент (блог, кейси)
```

## Налаштування EmailJS

1. Зареєструйтесь на [EmailJS](https://www.emailjs.com/)
2. Створіть сервіс (Service)
3. Створіть шаблон (Template)
4. Отримайте Public Key
5. Додайте дані в `.env.local`

### Приклад шаблону EmailJS:

```
Тема: Нова заявка з сайту

Повідомлення:
{{message}}
```

## Додавання контенту

### Статті блогу

Статті знаходяться в `app/blog/[slug]/page.tsx`. Для додавання нової статті:

1. Додайте запис в об'єкт `blogPosts` в `app/blog/page.tsx`
2. Додайте контент в об'єкт `blogPosts` в `app/blog/[slug]/page.tsx`

### Кейси

Кейси знаходяться в `app/cases/page.tsx`. Додайте новий кейс в масив `cases`.

### Послуги

Послуги налаштовуються в `lib/constants.ts`. Для додавання нової послуги:

1. Додайте в масив `SERVICES`
2. Створіть сторінку в `app/services/[slug]/page.tsx`
3. Додайте деталі в об'єкт `serviceDetails`

### PDF матеріали

1. Додайте PDF файл в `public/materials/`
2. Додайте запис в масив `materials` в `app/materials/page.tsx`

## Зміна контактної інформації

Всі контакти налаштовуються через змінні оточення в `.env.local`:

- `NEXT_PUBLIC_PHONE` - телефон
- `NEXT_PUBLIC_EMAIL` - email
- `NEXT_PUBLIC_TELEGRAM` - Telegram (без @)
- `NEXT_PUBLIC_VIBER` - Viber

Також можна змінити напряму в `lib/constants.ts`.

## Зміна логотипів та фото

1. Замініть файли в `public/assets/`:
   - `лого_адвокат_обрізаний_фон.png` - основний логотип
   - `лого_адвокат.jpeg` - альтернативний логотип
   - `IMG_1389.JPG` - основне фото адвоката
   - `IMG_3308.jpg`, `IMG_3322.jpg`, `IMG_3337.jpg` - додаткові фото для галереї

2. Якщо імена файлів змінені, оновіть шляхи в:
   - `components/Header.tsx`
   - `components/Footer.tsx`
   - `components/Hero.tsx` (масив `heroImages`)
   - `app/about/page.tsx` (масив `photos`)

## Система перекладів

Сайт підтримує 6 мов:
- 🇺🇦 Українська (за замовчуванням)
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇵🇱 Polski
- 🇸🇪 Svenska

Перемикання мови доступне в хедері через компонент `LanguageSwitcher`. 
Переклади знаходяться в `lib/i18n/` (окремі файли для кожного мови) та можуть бути розширені.

## Анімації та дизайн

- Використовується **Framer Motion** для плавних анімацій
- Додано hover-ефекти на всі інтерактивні елементи
- Анімації появи секцій при скролі
- Градієнти та світлові ефекти на золотих елементах
- Плавні переходи та трансформації

## SEO налаштування

- Metadata налаштована для кожної сторінки
- Sitemap генерується автоматично (`app/sitemap.ts`)
- Robots.txt налаштований (`app/robots.ts`)
- OpenGraph теги додані

Для зміни базового URL оновіть `NEXT_PUBLIC_SITE_URL` в `.env.local`.

## Деплой

### Vercel (рекомендовано)

1. Підключіть репозиторій до Vercel
2. Додайте змінні оточення в налаштуваннях
3. Деплой відбувається автоматично

### Інші платформи

```bash
npm run build
```

Після збірки файли будуть в папці `.next`. Налаштуйте сервер для обслуговування Next.js додатку.

## Підтримка

Для питань та підтримки звертайтесь до розробника.

## Ліцензія

Приватний проект.

