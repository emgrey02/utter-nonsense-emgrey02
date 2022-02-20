const toggle = document.querySelector('.toggle__input');
const theme = document.querySelector('html');

function switchTheme(e) {
    theme.classList.remove('theme-light');
    theme.classList.remove('theme-dark');
    
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        toggle.checked = true;
        theme.classList.add('theme-dark');
    } else {
        localStorage.setItem('theme', 'light');
        toggle.checked = false;
        theme.classList.add('theme-light');
    }
}

toggle.addEventListener('change', switchTheme);

function detectColorScheme() {
    let defaultTheme = 'light';

    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') == 'dark') {
            defaultTheme = 'dark'
            toggle.checked = true;
            theme.classList.remove('theme-light');
            theme.classList.add('theme-dark');
        }
    } else if (!window.matchMedia) {
        return false;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        defaultTheme = 'dark';
        toggle.checked = true;
        theme.classList.remove('theme-light');
        theme.classList.add('theme-dark');
    }
}

detectColorScheme();