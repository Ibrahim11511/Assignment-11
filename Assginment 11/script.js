//pro=product منتج

let proCount = 1;

let increaseBtn = document.querySelector(".add");
let decreaseBtn = document.querySelector(".decrease");
let proCountBox = document.querySelector(".count");


decreaseBtn.addEventListener("click", () => {
    if (proCount > 1 && proCount <= 9) {
        proCount--;
        proCountBox.textContent = proCount;
    }
})

increaseBtn.addEventListener("click", () => {
    if (proCount >= 1 && proCount < 9) {
        proCount++;
        proCountBox.textContent = proCount;
    }
})

// let increaseBtns = document.querySelectorAll(".add");
// let decreaseBtns = document.querySelectorAll(".decrease");
// let proCountBoxs = document.querySelectorAll(".count");

// increaseBtns.forEach(increaseBtn => {
//     increaseBtn.addEventListener("click", () => {
//         if (proCount >= 1 && proCount < 9) {
//             proCount++;
//             proCountBoxs.textContent = proCount;
//             console.log("add " + proCount);
//         }
//     })
// });


// decreaseBtns.forEach(decreaseBtn => {
//     decreaseBtn.addEventListener("click", () => {
//         if (proCount > 1 && proCount <= 9) {
//             proCount--;
//             proCountBoxs.textContent = proCount;
//             console.log("neg " + proCount);
//         }
//     })
// });