Ты — senior frontend engineer + UI/UX designer. Нужно сгенерировать современный премиальный сайт адвоката по ТЗ из файла /mnt/data/Бізнес-План.docx.

Цель сайта:
1) вызывать доверие/авторитет,
2) приводить лиды через экспертность и CTA,
3) давать быстрый контакт (телефон/мессенджеры/форма) и “экстренную помощь”. (см. docx)

СТЕК (сделай полностью готовый проект):
- Next.js (App Router) + TypeScript
- TailwindCSS (или CSS Modules, но лучше Tailwind ради скорости)
- Компонентная структура: /src/components, /src/app/(pages)...
- Контент для статей/кейсов: MDX/Markdown в /content + простой рендер (без внешнего CMS)
- Иконки: lucide-react
- Формы: react-hook-form + zod (валидация)
- SEO: metadata для каждой страницы, OpenGraph, sitemap.xml, robots.txt
- Адаптив: mobile-first (важно)

ДИЗАЙН (визуальный стиль):
- Цветовая схема: матовый чёрный/графит фон + золото как акцент + белый текст.
- Эстетика: как “lawyer premium” из референсов (темный фон, тонкие линии/сетку, золотые акценты, большие заголовки).
- Используй subtle glow на золотых элементах, тонкие разделительные линии, мягкие тени, карточки.
- Типографика: современная “serif для заголовков + sans для текста” (например: Playfair Display + Inter).
- Кнопки: золото (primary) + outline (secondary).
- Навигация: липкий header, аккуратный.
- Footer: как у law templates — меню, контакты, подписка (опционально).

