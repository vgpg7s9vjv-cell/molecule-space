/* ==================================================
   TELEGRAM
================================================== */

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  if (tg.setHeaderColor) {
    tg.setHeaderColor("#CCCCFF");
  }

  if (tg.setBackgroundColor) {
    tg.setBackgroundColor("#CCCCFF");
  }
}


/* ==================================================
   ФРАЗЫ ДЛЯ ПОДДЕРЖКИ
================================================== */

const quotes = [
  "мы не обязаны заслуживать право на еду, отдых и заботу о себе",

  "твой самый трудный день не отменяет весь путь, который был пройден",

  "тело не является экзаменом, который нужно сдать на определенный размер",

  "один прием пищи не способен определить твою ценность",

  "тебе можно уставать. тебе можно остановиться",

  "восстановление не обязано быть идеальным, чтобы быть настоящим",

  "ты больше, чем цифры на весах, в приложении или на бирке одежды",

  "еда не делает из тебя хорошего или плохого человека, это еда, а не моральный тест"
];

let currentQuote = 0;


/* ==================================================
   ДАННЫЕ РАЗДЕЛОВ
================================================== */

const sections = {

  rpp: {
    title: "разбираемся в рпп",

    kicker: "eating disorder",

    description:
      "триггерные фразы, механизм, признаки и борьба с ними",

    topics: [
      {
        id: "rpp-basics",
        title: "база рпп",
        description: "что это и почему это не просто «любовь к диетам»"
      },

      {
        id: "rpp-thoughts",
        title: "еда, тело и самоощущение",
        description: "какие мысли становятся навязчивыми, как еда влияет на них и термины РПП-комьюнити"
      },

      {
        id: "rpp-cycle",
        title: "вечный круговорот",
        description: "что скрывается за ограничениями, очищением и чрезмерной физнагрузкой"
      },

      {
        id: "toxic-motivation",
        title: "TW!!: деструктивная мотивация",
        description: "вы просили – мы сделали! мотивация в жестком формате доступна по подписке 99 рублей  месяц"
      }
    ]
  },


  medical: {
    title: "молекулярная медицина",

    kicker: "medicine",

    description:
      "разбираемся, что происходит с организмом на курсе на самом деле без советов и страшилок из интернета",

    topics: [
      {
        id: "medical-tests",
        title: "видно ли БАДы для похудения в анализах",
        description: "общие анализы, медкомиссия и тесты на вещ-ва"
      },

      {
        id: "medical-disorders",
        title: "БАДы и расстройства психики",
        description: "как стимуляторы могут влиять на ментальное состояние"
      },

      {
        id: "medical-vitamins",
        title: "витамины и лечебные препараты",
        description: "какие витамины и лекарства можно пить, а какие категорически нет"
      }
    ]
  },


  supplements: {
    title: "БАДовый минимум знаний",

    kicker: "basic information",

    description:
      "и роскошный максимум информации",

    topics: [
      {
        id: "supplements-voice",
        title: "сложности выбора и как его сделать",
        description: "Молекула плюс/прем/ультра/жб, Supressa, Mineral, Heedley и новый Swapx"
      },

      {
        id: "supplements-rules",
        title: "главные правила",
        description: "правила приема, что можно и нельзя, побочки и как их избежать"
      },

      {
        id: "supplements-myths",
        title: "«какую таблетку выберешь, Нео?»",
        description: "разбиваем популярные в интернете мифы вокруг БАДов"
      }
    ]
  },

   
  mood: {
    title: "дневник настроения",
    kicker: "mood journal",
    description: "личные записи, настроение и мысли — в одном спокойном месте",
    topics: []
  },


  tools: {
    title: "твой виртуальный счетовод",

    kicker: "dietary calculations",

    description:
      "расчет твоего личного ИМТ с расшифровкой, счетчик дефицита калорий и куча полезных цифр",

    topics: [
      {
        id: "tools-bmi",
        title: "ИМТ",
        description: "рассчитаем Индекс Массы Тела и отправим результаты прямо в лс"
      },

      {
        id: "tools-calories",
        title: "Счетчик дефицита калорий",
        description: "расчет индивидуального дефицита по формуле Миффлина-Сан Жеора"
      },

      {
        id: "tools-math",
        title: "математический разбор",
        description: "норма сна, воды, активности и как выглядит идеальное БЖУ"
      }
    ]
  },

   
 delicate: {
    title: "деликатные темы",

    kicker: "delicate",

    description:
      "все мы живые люди, а значит неидеальные<br>тут обсудим темы, которые не принято поднимать",

    topics: [
      {
        id: "delicate-period",
        title: "менструация на курсе",
        description: "чем чревато продолжать курс во время кд, аменорея и дисменорея – что это и от чего"
      },


      {
        id: "delicate-constipation",
        title: "запоры",
        description: "из-за чего<br>что можно есть, чтобы облегчить<br>вайт/блэк-лист слабительных"
      }
    ]
  },


    care: {
    title: "молекулярный уход",

    kicker: "care",

    description:
      "похудение в целом бьет по многим отделам организма, но чаще всего страдает именно оболочка",

    topics: [
      {
        id: "care-teeth",
        title: "зубы",
        description: "реально ли лишиться зубов на похудении<br>так ли нужен кальций как его советуют<br>правила сохранения эмали"
      },


      {
        id: "care-nails",
        title: "ногти",
        description: "витамины – не миф?<br>почему все забывают о состоянии ногтей при похудении"
      },

   
      {
        id: "care-hair",
        title: "волосы",
        description: "что делать если мысли о стрижке вгоняют в панику, а волосы на расческе – в депрессию"
      }
    ]
  },

   settings: {
  title: "настройки",
  kicker: "settings",
  description: "настройки приложения",
  topics: []
},

 links: {

    title: "все ссылки",

    category: "links",

    pages: [

       
      {
        heading: "все ссылки на наши ресурсы",

        content: `
 <ul>
            <li>жесткие ограничения питания</li>
            <li>страх определенных продуктов</li>
            <li>постоянная проверка тела и веса</li>
            <li>компенсаторное поведение</li>
            <li>чувство вины после еды</li>
            <li>сильная зависимость самооценки от внешности</li>
          </ul>
        `
      },
    ]
  };

/* ==================================================
   СТАТЬИ
================================================== */

const articles = {


  /* =========================
     РПП
  ========================== */

  "rpp-basics": {

    section: "rpp",

    title: "основы рпп",

    category: "терминология",

    pages: [

      {
        heading: "что это вообще такое<br>у кого бывает<br>и кто такие дранкорексички",

        content: `
          <p>
            <b>расстройство пищевого поведения</b> — это не просто желание похудеть
            или периодическая тревога из-за внешности<br>
            РПП связано <b>с устойчивым нарушением отношений человека
            с едой, собственным телом и поведением вокруг питания<b><br>
            пищевое поведение регулируется не только сознательным решением
            «что я сегодня буду есть»
            в нем участвуют системы мозга, отвечающие за вознаграждение,
            тревогу, привычки, голод, насыщение и контроль поведения
            поэтому фраза «просто перестань думать о еде» своей полезностью
            на одном уровне с советом, если сказать компу: «просто не зависай»
          </p>

          <div class="info-box">
            <p>
              важно: человек может иметь РПП при любых параметрах, размерах и весе
            </p>
          </div>

          <h3>признаки нарушенных отношений с едой</h3>

          <ul>
            <li>жесткие ограничения питания</li>
            <li>страх определенных продуктов</li>
            <li>постоянная проверка тела и веса</li>
            <li>компенсаторное поведение</li>
            <li>чувство вины после еды</li>
            <li>сильная зависимость самооценки от внешности</li>
          </ul>
        `
      },


      {
        heading: "почему это не вопрос силы воли",

        content: `
          <p>
            пищевое поведение регулируется не только сознательным решением
            «что я сегодня буду есть».
          </p>

          <p>
            в нем участвуют системы мозга, отвечающие за вознаграждение,
            тревогу, привычки, голод, насыщение и контроль поведения.
          </p>

          <p>
            поэтому фраза «просто перестань думать о еде» примерно настолько
            полезна, насколько полезен совет компьютеру «просто не зависай».
          </p>

          <h3>что может поддерживать РПП</h3>

          <ul>
            <li>жесткие ограничения питания;</li>
            <li>страх определенных продуктов;</li>
            <li>постоянная проверка тела и веса;</li>
            <li>компенсаторное поведение;</li>
            <li>чувство вины после еды;</li>
            <li>сильная зависимость самооценки от внешности.</li>
          </ul>
        `
      },


      {
        heading: "РПП может выглядеть по-разному",

        content: `
          <p>
            расстройства пищевого поведения включают несколько разных
            состояний и вариантов поведения.
          </p>

          <p>
            внешность человека не позволяет надежно определить,
            есть ли у него расстройство.
          </p>

          <div class="info-box">
            <p>
              поэтому отсутствие «типичного» внешнего вида не означает,
              что проблема недостаточно серьезна.
            </p>
          </div>

          <p>
            важнее смотреть на то, насколько питание, мысли о теле и
            компенсаторные действия начинают управлять жизнью человека.
          </p>
        `
      }

    ]
  },


  "rpp-thoughts": {

    section: "rpp",

    title: "мысли о еде и теле",

    category: "РПП",

    pages: [

      {
        heading: "почему мысли становятся навязчивыми",

        content: `
          <p>
            при РПП мысли о еде и теле могут занимать огромное количество
            психического пространства.
          </p>

          <p>
            человек начинает постоянно считать, сравнивать, проверять,
            планировать и анализировать.
          </p>

          <p>
            чем больше внимания уделяется контролю, тем сложнее мозгу
            переключиться на другие задачи.
          </p>
        `
      },


      {
        heading: "цикл контроля",

        content: `
          <p>
            часто формируется замкнутый цикл:
          </p>

          <ul>
            <li>появляется тревога из-за еды или тела;</li>
            <li>человек усиливает контроль;</li>
            <li>контроль требует все больше внимания;</li>
            <li>возникает напряжение;</li>
            <li>после еды или отклонения от правил появляется вина;</li>
            <li>контроль усиливается еще больше.</li>
          </ul>

          <div class="info-box">
            <p>
              проблема заключается не в том, что человек «слишком много
              думает». сами правила питания могут поддерживать тревогу.
            </p>
          </div>
        `
      },


      {
        heading: "тело не обязано быть проектом",

        content: `
          <p>
            постоянный мониторинг веса, отражения, объемов и одежды может
            временно создавать ощущение контроля.
          </p>

          <p>
            но одновременно он способен усиливать фиксацию на теле.
          </p>

          <p>
            человеческое тело меняется в течение дня из-за воды,
            пищи, работы кишечника, гормональных колебаний и множества
            других обычных процессов.
          </p>
        `
      }

    ]
  },


  "rpp-compensation": {

    section: "rpp",

    title: "компенсаторное поведение",

    category: "РПП",

    pages: [

      {
        heading: "что считается компенсацией",

        content: `
          <p>
            компенсаторным называют поведение, цель которого заключается
            в попытке «нейтрализовать» съеденное или предотвратить набор веса.
          </p>

          <ul>
            <li>пропуск приемов пищи;</li>
            <li>жесткое ограничение питания;</li>
            <li>чрезмерные физические нагрузки;</li>
            <li>самостоятельное использование опасных средств для похудения;</li>
            <li>очищающее поведение.</li>
          </ul>
        `
      },


      {
        heading: "почему это поддерживает цикл",

        content: `
          <p>
            компенсация может давать кратковременное ощущение,
            что ситуация снова находится под контролем.
          </p>

          <p>
            однако затем организм и психика сталкиваются с последствиями
            ограничения, а тревога вокруг следующего приема пищи усиливается.
          </p>

          <div class="info-box">
            <p>
              чем сильнее система строится вокруг наказания за еду,
              тем больше еды и веса становятся центральной темой жизни.
            </p>
          </div>
        `
      },


      {
        heading: "еда не требует наказания",

        content: `
          <p>
            прием пищи не является проступком, который необходимо исправлять.
          </p>

          <p>
            увеличение веса после отдельного приема пищи также не означает
            мгновенного увеличения жировой ткани. краткосрочные изменения
            массы тела в значительной степени связаны с водой,
            гликогеном и содержимым желудочно-кишечного тракта.
          </p>
        `
      }

    ]
  },


  "rpp-recovery": {

    section: "rpp",

    title: "восстановление",

    category: "РПП",

    pages: [

      {
        heading: "восстановление не линейно",

        content: `
          <p>
            восстановление редко выглядит как ровная линия,
            где каждый следующий день становится немного легче.
          </p>

          <p>
            могут быть периоды улучшения, откаты, сильные эмоции,
            изменение аппетита и возвращение старых мыслей.
          </p>
        `
      },


      {
        heading: "организму нужно время",

        content: `
          <p>
            после длительного ограничения питание и физиологические
            процессы могут некоторое время ощущаться непривычно.
          </p>

          <p>
            изменения аппетита, пищеварения, температуры тела,
            уровня энергии и других ощущений не означают,
            что восстановление «идет неправильно».
          </p>

          <div class="info-box">
            <p>
              восстановление организма и изменение пищевых привычек
              происходят не по календарю и не по идеальному сценарию.
            </p>
          </div>
        `
      },


      {
        heading: "главная цель",

        content: `
          <p>
            смысл восстановления не в том, чтобы научиться идеально
            контролировать свое питание.
          </p>

          <p>
            наоборот, задача заключается в том, чтобы еда, вес и тело
            постепенно перестали управлять всей жизнью.
          </p>
        `
      }

    ]
  },


  /* =========================
     МЕДИЦИНА
  ========================== */

  "medical-weight": {

    section: "medical",

    title: "почему меняется вес",

    category: "медицина",

    pages: [

      {
        heading: "весы показывают не только жир",

        content: `
          <p>
            масса тела складывается из множества компонентов:
            воды, жировой ткани, мышц, костной ткани,
            содержимого желудочно-кишечного тракта и других тканей.
          </p>

          <p>
            поэтому изменение цифры на весах за сутки не равно
            изменению количества жировой ткани.
          </p>
        `
      },


      {
        heading: "вода может менять цифру",

        content: `
          <p>
            на массу тела влияют соль, углеводы, гормональные изменения,
            физическая активность, объем выпитой жидкости и работа кишечника.
          </p>

          <p>
            поэтому человек может увидеть на весах совершенно другую цифру
            без соответствующего изменения жировой ткани.
          </p>
        `
      },


      {
        heading: "смотреть только на вес недостаточно",

        content: `
          <p>
            одна цифра не может рассказать, что именно произошло
            с организмом за последние сутки.
          </p>

          <div class="info-box">
            <p>
              весы измеряют массу. они не умеют отдельно показывать
              жир, воду, настроение и драму последних трех дней.
            </p>
          </div>
        `
      }

    ]
  },


  "medical-bloating": {

    section: "medical",

    title: "откуда берется вздутие",

    category: "медицина",

    pages: [

      {
        heading: "живот не остается одинаковым весь день",

        content: `
          <p>
            объем живота естественным образом меняется в течение дня.
          </p>

          <p>
            после еды в желудочно-кишечном тракте физически находится
            больше содержимого. также на ощущение объема могут влиять
            газы и движение кишечника.
          </p>
        `
      },


      {
        heading: "что может влиять",

        content: `
          <ul>
            <li>объем и состав пищи;</li>
            <li>скорость приема пищи;</li>
            <li>газообразование;</li>
            <li>перистальтика кишечника;</li>
            <li>индивидуальная переносимость продуктов;</li>
            <li>изменения режима питания.</li>
          </ul>

          <p>
            само по себе временное вздутие не означает увеличение
            жировой ткани.
          </p>
        `
      },


      {
        heading: "когда нужна медицинская оценка",

        content: `
          <p>
            выраженная или повторяющаяся боль, кровь в стуле,
            постоянная рвота, высокая температура, выраженная слабость
            или другие тревожные симптомы требуют обращения
            за медицинской помощью.
          </p>

          <div class="info-box">
            <p>
              пищеварительные симптомы не стоит автоматически объяснять
              только «неподходящей едой».
            </p>
          </div>
        `
      }

    ]
  },


  "medical-hormones": {

    section: "medical",

    title: "вес и гормоны",

    category: "медицина",

    pages: [

      {
        heading: "гормоны действительно важны",

        content: `
          <p>
            гормоны участвуют в регуляции аппетита, обмена веществ,
            репродуктивной функции, водного баланса и многих других процессов.
          </p>

          <p>
            однако это не означает, что любое изменение веса
            можно объяснить словом «гормоны».
          </p>
        `
      },


      {
        heading: "простая схема часто не работает",

        content: `
          <p>
            масса тела зависит от взаимодействия множества факторов:
            питания, активности, генетики, сна, лекарств, заболеваний,
            гормонального состояния и поведения.
          </p>

          <p>
            поэтому самостоятельная диагностика по одному симптому
            обычно приводит к очень творческим, но не всегда полезным выводам.
          </p>
        `
      }

    ]
  },


  /* =========================
     БАДЫ
  ========================== */

  "supplements-label": {

    section: "supplements",

    title: "как читать состав",

    category: "БАДы",

    pages: [

      {
        heading: "смотрим не на обещание",

        content: `
          <p>
            на упаковке могут быть крупно написаны слова
            «жиросжигание», «детокс», «ускорение метаболизма»
            или «минус несколько килограммов».
          </p>

          <p>
            эти формулировки сами по себе не являются доказательством
            эффективности.
          </p>
        `
      },


      {
        heading: "что важно найти",

        content: `
          <ul>
            <li>полный состав;</li>
            <li>количество каждого активного компонента;</li>
            <li>рекомендованную производителем дозировку;</li>
            <li>предупреждения и противопоказания;</li>
            <li>информацию о производителе.</li>
          </ul>

          <div class="info-box">
            <p>
              если продавец рассказывает о продукте больше,
              чем производитель способен объяснить его составом,
              это повод включить критическое мышление.
            </p>
          </div>
        `
      }

    ]
  },


  "supplements-evidence": {

    section: "supplements",

    title: "доказательность",

    category: "БАДы",

    pages: [

      {
        heading: "отзыв не равен исследованию",

        content: `
          <p>
            человек может похудеть после приема продукта,
            но это еще не показывает, что причиной был именно этот продукт.
          </p>

          <p>
            на результат одновременно влияют питание, активность,
            изменения поведения, вода и множество других факторов.
          </p>
        `
      },


      {
        heading: "что считается более надежными данными",

        content: `
          <p>
            при оценке эффективности вмешательства учитывают качество
            исследований, размер выборки, контрольную группу,
            длительность наблюдения и воспроизводимость результатов.
          </p>

          <p>
            чем громче обещание, тем важнее смотреть на реальные данные,
            а не на красивую фотографию «до и после».
          </p>
        `
      }

    ]
  },


  "supplements-risks": {

    section: "supplements",

    title: "риски БАДов",

    category: "БАДы",

    pages: [

      {
        heading: "натуральный не значит безопасный",

        content: `
          <p>
            растительное происхождение вещества не делает его
            автоматически безопасным.
          </p>

          <p>
            активные вещества могут взаимодействовать с лекарствами,
            влиять на сердечно-сосудистую систему, сон, пищеварение
            и другие процессы.
          </p>
        `
      },


      {
        heading: "особенно осторожно с продуктами для похудения",

        content: `
          <p>
            продукты с обещаниями быстрого снижения веса требуют
            особенно критичной оценки состава и происхождения.
          </p>

          <p>
            неизвестный состав или отсутствие достоверной информации
            о дозировках делает оценку безопасности существенно сложнее.
          </p>

          <div class="info-box">
            <p>
              «БАД» не является синонимом «без побочных эффектов».
            </p>
          </div>
        `
      }

    ]
  },


  /* =========================
     ИНСТРУМЕНТЫ
  ========================== */

  "tools-bmi": {

    section: "tools",

    title: "ИМТ",

    category: "инструменты",

    pages: [

      {
        heading: "что такое ИМТ",

        content: `
          <p>
            индекс массы тела рассчитывается как отношение массы тела
            в килограммах к квадрату роста в метрах.
          </p>

          <p>
            показатель используется как статистический инструмент
            для оценки групп населения, но не является полноценной
            диагностикой состояния конкретного человека.
          </p>
        `
      },


      {
        heading: "почему одной цифры недостаточно",

        content: `
          <p>
            ИМТ не учитывает состав тела, распределение жировой ткани,
            возраст, заболевания, лекарства и множество других факторов.
          </p>

          <div class="info-box">
            <p>
              поэтому ИМТ нельзя использовать как самостоятельный
              диагноз здоровья или пищевого поведения.
            </p>
          </div>
        `
      }

    ]
  },


  "tools-calories": {

    section: "tools",

    title: "энергетический баланс",

    category: "инструменты",

    pages: [

      {
        heading: "что такое энергетический баланс",

        content: `
          <p>
            организм постоянно получает и расходует энергию.
            энергия поступает преимущественно с пищей,
            а расход складывается из нескольких компонентов.
          </p>

          <p>
            основной обмен, физическая активность,
            термический эффект пищи и другие процессы вместе
            формируют общие энергозатраты.
          </p>
        `
      },


      {
        heading: "расчеты имеют ограничения",

        content: `
          <p>
            формулы для расчета энергозатрат дают оценку,
            а не измеряют фактический расход энергии конкретного человека.
          </p>

          <p>
            реальный расход может отличаться от расчетного,
            поэтому любые калькуляторы следует воспринимать
            как справочный инструмент, а не как медицинское предписание.
          </p>
        `
      }

    ]
  },


  "tools-labels": {

    section: "tools",

    title: "разбор этикетки",

    category: "инструменты",

    pages: [

      {
        heading: "калорийность",

        content: `
          <p>
            энергетическая ценность показывает количество энергии,
            указанное для определенного количества продукта.
          </p>

          <p>
            при сравнении продуктов важно смотреть,
            указано ли значение на 100 г, порцию или упаковку целиком.
          </p>
        `
      },


      {
        heading: "БЖУ",

        content: `
          <p>
            белки, жиры и углеводы являются основными макронутриентами.
          </p>

          <p>
            их количество на этикетке помогает понять состав продукта,
            но само по себе не превращает продукт в «хороший» или «плохой».
          </p>

          <div class="info-box">
            <p>
              состав продукта можно анализировать без присвоения
              еде моральной оценки.
            </p>
          </div>
        `
      }

    ]
  }

};


/* ==================================================
   СОСТОЯНИЕ ПРИЛОЖЕНИЯ
================================================== */

let currentSectionId = null;

let currentArticleId = null;

let currentPage = 0;

let selectedMood = "🙂";
const moodStorageKey = "molecule-space-mood-diary";
const themeStorageKey = "molecule-space-theme";


/* ==================================================
   DOM
================================================== */

const homeScreen = document.getElementById("homeScreen");

const contentScreen = document.getElementById("contentScreen");

const contentContainer =
  document.getElementById("contentContainer");

const quoteElement =
  document.getElementById("quote");

const newQuoteButton =
  document.getElementById("newQuote");

const themeToggle = document.getElementById("themeToggle");
const themeToggleIcon = document.getElementById("themeToggleIcon");
const quickDiaryButton = document.getElementById("quickDiaryButton");


/* ==================================================
   ФРАЗА
================================================== */

function showNextQuote() {

  currentQuote++;

  if (currentQuote >= quotes.length) {
    currentQuote = 0;
  }

  quoteElement.style.opacity = "0";

  setTimeout(() => {

    quoteElement.textContent = quotes[currentQuote];

    quoteElement.style.opacity = "1";

  }, 120);

}


/* ==================================================
   ТЕМА
================================================== */

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);

  if (themeToggleIcon) {
    themeToggleIcon.textContent = isLight ? "☀" : "☾";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Включить темную тему" : "Включить светлую тему"
    );
  }

  try {
    localStorage.setItem(themeStorageKey, isLight ? "light" : "dark");
  } catch (error) {}

  if (tg) {
    if (tg.setHeaderColor) tg.setHeaderColor(isLight ? "#f3f0ff" : "#071426");
    if (tg.setBackgroundColor) tg.setBackgroundColor(isLight ? "#f3f0ff" : "#071426");
  }
}

