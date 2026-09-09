const quotes = [
  "мы не обязаны заслуживать право на еду, отдых и заботу о себе",
  "твой самый трудный день не отменяет весь путь, который был пройден",
  "тело не является экзаменом, который нужно сдать на определенный размер",
  "один прием пищи не способен определить твою ценность",
  "тебе можно уставать. тебе можно остановиться",
  "восстановление не обязано быть идеальным, чтобы быть настоящим",
  "ты больше, чем цифры на весах, в приложении или на бирке одежды",
  "еда не делает из тебя хорошего или плохого человека. это еда, а не моральный тест"
];


const content = {
  rpp: {
    title: "разбираем РПП",
    body: `
      <p class="note">
        здесь собраны материалы о РПП, его механизмах, симптомах
        и восстановлении.
      </p>

      <div class="sub-menu">

        <button class="topic-card" onclick="openArticle('rpp-basics')">
          <b>основы РПП</b>
          <small>что такое РПП и почему это не вопрос силы воли</small>
          <span>›</span>
        </button>

        <button class="topic-card" onclick="openArticle('rpp-thoughts')">
          <b>мысли о еде и теле</b>
          <small>навязчивые мысли, тревога и чувство вины</small>
          <span>›</span>
        </button>

        <button class="topic-card" onclick="openArticle('rpp-compensation')">
          <b>компенсаторное поведение</b>
          <small>почему возникает позыв компенсировать еду</small>
          <span>›</span>
        </button>

        <button class="topic-card" onclick="openArticle('rpp-recovery')">
          <b>восстановление</b>
          <small>почему восстановление не всегда идет линейно</small>
          <span>›</span>
        </button>

      </div>
    `
  },


  medical: {
    title: "молекулярная медицина",
    body: `
      <span class="pill">деликатные проблемы</span>
      <span class="pill">мнение врачей</span>
      <span class="pill">объяснение с врачебного на человеческий</span>

      <h3>почему вес может меняться</h3>
      <p>
        вес тела отражает не только жировую ткань.
        на него влияют вода, содержимое желудочно-кишечного тракта,
        запасы гликогена и множество других факторов.
      </p>

      <h3>почему после еды может быть вздутие</h3>
      <p>
        ощущение наполненности и временное увеличение объема живота
        не означают мгновенное изменение жировой ткани.
      </p>

      <h3>что происходит с организмом</h3>
      <p>
        здесь будут материалы о физиологии, обмене веществ,
        гормонах и других процессах простым человеческим языком.
      </p>
    `
  },


  supplements: {
    title: "БАДовый минимум знаний",
    body: `
      <p class="note">
        карточки БАДов, их состав, обещания производителей,
        доказательность и возможные риски.
      </p>

      <h3>пример карточки</h3>

      <p>
        <b>название:</b> пока пусто
      </p>

      <p>
        <b>что обещает производитель:</b>
        будет указано отдельно.
      </p>

      <p>
        <b>состав:</b>
        действующие вещества и дозировки.
      </p>

      <p>
        <b>доказательства:</b>
        что показывают исследования и насколько они надежны.
      </p>

      <p>
        <b>риски:</b>
        известные побочные эффекты, взаимодействия
        и причины для осторожности.
      </p>

      <p>
        этот раздел будем постепенно наполнять карточками препаратов
        и добавок.
      </p>
    `
  },


  tools: {
    title: "твой личный счетовод",
    body: `
      <h3>инструменты</h3>

      <p>
        здесь будут находиться образовательные калькуляторы
        и инструменты для работы с числовыми показателями.
      </p>

      <div class="note">
        калькулятор ИМТ и другие инструменты добавим
        в следующих версиях.
      </div>

      <h3>что появится здесь</h3>

      <ul>
        <li>расчеты и расшифровка результатов</li>
        <li>образовательные калькуляторы</li>
        <li>справочная информация по показателям</li>
      </ul>
    `
  }
};


