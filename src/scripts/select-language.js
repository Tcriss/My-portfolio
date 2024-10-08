const languageBtn = document.getElementById('language-btn');
const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');
const languageList = document.getElementById('language-picker');

document.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsMenu.classList.add('invisible');
    settingsMenu.classList.add('-translate-y-8');
    settingsMenu.classList.add('opacity-0');
});
settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    settingsMenu.classList.toggle('invisible');
    settingsMenu.classList.toggle('-translate-y-8');
    settingsMenu.classList.toggle('opacity-0');
});

languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageList.classList.toggle('invisible');
    languageList.classList.toggle('-translate-x-[24px]');
    languageList.classList.toggle('opacity-0');
});