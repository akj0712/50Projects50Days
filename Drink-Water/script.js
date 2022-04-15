console.log("Drink Water");

const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("litres");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCups();

smallCups.forEach((cup, idx) => {
    // console.log(idx);
    cup.addEventListener("click", () => {
        highlightCups(idx);
    });
});

function highlightCups(idx) {
    if (
        smallCups[idx].classList.contains("full") &&
        !smallCups[idx].nextElementSibling.classList.contains("full")
    ) {
        idx--;
    }
    // console.log(idx);
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });

    updateBigCups();
}

function updateBigCups() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    // console.log(totalCups);

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 300}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${(2000 - 250 * fullCups) / 1000}L`;
    }
}