function initTheme() {
  let saved = "dark";
  try {
    saved = localStorage.getItem(themeStorageKey) || "dark";
  } catch (error) {}
  applyTheme(saved);
}

/* ==================================================
   ДНЕВНИК
================================================== */

function getMoodEntries() {
  try {
    return JSON.parse(localStorage.getItem(moodStorageKey) || "[]");
  } catch (error) {
    return [];
  }
}

function saveMoodEntry(text, mood) {
  const entries = getMoodEntries();
  entries.unshift({
    id: Date.now(),
    mood,
    text,
    date: new Date().toLocaleString("ru-RU", {
      day: "2-digit", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit"
    })
  });

  try {
    localStorage.setItem(moodStorageKey, JSON.stringify(entries.slice(0, 100)));
  } catch (error) {}
}

function renderMoodJournal() {
  const entries = getMoodEntries();
  const moods = ["😔", "😕", "😐", "🙂", "😊", "🥰", "😤", "😴", "😰"];

  contentContainer.innerHTML = `
    <div class="screen-inner diary-page fade-in">
      <button class="back-button" id="diaryBackButton">← назад</button>

      <header class="section-header">
        <p class="section-kicker">mood journal</p>
        <h1>дневник настроения</h1>
        <p>место для коротких заметок о своем состоянии и событиях дня.</p>
      </header>

      <section class="diary-compose">
        <p class="diary-date">сегодня · ${new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}</p>
        <div class="mood-picker" aria-label="Выбрать настроение">
          ${moods.map(mood => `<button type="button" class="mood-choice ${selectedMood === mood ? "selected" : ""}" data-mood="${mood}">${mood}</button>`).join("")}
        </div>
        <textarea class="diary-textarea" id="diaryText" placeholder="что хочется записать?"></textarea>
        <button type="button" class="calculator-button diary-save" id="saveDiaryButton">сохранить запись</button>
      </section>

      <div class="diary-list">
        ${entries.length ? entries.map(entry => `
          <article class="mood-entry">
            <div class="mood-entry-head">
              <span class="mood-entry-emoji">${entry.mood}</span>
              <span class="mood-entry-date">${entry.date}</span>
            </div>
            <p class="mood-entry-text">${escapeHtml(entry.text)}</p>
          </article>
        `).join("") : `<div class="diary-empty">здесь появятся твои записи.<br>они сохраняются только в этом браузере.</div>`}
      </div>
    </div>
  `;

  document.getElementById("diaryBackButton").addEventListener("click", showHome);
  document.querySelectorAll("[data-mood]").forEach(button => {
    button.addEventListener("click", () => {
      selectedMood = button.dataset.mood;
      renderMoodJournal();
    });
  });
  document.getElementById("saveDiaryButton").addEventListener("click", () => {
    const textarea = document.getElementById("diaryText");
    const text = textarea.value.trim();
    if (!text) { textarea.focus(); return; }
    saveMoodEntry(text, selectedMood);
    selectedMood = "🙂";
    renderMoodJournal();
  });
  window.scrollTo(0, 0);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderTools() {
  contentContainer.innerHTML = `
    <div class="screen-inner fade-in">
      <button class="back-button" id="toolsBackButton">← назад</button>
      <header class="section-header">
        <p class="section-kicker">dietary calculations</p>
        <h1>твой виртуальный счетовод</h1>
        <p>расчетные инструменты с пояснением результата. цифры здесь являются ориентиром, а не медицинским назначением.</p>
      </header>

      <div class="calculator-list">
        <section class="calculator-card">
          <h3>ИМТ</h3>
          <p>индекс массы тела по росту и массе. результат не является диагнозом.</p>
          <div class="calculator-grid">
            <div class="calculator-field"><label for="bmiWeight">масса, кг</label><input class="calculator-input" id="bmiWeight" type="number" min="1" step="0.1" inputmode="decimal"></div>
            <div class="calculator-field"><label for="bmiHeight">рост, см</label><input class="calculator-input" id="bmiHeight" type="number" min="1" step="1" inputmode="numeric"></div>
          </div>
          <button class="calculator-button" id="calculateBmi">рассчитать ИМТ</button>
          <div class="calculator-result" id="bmiResult">введи данные выше.</div>
        </section>

        <section class="calculator-card">
          <h3>энергетическая потребность</h3>
          <p>оценка основного обмена и ориентировочных суточных энергозатрат по формуле Миффлина — Сан Жеора.</p>
          <div class="calculator-grid">
            <div class="calculator-field"><label for="calAge">возраст, лет</label><input class="calculator-input" id="calAge" type="number" min="18" step="1" inputmode="numeric"></div>
            <div class="calculator-field"><label for="calWeight">масса, кг</label><input class="calculator-input" id="calWeight" type="number" min="1" step="0.1" inputmode="decimal"></div>
            <div class="calculator-field"><label for="calHeight">рост, см</label><input class="calculator-input" id="calHeight" type="number" min="1" step="1" inputmode="numeric"></div>
            <div class="calculator-field"><label for="calSex">пол для формулы</label><select class="calculator-input" id="calSex"><option value="female">женский</option><option value="male">мужской</option></select></div>
            <div class="calculator-field full"><label for="calActivity">уровень активности</label><select class="calculator-input" id="calActivity"><option value="1.2">минимальная активность</option><option value="1.375">легкая активность</option><option value="1.55">умеренная активность</option><option value="1.725">высокая активность</option><option value="1.9">очень высокая активность</option></select></div>
          </div>
          <button class="calculator-button" id="calculateEnergy">рассчитать</button>
          <div class="calculator-result" id="energyResult">введи данные выше.</div>
        </section>
      </div>
    </div>
  `;

  document.getElementById("toolsBackButton").addEventListener("click", showHome);
  document.getElementById("calculateBmi").addEventListener("click", calculateBmi);
  document.getElementById("calculateEnergy").addEventListener("click", calculateEnergy);
  window.scrollTo(0, 0);
}

function calculateBmi() {
  const weight = Number(document.getElementById("bmiWeight").value);
  const heightCm = Number(document.getElementById("bmiHeight").value);
  const result = document.getElementById("bmiResult");
  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) { result.textContent = "пожалуйста, введи массу и рост."; return; }
  const bmi = weight / Math.pow(heightCm / 100, 2);
  result.innerHTML = `<strong>ИМТ: ${bmi.toFixed(1)}</strong><br>это расчетный показатель; его интерпретация зависит от возраста и клинического контекста.`;
}

