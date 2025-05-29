// const img = document.querySelectorAll(".header-slides ul img");
// const previousbtn = document.querySelector(".previous-btn");
// const nextbtn = document.querySelector(".next-btn");

// let n = 0;
// function changeslide() {
//   for (let i = 0; i < imgs.length; i++) {
//     imgs[i].style.display = "none";
//   }
//   imgs[n].style.display = "block";
// }
// changeslide();

// previousbtn.addEventListener("click", (e) => {
//   if (n > 0) {
//     n--;
//   } else {
//     n = imgs.length - 1;
//   }
//   changeslide();
// });

const imgs = document.querySelectorAll(".header-slides ul img");
const previousbtn = document.querySelector(".previous-btn");
const nextbtn = document.querySelector(".next-btn");

let n = 0;

function changeslide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[1].style.display = "none";
  }
  imgs[1].style.display = "block";
}

changeslide();

previousbtn.addEventListener("click", () => {
  n = n > 1 ? n - 1 : imgs.length - 1;
  changeslide();
});

nextbtn.addEventListener("click", () => {
  n = (n + 1) % imgs.length;
  changeslide();
});
