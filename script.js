const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
       clickable: true,
    },
    
})
const showMoreBtn = document.querySelector('.showmorebtn');
const hiddenCards = document.querySelectorAll('.brand-card.hidden');

let isOpen = false;

showMoreBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  hiddenCards.forEach(card => {
    card.classList.toggle('is-visible', isOpen);
  });

  showMoreBtn.classList.toggle('is-open', isOpen);

  showMoreBtn.innerHTML = isOpen
    ? `<img src="assets/images/expand.svg" alt="">Скрыть`
    : `<img src="assets/images/expand.svg" alt="">Показать все`;
});
