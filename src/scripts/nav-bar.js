const navbar = document.getElementById('nav-bar');

document.addEventListener('scroll', () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        navbar.classList.add('shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]');
        navbar.classList.add('bg-white/80');
        navbar.classList.add('backdrop-blur-xl');
    } else {
        navbar.classList.remove('shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]');
        navbar.classList.remove('bg-white/80');
        navbar.classList.remove('backdrop-blur-xl');
    }
});