const articles = {

  "rpp-basics": {
    title: "основы РПП",

    pages: [

      `
        <h3>что такое РПП</h3>

        <p>
          расстройства пищевого поведения — это не просто желание
          похудеть или контролировать питание.
        </p>

        <p>
          это состояния, при которых мысли и поведение вокруг еды,
          тела и веса начинают заметно влиять на жизнь человека.
        </p>

        <p>
          РПП могут проявляться по-разному и не всегда заметны
          окружающим.
        </p>
      `,

      `
        <h3>почему это не вопрос силы воли</h3>

        <p>
          при РПП пищевое поведение поддерживается не только
          осознанными решениями.
        </p>

        <p>
          в нем могут участвовать механизмы вознаграждения,
          тревоги, привычки, избегания и эмоциональной регуляции.
        </p>

        <p>
          поэтому фраза «просто возьми себя в руки» не объясняет
          происходящее и обычно не помогает.
        </p>
      `,

      `
        <h3>РПП не всегда выглядит одинаково</h3>

        <p>
          разные расстройства пищевого поведения имеют разные
          симптомы и механизмы.
        </p>

        <p>
          человек может ограничивать питание, переедать,
          испытывать эпизоды потери контроля, компенсировать еду
          или постоянно испытывать тревогу из-за веса и тела.
        </p>
      `

    ]
  },


  "rpp-thoughts": {
    title: "мысли о еде и теле",

    pages: [

      `
        <h3>навязчивые мысли</h3>

        <p>
          при РПП мысли о еде, калориях, весе и внешности могут
          занимать огромное количество внимания.
        </p>

        <p>
          иногда человек замечает, что большая часть дня проходит
          в планировании еды, подсчете, проверке тела или размышлениях
          о том, что можно и нельзя есть.
        </p>
      `,

      `
        <h3>почему запреты усиливают фиксацию</h3>

        <p>
          жесткие запреты могут усиливать внимание к запрещенной
          еде.
        </p>

        <p>
          чем сильнее человек пытается никогда не думать
          о чем-то, тем заметнее эта мысль становится.
        </p>

        <p>
          поэтому проблема часто заключается не в отсутствии
          дисциплины, а в самом цикле запрета, тревоги и контроля.
        </p>
      `,

      `
        <h3>чувство вины после еды</h3>

        <p>
          еда сама по себе не является моральным поступком.
        </p>

        <p>
          чувство вины после еды может быть частью симптомов РПП,
          особенно если определенные продукты воспринимаются
          как «плохие» или «запрещенные».
        </p>
      `

    ]
  },


  "rpp-compensation": {
    title: "компенсаторное поведение",

    pages: [

      `
        <h3>что такое компенсация</h3>

        <p>
          компенсаторным поведением называют действия,
          которые человек предпринимает после еды или эпизода
          переедания, пытаясь «исправить» съеденное.
        </p>

        <p>
          это может быть частью разных форм РПП.
        </p>
      `,

      `
        <h3>почему возникает такой позыв</h3>

        <p>
          часто компенсация связана с тревогой, чувством вины
          и убеждением, что еду необходимо каким-то образом
          «отработать».
        </p>

        <p>
          проблема в том, что такое поведение может закреплять
          цикл тревоги и контроля.
        </p>
      `,

      `
        <h3>важно помнить</h3>

        <p>
          один прием пищи не требует наказания или исправления.
        </p>

        <p>
          тело постоянно регулирует количество энергии,
          жидкости и питательных веществ, а питание не является
          системой ежедневных моральных оценок.
        </p>
      `

    ]
  },


  "rpp-recovery": {
    title: "восстановление",

    pages: [

      `
        <h3>восстановление не всегда линейно</h3>

        <p>
          восстановление от РПП редко выглядит как идеально
          ровная линия вверх.
        </p>

        <p>
          могут быть более легкие и более тяжелые периоды.
          временное ухудшение не означает, что весь предыдущий
          прогресс исчез.
        </p>
      `,

      `
        <h3>почему откаты случаются</h3>

        <p>
          стресс, изменения режима, эмоциональные события
          и множество других факторов могут временно усиливать
          симптомы.
        </p>

        <p>
          важно рассматривать такие периоды как часть процесса,
          а не как доказательство личной несостоятельности.
        </p>
      `,

      `
        <h3>восстановление это не только еда</h3>

        <p>
          работа с РПП затрагивает не только питание.
        </p>

        <p>
          важными становятся отношения с собственным телом,
          тревогой, контролем, эмоциями и повседневной жизнью.
        </p>
      `

    ]
  }

};


let currentArticle = null;
let currentPage = 0;


function openArticle(id) {

  if (!articles[id]) {
    console.error("статья не найдена:", id);
    return;
  }

  currentArticle = articles[id];
  currentPage = 0;

  renderArticle();
}


function renderArticle() {

  if (!currentArticle) {
    return;
  }

  const article = currentArticle;
  const page = article.pages[currentPage];

  modalContent.innerHTML = `

    <h2>${article.title}</h2>

    ${page}

    <div class="article-navigation">

      ${
        currentPage > 0
          ? `
            <button
              class="topic-card"
              onclick="previousPage()"
            >
              ← назад
            </button>
          `
          : ""
      }

      ${
        currentPage < article.pages.length - 1
          ? `
            <button
              class="topic-card"
              onclick="nextPage()"
            >
              дальше →
            </button>
          `
          : ""
      }

    </div>

  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}


function nextPage() {

  if (
    currentArticle &&
    currentPage < currentArticle.pages.length - 1
  ) {

    currentPage++;

    renderArticle();
  }
}


function previousPage() {

  if (
    currentArticle &&
    currentPage > 0
  ) {

    currentPage--;

    renderArticle();
  }
}


const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}


const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("newQuote");

function showRandomQuote() {

  if (!quoteElement) {
    return;
  }

  const randomIndex = Math.floor(
    Math.random() * quotes.length
  );

  quoteElement.textContent = quotes[randomIndex];
}


if (newQuoteButton) {
  newQuoteButton.addEventListener(
    "click",
    showRandomQuote
  );
}


const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const modalBackdrop = document.getElementById("modalBackdrop");


function openSection(section) {

  if (!content[section]) {
    return;
  }

  modalContent.innerHTML = `

    <h2>${content[section].title}</h2>

    ${content[section].body}

  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}


document.querySelectorAll(".menu-card").forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const section = button.dataset.section;

        openSection(section);

      }
    );

  }
);


function closeCurrentModal() {

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

}


if (closeModal) {

  closeModal.addEventListener(
    "click",
    closeCurrentModal
  );

}


if (modalBackdrop) {

  modalBackdrop.addEventListener(
    "click",
    closeCurrentModal
  );

}


document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      closeCurrentModal();
    }

  }
);
