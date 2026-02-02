# Система переводов (i18n)

Переводы организованы в отдельных файлах для каждого языка.

## Структура

```
lib/i18n/
├── types.ts      # TypeScript типы и интерфейсы
├── index.ts      # Главный файл экспорта
├── uk.ts         # Украинский язык (основной)
├── en.ts         # Английский
├── de.ts         # Немецкий
├── fr.ts         # Французский
├── pl.ts         # Польский
└── sv.ts         # Шведский
```

## Использование

```typescript
import { useLanguage } from "@/contexts/LanguageContext";

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
    </div>
  );
}
```

## Добавление нового языка

1. Создайте файл `lib/i18n/[code].ts` (например, `ru.ts`)
2. Скопируйте структуру из `uk.ts` и переведите
3. Добавьте в `index.ts`:
   - Импорт: `import { ru } from "./ru";`
   - В массив `languages`: `{ code: "ru", name: "Русский", flag: "🇷🇺" }`
   - В объект `translations`: `ru,`

## Редактирование переводов

Просто откройте нужный файл языка (например, `uk.ts`) и отредактируйте нужные строки.

