const reveals = document.querySelectorAll(".reveal");
function Visible(reveals) {
  reveals.forEach((reveals) => {
    let coord = reveals.getBoundingClientRect();
    if (coord.top < window.innerHeight && coord.bottom > 0) {
      reveals.classList.add("reveal_active");
    } else {
      reveals.classList.remove("reveal_active");
    }
  });
}
window.addEventListener("scroll", Visible(reveals));
