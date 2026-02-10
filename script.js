const brandSwiper = new Swiper('.swiper-brand', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
       clickable: true,
    },
    
})

const techSwiper = new Swiper('.swiper-tech', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
       clickable: true,
    },
    
})

const servicePrice = new Swiper('.swiper-service', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 15,

    pagination: {
        el: '.swiper-pagination',
       clickable: true,
    },
    
})

const showMoreBrandBtn = document.querySelector('.showmorebtn-brand');
const hiddenBrandCards = document.querySelectorAll('.brand-card.hidden');

let isBrandOpen = false;

showMoreBrandBtn.addEventListener('click', () => {
  isBrandOpen = !isBrandOpen;

  hiddenBrandCards.forEach(card => {
    card.classList.toggle('is-visible', isBrandOpen);
  });

  showMoreBrandBtn.innerHTML = isBrandOpen
    ? `<img src="assets/images/expand.svg" alt="">Скрыть`
    : `<img src="assets/images/expand.svg" alt="">Показать все`;

});
const showMoreTechBtn = document.querySelector('.showmorebtn-tech');
const hiddenTechCards = document.querySelectorAll('.card-tech.hidden');

let isTechOpen = false;

showMoreTechBtn.addEventListener('click', () => {
  isTechOpen = !isTechOpen;

  hiddenTechCards.forEach(card => {
    card.classList.toggle('is-visible', isTechOpen);
  });

  showMoreTechBtn.innerHTML = isTechOpen
    ? `<img src="assets/images/expand.svg" alt="">Скрыть`
    : `<img src="assets/images/expand.svg" alt="">Показать все`;

});

const showMoreLoremBtn = document.querySelector('.main__readmore');
const hiddenLorem = document.querySelector('.lorem.hidden');

let isLoremOpen = false;

showMoreLoremBtn.addEventListener('click', () => {
  isLoremOpen = !isLoremOpen;

  hiddenLorem.classList.toggle('is-visible', isLoremOpen);

  showMoreLoremBtn.classList.toggle('is-open', isLoremOpen);

  showMoreLoremBtn.innerHTML = isLoremOpen
   ? `<img src="assets/images/expand.svg" alt="">Скрыть`
    : `<img src="assets/images/expand.svg" alt="">Читать далее`;

});

const burgerBtn = document.querySelector('.burgerbtn');
const aside = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.closebtn');

function openMenu() {
  aside.classList.add('is-open');
  overlay.classList.add('is-open');
}

function closeMenu() {
  aside.classList.remove('is-open');
  overlay.classList.remove('is-open');
}

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