function calculateEnergy() {
  const age = Number(document.getElementById("calAge").value);
  const weight = Number(document.getElementById("calWeight").value);
  const height = Number(document.getElementById("calHeight").value);
  const sex = document.getElementById("calSex").value;
  const activity = Number(document.getElementById("calActivity").value);
  const result = document.getElementById("energyResult");
  if (!age || age < 18 || !weight || !height) { result.textContent = "этот расчет предназначен для взрослых: введи возраст 18+ и остальные данные."; return; }
  const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
  const tdee = bmr * activity;
  result.innerHTML = `<strong>основной обмен: ${Math.round(bmr)} ккал/сутки</strong><br>ориентировочные общие энергозатраты: ${Math.round(tdee)} ккал/сутки.<br><br>это оценка по формуле, а не индивидуальное медицинское назначение.`;
}

/* ==================================================
   ПОКАЗАТЬ ГЛАВНУЮ
================================================== */

function showHome() {

  currentSectionId = null;

  currentArticleId = null;

  currentPage = 0;

  contentScreen.classList.add("hidden");

  homeScreen.classList.remove("hidden");

  window.scrollTo(0, 0);
}


/* ==================================================
   ОТКРЫТЬ РАЗДЕЛ
================================================== */

function openSection(sectionId) {

  const section = sections[sectionId];

  if (!section) {
    return;
  }

  if (sectionId === "mood") {
    currentSectionId = "mood";
    currentArticleId = null;
    currentPage = 0;
    contentScreen.classList.remove("hidden");
    homeScreen.classList.add("hidden");
    renderMoodJournal();
    return;
  }

  if (sectionId === "tools") {
    currentSectionId = "tools";
    currentArticleId = null;
    currentPage = 0;
    contentScreen.classList.remove("hidden");
    homeScreen.classList.add("hidden");
    renderTools();
    return;
  }

  currentSectionId = sectionId;

  currentArticleId = null;

  currentPage = 0;

  contentScreen.classList.remove("hidden");

  homeScreen.classList.add("hidden");


  contentContainer.innerHTML = `

    <div class="screen-inner fade-in">

      <button
        class="back-button"
        id="sectionBackButton"
      >
        ← назад
      </button>


      <header class="section-header">

        <p class="section-kicker">
          ${section.kicker}
        </p>

        <h1>
          ${section.title}
        </h1>

        <p>
          ${section.description}
        </p>

      </header>


      <div class="topic-list">

        ${section.topics.map(topic => `

          <button
            class="topic-card"
            data-article="${topic.id}"
          >

            <div class="topic-card-content">

              <p class="topic-card-title">
                ${topic.title}
              </p>

              <p class="topic-card-description">
                ${topic.description}
              </p>

            </div>

            <span class="topic-arrow">
              ›
            </span>

          </button>

        `).join("")}

      </div>

    </div>

  `;


  document
    .getElementById("sectionBackButton")
    .addEventListener("click", showHome);


  window.scrollTo(0, 0);
}


