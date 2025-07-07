let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem("darkmode", null);
}; 

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Menu Toggle

const menuContent = document.querySelector('.menu-content');
const menu = document.querySelector('#menu-toggle');
const visibility = menu.getAttribute('aria-expanded');

const enableMenu = () => {
    menuContent.classList.add('active');
    menu.classList.add('active');
    menu.setAttribute('aria-expanded', true);
    menu.classList.add('fixed');
    

};

const disableMenu = () => {
    menu.classList.remove('active')
    menuContent.classList.remove('active');
    menu.setAttribute('aria-expanded', false);
    menu.classList.remove('fixed');
}; 


menu.addEventListener("click", () => {
    
    const menuActive = menu.classList.contains('active');
    menuActive ? disableMenu() : enableMenu();
})

// Desktop Menu

const desktopMenuContent = document.querySelector('.desktop-menu');

menu.addEventListener("click", () => {
    const visibility = desktopMenuContent.getAttribute('data-visible');

    if (visibility === "true") {
        desktopMenuContent.setAttribute('data-visible', true);
        menu.setAttribute('aria-expanded', true);
        desktopMenuContent.classList.remove('hidden');
    } else if (visibility === "false") {
        desktopMenuContent.setAttribute('data-visible', false);
        menu.setAttribute('aria-expanded', false);
        desktopMenuContent.classList.add('hidden');
    }

})