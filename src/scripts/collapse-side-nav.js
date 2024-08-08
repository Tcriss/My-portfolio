const aside = document.getElementById('aside-nav-bar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aside.classList.toggle('translate-x-full');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aside.classList.toggle('translate-x-full');
})