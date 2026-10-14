 document.addEventListener("DOMContentLoaded", () => {
  // Находим все картинки внутри ваших статей (замените .article на ваш класс контейнера, если он есть)
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    // 1. Автоматически применяем стили красивого свечения и рамки
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.borderRadius = "30px";
    img.style.margin = "15px 0";
    img.style.display = "block";
    img.style.boxSizing = "border-box";
    
    // Элегантное адаптивное свечение (подстраивается под тему TG)
    img.style.boxShadow = "0 0px 24px var(--purple, rgba(0, 0, 0, 0.08));";
    // 2. Умный расчет пропорций (aspect-ratio) БЕЗ вашего участия
    // Как только картинка начинает загружаться в браузере, JS сам узнает ее размеры
    if (img.complete) {
      setAspectRatio(img);
    } else {
      img.addEventListener("load", () => setAspectRatio(img));
    }
  });

  function setAspectRatio(img) {
    // Проверяем, что размеры валидны, чтобы не делить на ноль
    if (img.naturalWidth && img.naturalHeight) {
      img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
      img.style.objectFit = "cover";
    }
  }
});
