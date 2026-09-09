const quotes = [
  "мы не обязаны заслуживать право на еду, отдых и заботу о себе.",
  "твой самый трудный день не отменяет весь путь, который был пройден.",
  "тело не является экзаменом, который нужно сдать на определенный размер.",
  "один прием пищи не способен определить твою ценность.",
  "тебе можно уставать. тебе можно остановиться.",
  "восстановление не обязано быть идеальным, чтобы быть настоящим.",
  "ты больше, чем цифры на весах, в приложении или на бирке одежды.",
  "еда не делает из тебя хорошего или плохого человека. это еда, а не моральный тест."
];

const content = {
  care: {
    title: "разбираем РПП",
    body: `
      <p class="note">это пространство не для контроля себя, а для того, чтобы понять действительно ли у тебя есть РПП.</p>
      <h3>что здесь будет</h3>
      <ul>
        title: "что делать, когда усиливаются навязчивые мысли о еде и теле"
        title: "как переживать сильный позыв к компенсаторному поведению"
        title: "почему восстановление может идти неровно"
        title: "как отличать заботу о здоровье от поведения РПП"
      </ul>
      <p>материалы будут добавляться постепенно.</p>
    `
  },
  library: {
    title: "библиотека",
    body: `
      <span class="pill">РПП</span><span class="pill">питание</span><span class="pill">тело</span>
      <h3>почему вес может меняться</h3>
      <p>вес тела отражает не только жировую ткань. на него влияют вода, содержимое желудочно-кишечного тракта, запасы гликогена и множество других факторов.</p>
      <h3>почему после еды может быть вздутие</h3>
      <p>ощущение наполненности и временное увеличение объема живота не означают мгновенное изменение жировой ткани.</p>
      <p class="note">здесь будут полноценные статьи с источниками, а не советы из комментариев под рилсами. человечество заслужило хотя бы это.</p>
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
      <h3>образовательный ИМТ</h3>
      <p>ИМТ может быть только одним из статистических показателей и не определяет здоровье или ценность человека.</p>
      <div class="note">калькулятор ИМТ добавим в следующей версии. расчет дефицита калорий намеренно не включаем: приложение ориентировано на аудиторию с РПП и не должно выдавать персональную цель для ограничения еды.</div>
      <h3>что появится здесь</h3>
      <ul>
        <li>образовательные расчеты и объяснения;</li>
        <li>разбор ограничений формул;</li>
        <li>инструменты, которые помогают понимать физиологию, а не усиливают контроль.</li>
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
