const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
 

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (toggleIcon.src.includes("moon.png")) {
    toggleIcon.src = "./sun.png";
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.src = "./moon.png";
    toggleText.textContent = "Dark Mode";
  }
});

toggleColors.addEventListener("click", (e) => {
  console.log(e.target.dataset);
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
 