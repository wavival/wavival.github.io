const root = document.documentElement;
const KEY = "theme";

function syncIcons(isDark: boolean) {
  document.getElementById("sun-desktop")?.classList.toggle("hidden", !isDark);
  document.getElementById("moon-desktop")?.classList.toggle("hidden", isDark);
  document.getElementById("sun-mobile")?.classList.toggle("hidden", !isDark);
  document.getElementById("moon-mobile")?.classList.toggle("hidden", isDark);
}

syncIcons(root.classList.contains("dark"));

["theme-toggle-desktop", "theme-toggle-mobile"].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", () => {
    const next = root.classList.contains("dark") ? "light" : "dark";
    const isDark = next === "dark";
    root.classList.toggle("dark", isDark);
    localStorage.setItem(KEY, next);
    syncIcons(isDark);
  });
});
