var themeButton = document.getElementById("themeButton");
  var body = document.body;
  var honest = document.getElementsByClassName("honest");

function toggleTheme() {
  localStorage.setItem('body-theme','light')
body.classList.toggle("dark");
if (body.classList.contains("dark")) {
  localStorage.setItem('body-theme','dark')
} else {
  localStorage.setItem('body-theme','light')
}

}
if (localStorage.getItem('body-theme') === 'dark')
    {
      body.classList.toggle("dark");
    }
    else{
      body.classList.remove("dark");
    }
