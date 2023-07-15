localStorage.getItem('theme')
  ? null
  : localStorage.setItem('theme', 'light_theme');

const theme = localStorage.getItem('theme'),
      themeSwitchers = document.querySelectorAll('input[name="toggle_theme_radio"]');

themeSwitchers.forEach(themeSwitcher => {
  if (themeSwitcher.id === theme) themeSwitcher.setAttribute('checked', '');
});

const formThemeToggle = document.forms.form_theme_toggle;

formThemeToggle.addEventListener('click', event => {
  if (event.target.closest('input[type="radio"]')) {
    const themeSwitcher = event.target.closest('input[type="radio"]');
    document.body.className = themeSwitcher.id;

    localStorage.setItem('theme', themeSwitcher.id);
  }
});