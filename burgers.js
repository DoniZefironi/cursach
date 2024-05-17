var burger = document.querySelector('.burger-menu');
var navigat = document.querySelector('.navigat');

burger.addEventListener('click', function() {
  navigat.classList.toggle('open'); 
});