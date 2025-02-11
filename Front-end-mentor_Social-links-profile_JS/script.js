function SwitchImg(img1, img2) {
    SetImgAttributes(img1);
    SetImgAttributes(img2);
}

// set attributes SRC and ALT for <img> elements
function SetImgAttributes(key) {
    const imgKey = attrImgs[key];
    const img = imgKey.elt;
    img.setAttribute("src", imgKey.src);
    img.setAttribute("alt", imgKey.alt);
    if ("title" in imgKey)
        img.setAttribute("title", imgKey.title);
}

// toggle darkMode on/off given state(bool)
const html = document.documentElement;
function toggleDarkMode(state) {
    html.classList.toggle("darkMode", state);
    html.classList.contains("darkMode") ? SwitchImg("sun", "fat-carrot") : SwitchImg("moon", "carrot");
}



const body = document.body;

const header = document.createElement("header");
const main = document.createElement("main");

const btnHome = document.createElement("a");
const logoHome = document.createElement("img");

const btnColorMode = document.createElement("a");
const logoColorMode = document.createElement("img");

const card = document.createElement("article");
card.classList.add("card");

const imgAvatar = document.createElement("img");
imgAvatar.classList.add("avatar");

const h1 = document.createElement("h1");
h1.textContent = "Simon Cassan";
const h2 = document.createElement("h2");
h2.textContent = "Paris, France";
const paragraph = document.createElement("p");
paragraph.textContent = "\"Front-end developper and avid reader.\"";


const attrImgs = {
    "home":
    {
        "src": "./images/home.png",
        "alt": "Home icon",
        "elt": logoHome,
        "title": "Go to homepage"
    },
    "sun": {
        "src": "./images/sun.png",
        "alt": "Light mode icon",
        "elt": logoColorMode,
        "title": "Light mode"
    },
    "moon": {
        "src": "./images/moon.png",
        "alt": "Dark mode icon",
        "elt": logoColorMode,
        "title": "Dark mode"
    },
    "carrot": {
        "src": "./images/carrot.png",
        "alt": "Carrot avatar",
        "elt": imgAvatar
    },
    "fat-carrot": {
        "src": "./images/fat-carrot.png",
        "alt": "Chubby carrot avatar",
        "elt": imgAvatar
    }
}

const attrLinks = {
    "GitHub": "https://github.com/SimonCassan",
    "Frontend Mentor": "https://www.frontendmentor.io/profile/SimonCassan",
    "LinkedIn": "#",
    "BlueSky": "#",
    "Instagram": "#",
};

SetImgAttributes("home");
SetImgAttributes("sun");
SetImgAttributes("carrot");

btnHome.setAttribute("href", "#");
btnColorMode.setAttribute("href", "#");


body.appendChild(header)
header.appendChild(btnHome);
btnHome.appendChild(logoHome);
header.appendChild(btnColorMode);
btnColorMode.appendChild(logoColorMode);
body.appendChild(main);
main.appendChild(card);
card.appendChild(imgAvatar);
card.appendChild(h1);
card.appendChild(h2);
card.appendChild(paragraph);


// fetch user color mode choice - send true or false
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
toggleDarkMode(useDark.matches);
// start a listening event for change in user choice, and in that case, send a true or false signal
useDark.addEventListener("change", (evt) => toggleDarkMode(evt.matches));
// force color mode switch when clicking on button
btnColorMode.addEventListener("click", () => {
    html.classList.toggle("darkMode");
    html.classList.contains("darkMode") ? SwitchImg("sun", "fat-carrot") : SwitchImg("moon", "carrot");
});


// create social link blocks
for (const key in attrLinks) {
    let btn;
    btn = document.createElement("a");
    btn.setAttribute("href", attrLinks[key]);
    btn.setAttribute("target", "_blank");
    btn.textContent = key;
    btn.classList.add("btn-social");
    card.appendChild(btn);
}

// create hover blocks link
const btnsSocial = document.querySelectorAll(".btn-social");
for (const btnSocial of btnsSocial) {
    const btnText = btnSocial.getAttribute("href");
    const hoverDisplayLink = document.createElement("p");
    hoverDisplayLink.classList.add("displayLink");
    hoverDisplayLink.textContent = btnText;
    btnSocial.append(hoverDisplayLink);
}

// mouseover on links
for (const btnSocial of btnsSocial) {
    btnSocial.addEventListener("mouseover", () => {
        const link = btnSocial.querySelector(".displayLink");
        link.classList.add("active");
    })
    btnSocial.addEventListener("mouseout", () => {
        const link = btnSocial.querySelector(".displayLink");
        link.classList.remove("active");
    })
}