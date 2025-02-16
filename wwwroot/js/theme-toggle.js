// filepath: /home/r00ph13/Development/DotNet/BlazorToDoList/wwwroot/js/theme-toggle.js
function toggleTheme() {
  // Get the theme link element
  const themeLink = document.getElementById('theme-link');

  // If the current theme is dark, change it to light
  if(themeLink.getAttribute('href') === 'css/dark-theme.css') {
    themeLink.setAttribute('href', 'css/app.css');
  } else { // Otherwise, change it to dark
    themeLink.setAttribute('href', 'css/dark-theme.css');
  }
}

function blurActiveElement() {
    // Blur the active element (the button)
    document.activeElement.blur();
}