console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[ data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');


darkMode.addEventListener("click", () => {
    bodyElement.classList.remove("button--light");
    bodyElement.classList.add("button--dark");
});

lightMode.addEventListener("click", () => {
    bodyElement.classList.remove("button--dark");
    bodyElement.classList.add("button--light");
});

toggleMode.addEventListener("click", () => {
    bodyElement.classList.toggle("button--dark");
});