БРЕНД/МЕДИА (файлы уже есть):
- Лого: /mnt/data/лого_адвокат_обрізаний_фон.png (используй в хедере/футере, favicon тоже сделай)
- Альтернативное лого: /mnt/data/лого_адвокат.jpeg (можно для OG image/вариант)
- Фото адвоката: /mnt/data/IMG_1389.JPG (главная + “Про мене”)
Подключи их как assets в /public/assets/* (скопируй/перенеси) и используй next/image.

СТРУКТУРА САЙТА (меню и страницы строго по docx):
Страницы:
1) Главная /
2) Про меня /about
3) Услуги /services
   + подстраницы услуг для SEO:
     /services/anti-obshuk
     /services/audit-191
     /services/zahyst-kerivnyka
     /services/obshuky-vyimky
     (и общий список услуг)
4) Кейсы /cases (3–4 кейса без имён, структура + placeholders)
5) Блог /blog (листинг) + /blog/[slug] (markdown)
6) Чек-листы /materials (бесплатные PDF lead magnets + форма “получить PDF за email”)
7) Контакты /contact
8) Запись на консультацию /consultation (лендинг + форма)

КЛЮЧЕВЫЕ БЛОКИ (контент взять из docx, оформить красиво):
Главная:
- Hero: “Адвокат Анатолій Сарнавський” + позиционирование: защита по экономическим преступлениям; давление следствия/прокуратуры/СБУ/ДБР; фокус: строительство/госзакупки. (по docx)
- Слоган в стиле: “Оперативно. Конфіденційно. Ефективно.”
- 2 CTA:
  1) “Терміново потрібен адвокат — зателефонуйте зараз” (кликабельный телефон)
  2) “Отримати консультацію” (открывает модалку/попап формы)
- Блок “Чим допоможу”: обшук/допит/стратегия/комплексная защита бизнеса (по docx)
- Блок “Переваги”: 24/7, 30+ років, конфіденційність, досвід в органах, etc.
- Блок “Швидкі офери” (пакеты):
  “Анти-обшук”, “Аудит 191”, “Захист керівника” (кликабельные карточки ведут на подстраницы)
- Блок “Кейсы” (3 карточки, link на /cases)
- Блок “Статьи” (последние 3)
- Финальный CTA + контакты/мессенджеры.

Про меня:
- Фото + буллеты: адвокат з 2012; 30 років стажу; досвід слідчим/безпека банку; авторитет по 190/191/368/369; (по docx)
- Длинный блок позиционирования (по docx) — но структурируй подзаголовками.
- (Опционально) блок “Документи/свідоцтво” placeholder.

Услуги:
- Список направлений: защита по 190/191/366/368/369; консультации руководителям/бухгалтерам; аудит рисков; участие в следственных действиях; абонентское обслуживание.
- Каждая услуга = карточка + отдельная SEO-страница (минимум 4 подстраницы выше).
- На каждой странице: мини-FAQ, “как я работаю”, “что делать прямо сейчас”, CTA.

Кейсы:
- 3–4 кейса (без имён). Сделай структуру:
  Проблема → Риски (статья/сроки) → Действия адвоката → Результат → Что было критично.
- Контент placeholder, чтобы потом легко заполнить.

Блог:
- MDX/markdown контент, чтобы владелец мог добавлять статьи без разработчика.
- Категории: “Обшук”, “Допит”, “191 КК”, “Будівництво/тендери”
- Страница статьи: содержание, “похожие статьи”, CTA.

Чек-листы / материалы:
- Лид-магниты (как в docx):
  “10 причин… 191 КК”, “Як поводитись під час обшуку”, “Чек-лист юриста підрядника по КП”.
- Кнопка “Завантажити PDF” открывает форму (email) → после submit показывает “Спасибо” + “Ссылка будет отправлена” (реально можно пока заглушкой).
- Храни PDF как placeholders в /public/materials/*.pdf (пустые файлы-заглушки) и опиши как заменить.

Контакты:
- Телефон, email, Telegram, Viber, (карта офиса — опционально iframe placeholder).
- Большая форма: Имя, Телефон, Проблема → “Передзвонити”.
- Плюс “кнопки быстрой связи”: позвонить/telegram/viber/email.

Запись на консультацию:
- Отдельная страница-лендинг с объяснением процесса:
  1) вы оставляете заявку,
  2) уточняем детали,
  3) план действий/стратегия,
  4) договоренность о формате (разово/сопровождение).
- Форма такая же, как в модалке.

ФУНКЦИОНАЛ:
- Глобальная CTA-кнопка в шапке + sticky floating кнопка на мобиле (“Подзвонити” + “Telegram”).
- Модалка “Отримати консультацію” доступна на каждой странице.
- Форма отправки:
  - сделай API route /api/lead которая принимает данные и:
    - сейчас: логирует в консоль + возвращает ok
    - подготовь места для интеграции: Email (SMTP) или Telegram bot (env vars TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
  - никаких секретов в коде, только через .env.example
- Добавь базовый SEO (title/description шаблоны + keywords).
- Добавь компонент “Breadcrumbs” на внутренних страницах.
- Сделай аккуратные анимации (framer-motion опционально) — hover, появление секций.

КОНТЕНТ/ТЕКСТЫ:
- Используй язык: украинский (основной). Можно RU/UA переключатель только если быстро, иначе делай один язык.
- Возьми ключевые формулировки из docx (позиционирование, список услуг, оферы).
- Контент не должен быть “lorem ipsum”.

ТРЕБОВАНИЯ К КОДУ:
- Чистая структура компонентов, переиспользуемые секции (Hero, CTASection, FeatureGrid, ServiceCards, TestimonialPlaceholder).
- Без ошибок линтинга/TS.
- README.md: как запустить, где менять контакты, как добавлять статьи/кейсы/материалы, как подключить Telegram/email.

Важно:
- Сайт должен выглядеть очень “дорого” и современно: темный фон, золотые акценты, много воздуха, сетка, хорошо на мобиле.
- Не усложняй бэкенд — достаточно заглушек и подготовленных точек расширения.

Сгенерируй весь проект целиком.


Как итог самыое главное что хочу еще в сайте + лендинге: это все сделай на next чтобы был главный сайт, а страницу лендинг сделай на одной с пути в сайте, чтобы не делать на хостинге два отдельных сайта. главный язык украинский - все оформление на нем (второй который переключатель на Федере будет - английский и + 3 самых популярных в Украине возможно немецкий французский, шведский, польский и тд). все сообщения которые будут писаться через форму пусть присылаются через библиотеку: "use client"

import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import emailjs from "emailjs-com"
import { useRouter } from "next/navigation"

const ContactPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [status, setStatus] = useState("")
  const router = useRouter()

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  })

  const handleSubmit = async (values, { resetForm }) => {
    setStatus("Sending...")

    try {
      const result = await emailjs.send(
        "service_a7nlbge",
        "template_a21vh6v",
        {
          name: "vlad",
          email: "sarnavsk2001@gmail.com",
          message: `You have new message from portfolio website. User name - ${values.name}, user email - ${values.email}, user text - ${values.message}, user mobile phone - ${values.phone}, name - ${values.name}. Have a good day!`,
        },
        "b-9jRpofu0_GJSdEI"
      )

      if (result.status === 200) {
        setStatus("Message sent successfully!")
        resetForm()

        setTimeout(() => {
          router.push("/")
        }, 3000)
      } else {
        setStatus("Error sending message.")
      }
    } catch (error) {
      setStatus("Error sending message.")
    }
  }

  return (
    <div ref={ref} className={`contact ${inView ? "visible" : ""}`}>
      <h1 className="contact__title">SEND ME A MESSAGE</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact__form">
          <div className="contact__field contact__field--name">
            <Field
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact__input"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="contact__error"
            />
          </div>
          <div className="contact__field contact__field--email">
            <Field
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact__input"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="contact__error"
            />
          </div>
          <div className="contact__field contact__field--phone">
            <Field
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="contact__input"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="contact__error"
            />
          </div>
          <div className="contact__field contact__field--message">
            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              className="contact__input contact__input--textarea"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="contact__error"
            />
          </div>
          <button type="submit" className="contact__button">
            SEND MESSAGE
          </button>
        </Form>
      </Formik>
      <p className="contact__status">{status}</p>
    </div>
  )
}

export default ContactPage
