const viewimg = document.querySelector('.viewimg');
const images = viewimg.querySelectorAll('img');
let currentIndex = 0;

images[currentIndex].classList.add('active');

viewimg.addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
});

const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const images1 = slides.querySelectorAll('img');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');
const currentSlide = slider.querySelector('.current-slide');
const totalSlides = slider.querySelector('.total-slides');

let currentIndex1 = 0;
totalSlides.textContent = images1.length;

// Обработчик клика на кнопку "Назад"
prevButton.addEventListener('click', () => {
  changeSlide(currentIndex1 - 1);
});

// Обработчик клика на кнопку "Вперед"
nextButton.addEventListener('click', () => {
  changeSlide(currentIndex1 + 1);
});

// Функция для изменения слайда
function changeSlide(index) {
  if (index < 0) {
    index = images1.length - 1; // Переход к последнему слайду, если достигнуто начало
  } else if (index >= images1.length) {
    index = 0; // Переход к первому слайду, если достигнуто конец
  }

  currentIndex1 = index;
  showSlide(currentIndex1);
  updatePagination();
}

// Функция для показа слайда
function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Функция для обновления информации о пагинации
function updatePagination() {
  currentSlide.textContent = currentIndex1 + 1;
}

// Показать первый слайд и обновить информацию о пагинации
showSlide(currentIndex1);
updatePagination();