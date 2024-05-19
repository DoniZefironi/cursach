let translations = {}; // Переводы хранятся в этой переменной
let originalTexts = {}; // Оригинальные тексты хранятся в этой переменной
let isTranslated = false; // Флаг, указывающий, переведена ли страница в данный момент

function applyTranslations(translations) {
  for (let key in translations) {
    if (translations.hasOwnProperty(key)) {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = translations[key];
      }
    }
  }
}

function loadTranslations() {
  fetch('translations3.json')
    .then(response => response.json())
    .then(data => {
      translations = data.translations;
      originalTexts = data.originalTexts;
      applyTranslations(originalTexts); // Применяем оригинальные тексты при загрузке
    })
    .catch(error => {
      console.log('Произошла ошибка при загрузке переводов:', error);
    });
}

function translatePage() {
  if (isTranslated) {
    // Переводим обратно на оригинальные тексты
    applyTranslations(originalTexts);
    isTranslated = false;
  } else {
    // Переводим на тексты из JSON-файла
    applyTranslations(translations);
    isTranslated = true;
  }
}

// Загрузка переводов и оригинальных текстов при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  const translateButton = document.getElementById('translateButton');
  translateButton.addEventListener('click', translatePage);
  loadTranslations();
});