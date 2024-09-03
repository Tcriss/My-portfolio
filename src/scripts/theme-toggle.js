let remove = null;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

function getThemePreference() {
  if (typeof localStorage !== "undefined") return localStorage.getItem("theme") ?? "system";

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

function updateTheme(preference) {
  localStorage.setItem("theme", preference);
}

function toggleTheme() {
  if (remove != null) remove();

  matchMedia.addEventListener("change", toggleTheme);
  remove = () => matchMedia.removeEventListener("change", toggleTheme);

  const themePreference = getThemePreference();
  const isDark = themePreference === "dark" || (themePreference === "system" && matchMedia.matches);

  document.documentElement.classList[isDark ? "add" : "remove"]("dark");
};

function changeTheme() {
  const theme = getThemePreference();

  switch(theme) {
    case 'light':
      themeToggleBtn.innerHTML =  `
        <i class="fi fi-bs-brightness flex items-center justify-center"></i>
        Claro
      `;
      break;
    case('dark'):
      themeToggleBtn.innerHTML = `
        <i class="fi fi-bs-moon flex items-center justify-center"></i>
        Oscuro
      `;
      break;
    default:
      themeToggleBtn.innerHTML = `
        <i class="fi fi-bs-computer flex items-center justify-center"></i>
        Sistema
      `;
      break;
  };
}

changeTheme();
toggleTheme();

themeToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const theme = getThemePreference();
  switch(theme) {
    case 'system':
      updateTheme('light');
      themeToggleBtn.innerHTML =  `
        <i class="fi fi-bs-brightness flex items-center justify-center"></i>
        Claro
      `;
      break;
    case('light'):
      updateTheme('dark');
      themeToggleBtn.innerHTML = `
        <i class="fi fi-bs-moon flex items-center justify-center"></i>
        Oscuro
      `;
      break;
    default:
      updateTheme('system');
      themeToggleBtn.innerHTML = `
        <i class="fi fi-bs-computer flex items-center justify-center"></i>
        Sistema
      `;
      break;
  };
  toggleTheme();
});

document.addEventListener("astro:after-swap", () => {
  toggleTheme();
  window.scrollTo({ left: 0, top: 0, behavior: "instant" });
});
