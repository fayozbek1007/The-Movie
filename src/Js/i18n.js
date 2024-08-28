import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to our application",
        "home": "Home",
        "search": "Search",
        "movies": "Movies",
        "tvShows": "TV Shows",
        "people": "People",
        "more": "More",
        "popular": "Popular",
        "nowPlaying": "Now Playing",
        "upcoming": "Upcoming",
        "topRated": "Top Rated",
        "airingToday": "Airing Today",
        "onTV": "On TV",
        "popularPeople": "Popular People",
        "discussion": "Discussion",
        "leaderboard": "Leaderboard",
        "support": "Support",
        "api": "API",
        "today": "Today",
        "thisWeek": "This Week",
      }
    },
    uz: {
      translation: {
        "welcome": "Ilovamizga xush kelibsiz",
        "home": "Bosh sahifa",
        "search": "Qidiruv",
        "movies": "Filmlar",
        "tvShows": "TV Ko'rsatuvlar",
        "people": "Odamlar",
        "more": "Ko'proq",
        "popular": "Mashhur",
        "nowPlaying": "Hozir ijro etilmoqda",
        "upcoming": "Tez orada",
        "topRated": "Eng yuqori baholangan",
        "airingToday": "Bugun efirda",
        "onTV": "TV da",
        "popularPeople": "Mashhur Odamlar",
        "discussion": "Munozara",
        "leaderboard": "Yetakchilar taxtasi",
        "support": "Yordam",
        "api": "API",
        "today": "Bugun",
        "thisWeek": "Bu hafta",
      }
    },
    fr: {
      translation: {
        "welcome": "Bienvenue dans notre application",
        "home": "Accueil",
        "search": "Chercher",
        "movies": "Films",
        "tvShows": "Émissions TV",
        "people": "Personnes",
        "more": "Plus",
        "popular": "Populaire",
        "nowPlaying": "Actuellement à l'affiche",
        "upcoming": "À venir",
        "topRated": "Les mieux notés",
        "airingToday": "Diffusé aujourd'hui",
        "onTV": "À la télévision",
        "popularPeople": "Personnes Populaires",
        "discussion": "Discussion",
        "leaderboard": "Classement",
        "support": "Support",
        "api": "API",
        "today": "Aujourd'hui",
        "thisWeek": "Cette semaine",
      }
    },
    ru: {
      translation: {
        "welcome": "Добро пожаловать в наше приложение",
        "home": "Главная",
        "search": "Поиск",
        "movies": "Фильмы",
        "tvShows": "ТВ Шоу",
        "people": "Люди",
        "more": "Ещё",
        "popular": "Популярные",
        "nowPlaying": "Сейчас в прокате",
        "upcoming": "Скоро выйдут",
        "topRated": "Лучшие",
        "airingToday": "Сегодня в эфире",
        "onTV": "По ТВ",
        "popularPeople": "Популярные люди",
        "discussion": "Обсуждение",
        "leaderboard": "Таблица лидеров",
        "support": "Поддержка",
        "api": "API",
        "today": "Сегодня",
        "thisWeek": "На этой неделе",
      }
    },
  },
  lng: "uz",
  fallbackLng: "uz", 
  interpolation: {
    escapeValue: false,
  },
});
g
export default i18n;
https://github.com/fayozbek1007/The-Movie.gitgit 