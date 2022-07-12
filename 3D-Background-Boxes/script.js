console.log("3D Background Boxes");

const boxes = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  boxes.classList.toggle("big");
});

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      // console.log(box);
      boxes.appendChild(box);
    }
  }
}

createBoxes();
