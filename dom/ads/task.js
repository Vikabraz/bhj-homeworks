//const text = document.querySelector(".rotator__case"),
const texts = [...document.querySelectorAll(".rotator__case")];
function toggle() {
  const textActive = document.querySelector(".rotator__case_active");
  textActive.classList.remove("rotator__case_active");
  let textNext = textActive.nextElementSibling;
  if (!textNext || !textNext.classList.contains("rotator__case")) {
    textNext = texts[0];
  }
  textNext.classList.add("rotator__case_active");
  setTimeout(toggle, 1000);
}
toggle();
