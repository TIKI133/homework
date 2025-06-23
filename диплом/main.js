var swiper = new Swiper('.sellers__slider', {

    spaceBetween: 40,
    slidesPerView: 4,

    navigation: {
        nextEl: '.sneakers__next',
        prevEl: '.sneakers__prev',
    },
});





const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains('hidden')) {
        btn.textContent = 'CLOSE';
    } else {
        btn.textContent = 'SEE ALL';
    }

    content.classList.toggle('hidden');
}





document.getElementById('toggleButton').addEventListener('click', function () {
    document.querySelector('.showcase').style.opacity = '1';
});