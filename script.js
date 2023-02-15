const paragraph = document.querySelectorAll("h1, h2 , h3 ,h4 , h5 , h6");
console.log(paragraph);

let bgc = document.body.style.backgroundColor = "#ff0000";

const oL = document.getElementById("optionsList");
const parent = oL.parentNode;
const child = oL.childNodes;
console.log(parent);
console.log(child);
console.log(oL);

const change = document.getElementById("testParagraph");
console.log(change);
change.innerHTML = "This is a paragraph";

const header = document.querySelector(".main-header");
header.style.backgroundColor = "#ff0000";
console.log(header);
let nodes = header.childNodes;
let newClass = nodes[(0, 1)].classList.add("nav-item");
console.log(nodes);

let title = document.querySelector(".section-title");
title.classList.remove("section-title");
console.log(title);
