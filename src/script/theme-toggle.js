const content = document.querySelector('.app');

const storageKey = 'theme-preference';

const onClick = (e) => {
    theme.value = e.target.classList[1];

    setPreference();
}

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    } else {
        return 'system';
    }
}

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
}

const reflectPreference = () => {
    content.classList = `app ${theme.value}`;
    document.querySelector('.theme-toggle')?.setAttribute('aria-label', theme.value);
}

const theme = {
    value: getColorPreference(),
}

reflectPreference();

window.onload = () => {
    reflectPreference();

    document.querySelector('.theme-toggle')?.addEventListener('click', onClick);
}

//sync w system changes
// window
//     .matchMedia('(prefers-color-scheme: dark)')
//     .addEventListener('change', ({matches:isDark}) => {
//         if (theme.value === 'system') {
//             return;
//         } else {
//             theme.value = isDark ? 'dark' : 'light';
//         }
//         setPreference();
//     })