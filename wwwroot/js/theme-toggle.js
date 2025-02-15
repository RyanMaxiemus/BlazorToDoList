// filepath: /home/r00ph13/Development/DotNet/BlazorToDoList/wwwroot/js/theme-toggle.js
function toggleTheme() {
    // Get the theme link element
    const themeLink = document.getElementById('theme-link');
    
    // If the current theme is light, change it to dark
    if (themeLink.getAttribute('href') === 'css/app.css') {
        themeLink.setAttribute('href', 'css/dark-theme.css');
    } else { // Otherwise, change it back to light
        themeLink.setAttribute('href', 'css/app.css');
    }
}