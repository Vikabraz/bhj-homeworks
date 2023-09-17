const countDown = document.getElementById("timer");
const updateCountdown = () => {
  --countDown.textContent;
  if (Number(countDown.textContent) === 0) {
    clearInterval(interId);
    alert("Вы победили в конкурсе");
  }
};
let interId = setInterval(updateCountdown, 1000);
