const languageBtn = document.getElementById('language-btn');
const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');
const languageList = document.getElementById('language-picker'); 

settingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    settingsMenu.classList.toggle('-translate-y-8');
    settingsMenu.classList.toggle('opacity-0');
});

languageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // languageList.classList.toggle('hidden');
    // languageList.classList.toggle('grid');
    languageList.classList.toggle('translate-x-8');
    languageList.classList.toggle('opacity-0');
});