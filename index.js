// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");
// function opentab(tabname) {
//     for (tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }
//     for (tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }
// var splashScreen = document.querySelector(".splash");
// splashScreen.addEventListener("click", () => {
//     splashScreen.style.opacity = 0;
//     setTimeout(() => {
//         splashScreen.classList.add("hidden");
//     }, 6100);

//     const output = document.getElementById("txt");
//     let i = 0;
//     let currentPara = 0;
//     const x = `Hi, I\'m <nl>
// Krish Nalam`;

//     const splitted = x.split("<nl>");

//     splitted.forEach(function (text, index) {
//         const p = document.createElement("p");
//         output.appendChild(p);
//         if (index === 1) {
//             p.className = "nameColor";
//         }
//     });
//     const paras = output.querySelectorAll("p");

//     const intervalId = setInterval(function () {
//         paras[currentPara].innerHTML += splitted[currentPara][i];
//         i++;
//         if (i === splitted[currentPara].length) {
//             currentPara++;
//             i = 0;
//             if (currentPara === splitted.length) {
//                 clearInterval(intervalId);
//             }
//         }
//     }, 150);
// });
