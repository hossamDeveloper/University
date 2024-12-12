// Toggle Menu
let links = document.getElementById("links")
let show = document.getElementById("show")

function barHide() {
    links.style.right = "-250px"
    
}
function barShow() {
    links.style.right = "0"
    
}
// Toggle Menu

const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
const btns = document.querySelectorAll('.btn');

function reset() {
  for (let i = 0; i < items.length; i++) {
    btns[i].classList.remove('expand');
    items[i].classList.remove('animation');
  } 
}

function animate(i) {
  btns[i].classList.add('expand');
  items[i].classList.add('animation');
}

function scrollTo(i) {
  slider.style.transform = `translateX(${-i * slider.offsetWidth}px)`;
  reset();
  animate(i);
}

const activate = (e) => e.target.matches('.btn') && scrollTo(e.target.dataset.index);

const init = () => animate(0);

window.addEventListener('load',init,false);
window.addEventListener('click',activate,false);