/* ==================================================
   ОТКРЫТЬ СТАТЬЮ
================================================== */

function openArticle(articleId) {

  const article = articles[articleId];

  if (!article) {
    return;
  }

  currentArticleId = articleId;

  currentPage = 0;

  currentSectionId = article.section;

  renderArticle();

}


/* ==================================================
   РЕНДЕР СТРАНИЦЫ СТАТЬИ
================================================== */

function renderArticle() {

  const article =
    articles[currentArticleId];

  if (!article) {
    return;
  }

  const page =
    article.pages[currentPage];

  const totalPages =
    article.pages.length;

  const isFirstPage =
    currentPage === 0;

  const isLastPage =
    currentPage === totalPages - 1;


  contentContainer.innerHTML = `

    <div class="screen-inner article-screen fade-in">

      <button
        class="back-button"
        id="articleBackButton"
      >
        ← назад
      </button>


      <header class="article-header">

        <p class="article-category">
          ${article.category}
        </p>

        <h1 class="article-title">
          ${article.title}
        </h1>

      </header>


      <article class="article-content">

        <h2>
          ${page.heading}
        </h2>

        ${page.content}

      </article>


      <div class="article-navigation">

        <button
          class="article-nav-button ${isFirstPage ? "disabled" : ""}"
          id="previousButton"
        >
          ← назад
        </button>


        <button
          class="article-nav-button next ${isLastPage ? "disabled" : ""}"
          id="nextButton"
        >
          дальше →
        </button>

      </div>


      <p class="page-counter">
        ${currentPage + 1} / ${totalPages}
      </p>

    </div>

  `;


  document
    .getElementById("articleBackButton")
    .addEventListener(
      "click",
      goBackFromArticle
    );


  window.scrollTo(0, 0);
}


