
const { log } = console;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElemts = document.querySelectorAll(".hidden");
hiddenElemts.forEach((el) => observer.observe(el));