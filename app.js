window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hideLoader';
});

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const body = document.body;

const theme = localStorage.getItem('theme');

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
};
lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};

const jokeEl = document.getElementById('jokeOutput');
const getJoke = document.getElementById('getJoke');

getJoke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const jokeResult = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    });
    const joke = await jokeResult.json();
    jokeEl.innerHTML = joke.joke;
}
