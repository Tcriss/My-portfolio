const aside = document.getElementById('aside-nav-bar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("aside ul a");
const theme = localStorage.getItem('theme') || 'system';

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aside.classList.toggle('translate-x-full');
    aside.classList.toggle('invisible');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aside.classList.toggle('translate-x-full');
    aside.classList.toggle('invisible');
});

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((item) => {
        if (item.getAttribute("aria-label") == entry.target.id) {
          item.classList.add("text-blue-400");
          item.classList.add("bg-slate-100");
          item.classList.add("dark:bg-slate-600");
          item.classList.add("dark:text-white/80");
        } else {
          item.classList.remove("text-blue-400");
          item.classList.remove("bg-slate-100");
          item.classList.remove("dark:bg-slate-600");
          item.classList.remove("dark:text-white/80");
        }
      });
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
});

sections.forEach((section) => {
  observer.observe(section);
});

document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    observer.disconnect();
  } else {
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
};