const navbar = document.getElementById('nav-bar');

document.addEventListener('scroll', () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        navbar.classList.add('shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]');
        navbar.classList.add('bg-white/80');
        navbar.classList.add('dark:bg-slate-700/70');
        navbar.classList.add('backdrop-blur-xl');
    } else {
        navbar.classList.remove('shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]');
        navbar.classList.remove('bg-white/80');
        navbar.classList.remove('dark:bg-slate-700/70');
        navbar.classList.remove('backdrop-blur-xl');
    }
});