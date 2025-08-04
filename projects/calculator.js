// THEME PREFERENCE SAVE 
document.addEventListener("DOMContentLoaded", () => {
  const themeDropdown = document.getElementById("theme-dropdown");
  const savedTheme = localStorage.getItem("theme") || "💻";

  // Set the initial theme based on saved preference
  document.body.className = savedTheme === "🌑" ? "darkmode" : "";
  themeDropdown.value = savedTheme;

  // Update the theme when the dropdown value changes
  themeDropdown.addEventListener("change", (event) => {
    const selectedTheme = event.target.value;
    localStorage.setItem("theme", selectedTheme);
  });
});

// TEST 
