const cookieImg = document.getElementById("cookie");
const counterCounter = document.getElementById("clicker__counter");


cookieImg.onclick = () => {
  counterCounter.textContent = Number(counterCounter.textContent) + 1;
  if (cookieImg.width === 200) {
    cookieImg.width = 150;
  } else {
    cookieImg.width = 200;
  }
};

