
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

document.querySelector('.add-bot-input').addEventListener('change', function() {
  var popUp = document.querySelector('.app .pop-up-add-bot-div');
  
  if (this.checked) {
    popUp.style.display = 'block';
    //document.querySelectorAll(".pop-up-inner-add-bot-div").style.display = 'block';
    document.querySelectorAll(".pop-up-inner-add-bot-div").style.backgroundColor = "#0009"
  } else {
    popUp.style.display = 'none';
    document.querySelectorAll(".pop-up-inner-add-bot-div").style.display = 'none';
    document.querySelectorAll(".pop-up-inner-add-bot-div").style.backgroundColor = "#0000"
  }
});