/* ==================================================
   НАЗАД ИЗ СТАТЬИ
================================================== */

function goBackFromArticle() {

  if (currentSectionId) {

    openSection(currentSectionId);

    return;
  }

  showHome();
}


/* ==================================================
   СЛЕДУЮЩАЯ СТРАНИЦА
================================================== */

function nextPage() {

  const article =
    articles[currentArticleId];

  if (!article) {
    return;
  }

  if (
    currentPage <
    article.pages.length - 1
  ) {

    currentPage++;

    renderArticle();

  }
}


/* ==================================================
   ПРЕДЫДУЩАЯ СТРАНИЦА
================================================== */

function previousPage() {

  if (currentPage > 0) {

    currentPage--;

    renderArticle();

  }
}


/* ==================================================
   СОБЫТИЯ ГЛАВНОЙ
================================================== */

document.addEventListener("click", (event) => {

  const sectionButton = event.target.closest("[data-section]");

  if (sectionButton) {
    const sectionId = sectionButton.dataset.section;

    if (sectionId === "settings") {
      return;
    }

    openSection(sectionId);
    return;
  }

  const articleButton = event.target.closest("[data-article]");

  if (articleButton) {
    const articleId = articleButton.dataset.article;

    openArticle(articleId);
    return;
  }

});


if (newQuoteButton) {
  newQuoteButton.addEventListener(
    "click",
    showNextQuote
  );
}


if (themeToggle) {
  themeToggle.addEventListener("click", () => {

    const isLight =
      document.body.classList.contains("light-theme");

    applyTheme(
      isLight ? "dark" : "light"
    );

  });
}


if (quickDiaryButton) {
  quickDiaryButton.addEventListener(
    "click",
    () => openSection("mood")
  );
}


initTheme();


if (quoteElement) {
  quoteElement.style.transition =
    "opacity 0.12s ease";
}
