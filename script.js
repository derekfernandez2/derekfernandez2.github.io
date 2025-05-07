document.addEventListener("DOMContentLoaded", function () {
  const miata = document.querySelector(".miata-img");
  setInterval(() => {
    if (miata) {
      miata.classList.toggle("blink"); //blinking effect on main page
    }
  }, 800);
});
