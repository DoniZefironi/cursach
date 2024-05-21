var themeButton = document.getElementById("themeButton");
var body = document.body;
var honest = document.getElementsByClassName("honest")[0];
var footer = document.getElementsByClassName("footer")[0];

var savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  honest.classList.add(savedTheme);
  footer.classList.add(savedTheme);

  if (savedTheme === "dark") {
    themeButton.textContent = "Светлая тема";
  } else {
    themeButton.textContent = "Темная тема";
  }
}

themeButton.addEventListener("click", function() {
  localStorage.setItem("theme", "dark");
  body.classList.toggle("dark");
  honest.classList.toggle("dark");
  footer.classList.toggle("dark");

  if (body.classList.contains("dark")) {

    themeButton.textContent = "Светлая тема";
  } else {
    localStorage.setItem("theme", "light");
    themeButton.textContent = "Темная тема";
  }
});