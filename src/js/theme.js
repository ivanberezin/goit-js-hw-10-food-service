import localStorage from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const storageTheme = localStorage.load('theme');

setPrimalTheme();

function setPrimalTheme() {
  if (storageTheme == undefined) {
    refs.body.classList.add(Theme.LIGHT);
    localStorage.save('theme', Theme.LIGHT);
    refs.input.checked = false;
    return;
  }
}

addUserTheme();

function addUserTheme() {
  if (storageTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.input.checked = true;
    return;
  }
  refs.body.classList.add(Theme.LIGHT);
  refs.input.checked = false;
  return;
}

refs.input.addEventListener('change', switchTheme);

function switchTheme() {
  if (refs.input.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.save('theme', Theme.DARK);
    return;
  }
  refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.save('theme', Theme.LIGHT);
  return;
}
