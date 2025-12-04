const buttons = document.querySelectorAll(".section-rating__button");
const lists = document.querySelectorAll(".section-rating__list");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const year = button.dataset.rateBtn;

    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    lists.forEach(list => {
      list.classList.remove("active");
      if (list.dataset.rateList === year) {
        list.classList.add("active");
      }
    });
  });
});
