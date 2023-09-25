let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

let end = (text) => {
  setTimeout(() => {
  alert(text);
  dead.textContent = 0;
  lost.textContent = 0;
},20);
}

document.querySelectorAll(".hole").forEach((hole) =>
  hole.addEventListener("click", function () {
   
    if (hole.classList.contains("hole_has-mole")) {
     dead.textContent = Number(dead.textContent)+1;
     hole.classList.remove("hole_has-mole");
    } else {
     lost.textContent = Number(lost.textContent)+1;
    }

    if (dead.textContent == 10) {
      end("ура");
    }
    if (lost.textContent == 5) {
      end("кроты победили");
    }
  })
);

