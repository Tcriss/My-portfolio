const languageBtn = document.getElementById('language-btn');
const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');
const languageList = document.getElementById('language-picker'); 

settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    settingsMenu.classList.toggle('invisible');
    settingsMenu.classList.toggle('-translate-y-8');
    settingsMenu.classList.toggle('opacity-0');
});

settingsBtn.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    settingsMenu.classList.toggle('invisible');
    settingsMenu.classList.toggle('-translate-y-8');
    settingsMenu.classList.toggle('opacity-0');
});

languageBtn.addEventListener('click', (e) => {
    //Oe.preventDefault();
    languageList.classList.toggle('invisible');
    languageList.classList.toggle('-translate-x-[24px]');
    languageList.classList.toggle('opacity-0');
    
});