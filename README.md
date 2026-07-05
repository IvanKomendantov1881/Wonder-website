# ЖК WONDER — лендинг

Многостраничный лендинг жилого комплекса «WONDER». Сделан в 8 классе как учебный проект: вёрстка на чистом HTML/CSS/JS без сборщиков и бэкенда.

Дизайн этого проекта также выложен здесь:
- [Dprofile](https://dprofile.ru/case/19354/residential-complex-wonder)
- [Behance](https://www.behance.net/gallery/165133587/Residential-complex-WONDER)

## Страницы

| Файл | Назначение |
|---|---|
| `index.html` | Главная: hero-блок с видео, блок «О компании», каталог, новости |
| `brifing.html` | Форма заявки/брифинга |
| `contacts.html` | Контакты (с виджетом часов) |
| `merch.html` | Мерч ЖК |

## Стек

- HTML5 / CSS3
- Vanilla JS + [jQuery](https://jquery.com/) (анимации навигации при скролле)
- [Swiper](https://swiperjs.com/) — слайдер (подключён через CDN)

## Структура

```
.
├── index.html
├── brifing.html
├── contacts.html
├── merch.html
├── Css/
│   ├── main.css
│   ├── brifing.css
│   ├── contacts.css
│   └── merch.css
├── Js/
│   ├── main.js
│   ├── brifing.js
│   ├── contacts.js
│   └── merch.js
└── Img/       # фото и одно фоновое видео (.mp4)
```

## Что было поправлено при подготовке к публикации

Исходники были свёрстаны в Windows, где пути к файлам регистронезависимые и `\` работает как разделитель — на GitHub так не будет. Поэтому:

- все пути вида `Img\file.jpg` заменены на `Img/file.jpg`;
- поправлены расхождения в регистре папок (`img\` → `Img/`, `css\` → `Css/`, `js\` → `Js/`);
- главный файл переименован из `Index.html` в `index.html`.

Сама вёрстка и контент не менялись.
