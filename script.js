const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn-contact");
const closeModalBtn = document.querySelector(".closeModal-btn");
const cancelBtn = document.querySelector(".btn-cancel");

openModalBtn.addEventListener("click", function () {
  overlay.style.display = "block";
});
closeModalBtn.addEventListener("click", function () {
  overlay.style.display = "none";
});
overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
cancelBtn.addEventListener("click", function () {
  overlay.style.display = "none";
});
