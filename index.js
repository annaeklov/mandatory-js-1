/*HEADER*/

let h1header = document.querySelector("header h1");
h1header.textContent = "Fruits & Vegetables Corp";

/*LIST and A-TAG*/

let aTag = document.querySelector("header ul:last-child li:last-child a");
aTag.textContent = "Vegetables";
aTag.setAttribute("href", "#vegetables");

/*SWAP CONTACT AND ABOUT*/

let mainSection = document.getElementById("main");
let aboutSection = document.getElementById("about");
let contactSection = document.getElementById("contact");
mainSection.insertBefore(aboutSection, contactSection);

/*ABOUT*/

aboutSection.innerHTML = "";

let h2About = document.createElement("h2");
aboutSection.appendChild(h2About);
h2About.textContent = "About"

let pAbout = document.createElement("p");
aboutSection.appendChild(pAbout);
pAbout.textContent = "We're the best in fruits & vegetables"

/*CONTACT*/

let pContact = document.querySelector("#contact p");
let h2Contact = document.createElement("h2");
contactSection.appendChild(h2Contact);
contactSection.insertBefore(h2Contact, pContact);
h2Contact.textContent = "Contact";

/*TABLE*/

let trTable = document.querySelector("thead tr");
let tdTable = document.querySelectorAll("thead td");

for (let i = 0; i < tdTable.length; i++) {
    let text = tdTable[i].innerHTML;
    let thTable = document.createElement("th");
    trTable.replaceChild(thTable, tdTable[i]);
    thTable.textContent = text;
}

/*INCLUDE CSS FILE*/

let head = document.querySelector("head");
let cssLink = document.createElement("link");

cssLink.rel = "stylesheet";
cssLink.type = "text/css";
cssLink.href = "main.css";

head.appendChild(cssLink);

/*CHANGE HEAD TITLE*/

let titleHead = document.querySelector("head title");
titleHead.textContent = "Fruits & Vegetables Corp";