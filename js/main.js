"use stricts";
const barBtn = document.querySelector(".bar");
const list = document.querySelector(".links");
const icon = document.querySelector(".fa-bars-staggered");

//menu toggle
barBtn.addEventListener("click", function () {
  if (list.classList.contains("active-list")) {
    list.classList.remove("active-list");
  } else {
    list.classList.add("active-list");
  }
});

//show text button
const showText = document.querySelectorAll("#show-text");
const readMoreBtn = document.querySelectorAll("#read-more-btn");
console.log(showText, readMoreBtn);
for (let i = 0; i <= readMoreBtn.length && i <= showText.length; i++){
  readMoreBtn[i].addEventListener('click', function(){
    if(readMoreBtn[i].textContent == "Read More" || readMoreBtn[i].textContent == "Our Menu") {
      showText[i].style.display = 'block';
      
    }
  });
}


