const quotes = [
  "мы не обязаны заслуживать право на еду, отдых и заботу о себе",
  "твой самый трудный день не отменяет весь путь, который был пройден",
  "тело не является экзаменом, который нужно сдать на определенный размер",
  "один прием пищи не способен определить твою ценность",
  "тебе можно уставать<br  >тебе можно остановиться",
  "восстановление не обязано быть идеальным, чтобы быть настоящим",
  "ты больше, чем цифры на весах, в приложении или на бирке одежды",
  "еда не делает из тебя хорошего или плохого человека<br  >это еда, а не моральный тест"
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
      <span class="pill">деликатные проблемы</span><span class="pill">мнение врачей</span><span class="pill">объяснение с врачебного на человеческий</span>
      <h3>почему вес может меняться</h3>
      <p>вес тела отражает не только жировую ткань</p>
      <h3>почему после еды может быть вздутие</h3>
      <p>ощущение наполненности и временное увеличение объема живота не означают мгновенное изменение жировой ткани</p>
    `
  },
  supplements: {
    title: "БАДовый минимум знаний",
    body: `
      <p class="note">карточки БАДов, их описание, дозировка, правила приема и многое другое</p>
      <h3>пример карточки</h3>
      <p><b>название:</b> пока пусто</p>
      <p><b>что обещает производитель:</b> будет указано отдельно.</p>
      <p><b>состав:</b> действующие вещества и дозировки.</p>
      <p><b>доказательства:</b> что показывают исследования и насколько они надежны.</p>
      <p><b>риски:</b> известные побочные эффекты, взаимодействия и причины для осторожности.</p>
      <p>этот раздел будем наполнять после запуска основы приложения.</p>
    `
  },
  tools: {
    title: "твой личный счетовод",
    body: `
      <h3>счетчик ИМТ и дефицита/нормы/профицита калорий</h3>
      <p>Точно рассчитаем все на основании твоих параметров</p>
      <div class="note">калькулятор ИМТ и дефицита добавим в следующей версии</div>
      <h3>что появится здесь</h3>
      <ul>
        <li>расчеты и расшифровка результатов</li>
        <li>подбор БАДов в зависимости от твоих параметров</li>
        <li>составим примерный индивидуальный план калорий на день</li>
      </ul>
    `
  }
};

const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  document.documentElement.style.setProperty("--tg-bg", tg.themeParams?.bg_color || "#071426");
}

const quoteEl = document.getElementById("quote");
const quoteBtn = document.getElementById("newQuote");
let lastQuote = -1;

function showRandomQuote() {
  let i;
  do { i = Math.floor(Math.random() * quotes.length); } while (quotes.length > 1 && i === lastQuote);
  lastQuote = i;
  quoteEl.style.opacity = "0";
  setTimeout(() => {
    quoteEl.textContent = quotes[i];
    quoteEl.style.opacity = "1";
  }, 120);
}
quoteBtn.addEventListener("click", showRandomQuote);

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
document.querySelectorAll(".menu-card").forEach(btn => {
  btn.addEventListener("click", () => {
    modalContent.innerHTML = `<h2>${content[btn.dataset.section].title}</h2>${content[btn.dataset.section].body}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
