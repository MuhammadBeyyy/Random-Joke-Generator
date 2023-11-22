//fetch API
const jokeContainer = document.getElementById('joke')
const button = document.getElementById('btn')
const url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'


let getJoke = () => {
    fetch(url)
    .then(response => response.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`
    })
    .catch((err) => {
        console.warn(err.message)
    })
}

button.addEventListener('click',getJoke)
getJoke()


