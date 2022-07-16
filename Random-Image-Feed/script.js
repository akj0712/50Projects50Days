console.log("Random Image Feed");

const container = document.querySelector(".container");

const unsplashUrl = "https://source.unsplash.com/random/";

const rows = 5;

for (let i = 0; i < rows * 3; ++i) {
  const image = document.createElement("img");
  image.src = `${unsplashUrl}${getRandomSize()}`;
  container.appendChild(image);
}
// *console.log(getRandomSize());

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
