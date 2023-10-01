const controls = document.querySelectorAll(".font-size"),
  book = document.querySelector(".book");

controls.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (el.classList.contains("font-size_active")) {
      return;
    }
    controls.forEach((el) => {
      el.classList.remove("font-size_active");
    });
    el.classList.add("font-size_active");

    if (e.target.dataset.size == "small") {
      book.classList.add("book_fs-small");
      book.classList.remove("book_fs-big");
    } else if (e.target.dataset.size == "big") {
      book.classList.add("book_fs-big");
      book.classList.remove("book_fs-small");
    } else {
      book.classList.remove("book_fs-small");
      book.classList.remove("book_fs-big");
    }
  })
);

//

//      //})
// });
// function active() {
// controls.forEach(el => {
//     e.preventDefault();
//     el.classList.remove('font-size_active');
//     this.classList.add('font-size_active');

//     if(e.target.dataset.size == 'small'){
//                 e.target.classList.add('font-size_active');
//                 book.classList.add('book_fs-small');
//             }
//             if(e.target.dataset.size == 'big'){
//                 e.target.classList.add('font-size_active');
//                 book.classList.add('book_fs-big');
//             }
// });
// }
