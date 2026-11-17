// ============================================================
//  ФАЙЛ ФОТОГРАФИЙ
//  Чтобы добавить новое фото в галерею — добавьте одну строку
//  в массив `photos` в нужное место (порядок строк = порядок на сайте).
// ============================================================

const photos = [
  // --- НОВЫЕ ФОТО (САМЫЕ ПЕРВЫЕ) ---
  { src: "images/single_tone_haircut.jpg", alt: "Окрашивание в 1 тон и стрижка", caption: "Окрашивание в 1 тон + стрижка" },
  { src: "images/airtouch_blonde.jpg", alt: "Сложное окрашивание Аиртач", caption: "Аиртач" },

  // --- Самые новые фото ---
  { src: "images/burgundy_long_hair.jpg", alt: "Бордовые длинные волосы", caption: "Бордовое окрашивание" },
  { src: "images/blonde_pink_strands.jpg", alt: "Блонд с розовыми прядями", caption: "Блонд с яркими розовыми прядями" },
  { src: "images/short_ashy_layered_bob.jpg", alt: "Короткий пепельный боб", caption: "Короткий пепельный слоистый боб" },
  { src: "images/rose_gold_long_hair.jpg", alt: "Розово-золотистые волосы", caption: "Розово-золотистый оттенок" },
  { src: "images/dark_brown_straight_hair.jpg", alt: "Темные прямые волосы", caption: "Гладкие темные волосы" },
  { src: "images/vivid_red_hair.jpg", alt: "Яркие красно-малиновые волосы", caption: "Яркое красно-малиновое окрашивание" },
  { src: "images/blonde_balayage_wavy_bob.jpg", alt: "Блонд с темными корнями", caption: "Блонд с темными корнями (балаяж)" },

  // --- Предыдущая партия ---
  { src: "images/blonde_lob_side.jpg", alt: "Блонд-лоб сбоку", caption: "Блонд-лоб (вид сбоку)" },
  { src: "images/black_purple_underlayer.jpg", alt: "Скрытое окрашивание в фиолетовый", caption: "Скрытое окрашивание в фиолетовый" },
  { src: "images/dark_straight_bob.jpg", alt: "Темный прямой боб", caption: "Темный прямой боб" },
  { src: "images/caramel_bob_back.jpg", alt: "Карамельный боб", caption: "Карамельный боб" },
  { src: "images/short_blonde_bob_pink.jpg", alt: "Короткий блонд", caption: "Короткий блонд-боб" },
  { src: "images/blonde_lob_back.jpg", alt: "Блонд-лоб сзади", caption: "Блонд-лоб (вид сзади)" },
  { src: "images/long_dark_wavy_hair.jpg", alt: "Длинные темные волны", caption: "Длинные темные волны" },

  // --- Восстановленные фото ---
  { src: "images/boys_fade_side.jpg", alt: "Мужская стрижка сбоку", caption: "Мужская стрижка (вид сбоку)" },
  { src: "images/boys_fade_front.jpg", alt: "Мужская стрижка спереди", caption: "Мужская стрижка (вид спереди)" },
  { src: "images/short_grey_hair.jpg", alt: "Стрижка на седые волосы", caption: "Стильная стрижка на седые волосы" },
  { src: "images/long_wavy_white_bow.jpg", alt: "Длинные волны с белым бантом", caption: "Длинные волны с белым бантом" },
  { src: "images/braided_updo_white_bow.jpg", alt: "Прическа с плетением", caption: "Плетение в прическу с белым акцентом" },
  { src: "images/blonde_wavy_halfup.jpg", alt: "Локоны с плетением", caption: "Локоны с элементом плетения" },
  { src: "images/dark_wavy_bob.jpg", alt: "Темные волны", caption: "Объемные темные волны" },
  { src: "images/sleek_blonde_bob.jpg", alt: "Гладкий блонд каре", caption: "Идеальный гладкий блонд" },
  { src: "images/girl_pearl_bow.jpg", alt: "Прическа с жемчужным бантом", caption: "Прическа с жемчужным бантом" },

  // --- Фото с главной страницы ---
  { src: "images/braid_blue_flowers.jpg", alt: "Плетение с цветами", caption: "Плетение с голубыми цветами", featured: 3 },
  { src: "images/three_girls.jpg", alt: "Разные оттенки", caption: "Разные оттенки блонда", featured: 5 },
  { src: "images/red_bow.jpg", alt: "Окрашивание в красный", caption: "Окрашивание в красный", featured: 1 },
  { src: "images/pixie.jpg", alt: "Стрижка пикси", caption: "Женская стрижка пикси", featured: 2 },
  { src: "images/kids_pink.jpg", alt: "Цветные пряди", caption: "Цветные пряди", featured: 4 },

  // --- Самая первая партия галереи ---
  { src: "images/brown_bob.jpg", alt: "Каре с удлинением", caption: "Каре с удлинением" },
  { src: "images/blonde_highlights.jpg", alt: "Сложное мелирование", caption: "Сложное мелирование" },
  { src: "images/long_sleek_blonde.jpg", alt: "Гладкий блонд", caption: "Идеальный блонд" },
  { src: "images/natural_waves.jpg", alt: "Естественные волны", caption: "Естественные волны и мягкие блики" },
  { src: "images/rose_gold_balayage.jpg", alt: "Розово-золотистый блонд", caption: "Розово-золотистый оттенок" },
  { src: "images/classic_blonde.jpg", alt: "Классический блонд", caption: "Классический холодный блонд" },
  { src: "images/light_blonde_straight.jpg", alt: "Прямой светлый блонд", caption: "Чистый светлый блонд" },

  // --- Отзывы (скриншоты) ---
  { src: "images/review_ekaterina.jpg", alt: "Отзыв клиента", caption: "Отзыв постоянной клиентки", isReview: true },
  { src: "images/reviews_yandex_1.jpg", alt: "Отзывы клиентов", caption: "Отзывы с Яндекс.Карт", isReview: true },
  { src: "images/reviews_yandex_2.jpg", alt: "Отзывы клиентов", caption: "Отзывы с Яндекс.Карт", isReview: true },
  { src: "images/reviews_yandex_3.jpg", alt: "Отзывы клиентов", caption: "Отзывы с Яндекс.Карт", isReview: true },
];
