var themeButton = document.getElementById("themeButton");
var body = document.body;
var footer = document.getElementsByClassName("footer");

themeButton.addEventListener("click", function() {
  body.classList.toggle("dark");
  footer.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeButton.textContent = "Светлая тема";
  } else {
    themeButton.textContent = "Темная тема";
  }
});