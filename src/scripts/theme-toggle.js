function getThemePreference() {
  if (typeof localStorage) return localStorage.getItem("theme") ?? "system";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0"
    })
}

function updateTheme() {
    if (remove != null) remove();

    matchMedia.addEventListener("change", updateTheme);
    remove = () => matchMedia.removeEventListener("change", updateTheme);

    const themePreference = getThemePreference();
    const isDark = themePreference === "dark" || (themePreference === "system" && matchMedia.matches);
    
    updateIcon(themePreference);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
}

updateTheme();

document.querySelectorAll(".themes-menu-option").forEach((element) => {
  element.addEventListener("click", (e) => {
    localStorage.setItem("theme", e.target.innerText.toLowerCase().trim());
    updateTheme();
  });
});

document.addEventListener("astro:after-swap", () => {
  updateTheme();
  window.scrollTo({ left: 0, top: 0, behavior: "instant" });
});
