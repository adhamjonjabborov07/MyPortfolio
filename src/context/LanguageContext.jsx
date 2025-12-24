import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const languages = {
  en: {
    name: 'English',
    code: 'en',
  },
  ru: {
    name: 'Русский',
    code: 'ru',
  },
  uz: {
    name: 'Oʻzbekcha',
    code: 'uz',
  },
};

const translations = {
  en: {
    navbar: {
      title: 'MyPortfolio',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      certificates: 'Certificates',
    },
    home: {
      greeting: 'Hi, I\'m Jabborov Adhamjon',
      role: 'Frontend Developer',
      description: 'I\'m a passionate frontend developer with expertise in creating modern, responsive web applications. I specialize in React, Next.js, and building beautiful user interfaces that provide excellent user experiences. I\'m fluent in multiple programming languages including JavaScript, TypeScript, and Python.',
      viewProjects: 'View My Projects',
      aboutMe: 'About Me',
      myProjects: 'My Projects',
      projectsDescription: 'Explore my portfolio of web applications and projects I\'ve built.',
      certificates: 'Certificates',
      certificatesDescription: 'View my professional certifications and training.',
      skills: 'Skills',
      skillsDescription: 'Discover the technologies and tools I work with.',
    },
    about: {
      title: 'About Me',
      introduction: 'Hello! I\'m Jabborov Adhamjon, a passionate frontend developer with expertise in creating modern, responsive web applications. I\'m fluent in multiple programming languages including JavaScript, TypeScript, and Python.',
      journey: 'My Journey',
      journeyDescription1: 'My passion for web development started when I began learning programming. Since then, I\'ve worked on numerous projects, from small business websites to large-scale web applications.',
      journeyDescription2: 'I\'m committed to continuous learning and professional development. My goal is to create intuitive, user-friendly interfaces that provide excellent user experiences.',
      journeyDescription3: 'When I\'m not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying outdoor activities.',
      goals: 'My Goals',
      goal1: 'Continue learning and mastering new technologies in the web development field.',
      goal2: 'Build innovative and impactful web applications that solve real-world problems.',
      goal3: 'Contribute to open source projects and share knowledge with the developer community.',
      skills: 'My Skills',
    },
    footer: {
      description: 'A modern portfolio website showcasing my work and skills as a frontend developer.',
      navigation: 'Navigation',
      social: 'Social',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      email: 'Email',
      copyright: 'All rights reserved.',
    },
  },
  ru: {
    navbar: {
      title: 'MyPortfolio',
      home: 'Главная',
      about: 'Обо мне',
      projects: 'Проекты',
      certificates: 'Сертификаты',
    },
    home: {
      greeting: 'Привет, я Жабборов Адхамжон',
      role: 'Фронтенд-разработчик',
      description: 'Я страстный фронтенд-разработчик с опытом создания современных, адаптивных веб-приложений. Я специализируюсь на React, Next.js и создании красивых интерфейсов, которые обеспечивают отличный пользовательский опыт. Я свободно владею несколькими языками программирования, включая JavaScript, TypeScript и Python.',
      viewProjects: 'Посмотреть мои проекты',
      aboutMe: 'Обо мне',
      myProjects: 'Мои проекты',
      projectsDescription: 'Исследуйте мой портфолио веб-приложений и проектов, которые я создал.',
      certificates: 'Сертификаты',
      certificatesDescription: 'Посмотрите мои профессиональные сертификаты и обучение.',
      skills: 'Навыки',
      skillsDescription: 'Узнайте о технологиях и инструментах, с которыми я работаю.',
    },
    about: {
      title: 'Обо мне',
      introduction: 'Привет! Я Жабборов Адхамжон, страстный фронтенд-разработчик с опытом создания современных, адаптивных веб-приложений. Я свободно владею несколькими языками программирования, включая JavaScript, TypeScript и Python.',
      journey: 'Мой путь',
      journeyDescription1: 'Моя страсть к веб-разработке началась, когда я начал изучать программирование. С тех пор я работал над множеством проектов, от небольших сайтов для бизнеса до крупномасштабных веб-приложений.',
      journeyDescription2: 'Я посвящаю себя непрерывному обучению и профессиональному развитию. Моя цель — создавать интуитивно понятные, дружественные интерфейсы, которые обеспечивают отличный пользовательский опыт.',
      journeyDescription3: 'Когда я не кодирую, вы можете найти меня исследующим новые технологии, внесением вклада в открытые проекты или наслаждающимся активным отдыхом на свежем воздухе.',
      goals: 'Мои цели',
      goal1: 'Продолжать изучать и осваивать новые технологии в области веб-разработки.',
      goal2: 'Создавать инновационные и влиятельные веб-приложения, которые решают реальные проблемы.',
      goal3: 'Вносить вклад в открытые проекты и делиться знаниями с сообществом разработчиков.',
      skills: 'Мои навыки',
    },
    footer: {
      description: 'Современный портфолио-сайт, демонстрирующий мою работу и навыки как фронтенд-разработчика.',
      navigation: 'Навигация',
      social: 'Социальные сети',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      email: 'Email',
      copyright: 'Все права защищены.',
    },
  },
  uz: {
    navbar: {
      title: 'MyPortfolio',
      home: 'Bosh sahifa',
      about: 'Mening haqimda',
      projects: 'Loyihalar',
      certificates: 'Sertifikatlar',
    },
    home: {
      greeting: 'Salom, men Jabborov Adhamjon',
      role: 'Frontend dasturchi',
      description: 'Men zamonaviy, moslashuvchan veb-ilovalar yaratish bo\'yicha qiziqish bilan shug\'ullanadigan frontend dasturchiman. React, Next.js dan foydalanib, ajoyib foydalanuvchi interfeyslari yaratish bo\'yicha mutaxassisman. JavaScript, TypeScript va Python tillarida erkin gapiramiz.',
      viewProjects: 'Mening loyihalarim',
      aboutMe: 'Mening haqimda',
      myProjects: 'Mening loyihalarim',
      projectsDescription: 'Men yaratgan veb-ilovalar va loyihalarimning portfelimni tekshiring.',
      certificates: 'Sertifikatlar',
      certificatesDescription: 'Mening professional sertifikatlarim va tayyorgarligimni ko\'ring.',
      skills: 'Mahoratlar',
      skillsDescription: 'Men ishlaydigan texnologiyalar va vositalar haqida bilib oling.',
    },
    about: {
      title: 'Mening haqimda',
      introduction: 'Salom! Men Jabborov Adhamjon, zamonaviy, moslashuvchan veb-ilovalar yaratish bo\'yicha qiziqish bilan shug\'ullanadigan frontend dasturchiman. JavaScript, TypeScript va Python tillarida erkin gapiramiz.',
      journey: 'Mening yoʻlim',
      journeyDescription1: 'Veb-dasturlashga qiziqishim dasturlashni oʻrgayotgan paytda boshlangan. Shundan beri men kichik biznes saytlaridan tortib, katta miqyosli veb-ilovalargacha koʻplab loyihalarda ishlaganman.',
      journeyDescription2: 'Men doimiy oʻrgatish va professional rivojlanishga bagʻishlanaman. Maqsadim — intuitiv, foydalanuvchiga yordam beruvchi interfeyslar yaratish, ular ajoyib foydalanuvchi tajribasini taʼminlaydi.',
      journeyDescription3: 'Men kod yozmayotgan paytda, yangi texnologiyalarni oʻrganayotgan, ochiq manbali loyihalarga hissa qoʻshayotgan yoki tashqi faoliyatlar bilan shugʻullanayotgan boʻlar edim.',
      goals: 'Mening maqsadlarim',
      goal1: 'Veb-dasturlash sohasida yangi texnologiyalarni oʻrganish va ustalashtirishni davom ettirish.',
      goal2: 'Haqiqiy dunyo muammolarini hal qiladigan innovatsion va taʼsirli veb-ilovalar yaratish.',
      goal3: 'Ochiq manbali loyihalarga hissa qoʻshish va dasturchilar jamoasi bilan bilishlarni boʻlish.',
      skills: 'Mening mahoratlarim',
    },
    footer: {
      description: 'Frontend dasturchi sifatida ishlarim va mahoratlarimni namoyish etuvchi zamonaviy portfel sayti.',
      navigation: 'Navigatsiya',
      social: 'Ijtimoiy tarmoqlar',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      email: 'Email',
      copyright: 'Barcha huquqlar himoyalangan.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });
  const [t, setT] = useState(translations.en);

  useEffect(() => {
    localStorage.setItem('language', language);
    setT(translations[language]);
  }, [language]);

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};