console.log("Dad-Jokes");

const APIURL = "https://icanhazdadjoke.com";
const jokesEl = document.getElementById("jokes");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
    generateJoke();
});

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const resp = await fetch(APIURL, config);
    const respData = await resp.json();
    // console.log(respData);

    jokesEl.innerHTML = respData.joke;
}
