const quotes = [
  "мы не обязаны заслуживать право на еду, отдых и заботу о себе",
  "твой самый трудный день не отменяет весь путь, который был пройден.",
  "тело не является экзаменом, который нужно сдать на определенный размер.",
  "один прием пищи не способен определить твою ценность.",
  "тебе можно уставать. тебе можно остановиться.",
  "восстановление не обязано быть идеальным, чтобы быть настоящим.",
  "ты больше, чем цифры на весах, в приложении или на бирке одежды.",
  "еда не делает из тебя хорошего или плохого человека. это еда, а не моральный тест."
];

const content = {
  rpp: {
    title: "разбираем РПП",
    body: `
      <p class="note">этот раздел не для контроля себя, а для того, чтобы проверить есть ли у тебя РПП.</p>
      <h3>что здесь будет</h3>
      <ul>
<p class="note">что делать, когда усиливаются навязчивые мысли о еде и теле</p>
</ul>
<p class="note">как переживать сильный позыв к компенсаторному поведению</p>
</ul>
<p class="note">почему восстановление может идти неровно</p>
</ul>
<p class="note">как отличать заботу о здоровье от поведения РПП</p>
      </ul>
      <p>материалы будут добавляться постепенно.</p>
    `
  },
  medical: {
    title: "молекулярная медицина",
    body: `
      <span class="pill">РПП</span><span class="pill">питание</span><span class="pill">тело</span>
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
