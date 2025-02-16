// filepath: /home/r00ph13/Development/DotNet/BlazorToDoList/wwwroot/js/theme-toggle.js
function toggleTheme() {
  // Get the theme link element
  const themeLink = document.getElementById('theme-link');

  // Get the two icons for the toggle button
  const sunIcon = document.getElementById('toggle-sun-icon');
  const moonIcon = document.getElementById('toggle-moon-icon');

  // If the current theme is dark, change it to light
  if(themeLink.getAttribute('href') === 'css/dark-theme.css') {
    themeLink.setAttribute('href', 'css/app.css');

    // Change the icons
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else { // Otherwise, change it to dark
    themeLink.setAttribute('href', 'css/dark-theme.css');

    // Change the icons
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

function blurActiveElement() {
    // Blur the active element (the button)
    document.activeElement.blur();
}