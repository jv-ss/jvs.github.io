

const heading = document.querySelector("h1");
heading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
// });

const img = document.querySelector('img');
img.onclick = () => {
    const src = img.getAttribute('src');

    if (src === 'images/firefox.svg') {
        img.setAttribute('src', 'images/firefox2.png')
    } else {
        img.setAttribute('src', 'images/firefox.svg')
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName()
}

function setUserName() {
    const myName = prompt("Please enter your name.");

    if (!myName)
        setUserName()
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem('name'))
    setUserName()
else {
    const username = localStorage.getItem('name')
    myHeading.textContent = `Mozilla is cool, ${username}`;
}


