let menuMobile = document.querySelector('.mobile-menu')

function menuShow(){
        if(menuMobile.classList.contains('open')){
            menuMobile.classList.remove('open')
        }else{
            menuMobile.classList.add('open')
        }
}

// Script dos slides

let slides = document.querySelectorAll('.slide-container')
let btnPrev = document.getElementById('prev-button')
let btnNext = document.getElementById('next-button')

let index = 0;

function primeiro(){
   
}

function next(){
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active'); 
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

btnNext.addEventListener('click', next)
btnPrev.addEventListener('click', prev)


