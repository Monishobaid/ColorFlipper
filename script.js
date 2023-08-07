let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click",function(){
    mainNav.classList.toggle("active");
});

const colors = ["#1C6FF8","#27BBE0","#31DB92","#1BF118","#9BFA24","#FEF720"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // document.getElementById("btn").backgroundColor = colors[randomNumber];
    // correct line
    btn.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
