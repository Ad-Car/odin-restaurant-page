import "./styles.css";

import { homePage } from "./home-page.js";
import { menu } from "./menu.js";

const homeButton = document.getElementById("home");

const menuButton = document.getElementById("menu");

const aboutButton = document.getElementById("about");

const contactButton = document.getElementById("contact");


homeButton.addEventListener("click", ()=> {console.log("home clicked");
});

menuButton.addEventListener("click", ()=> {console.log("menu clicked");
});

aboutButton.addEventListener("click", ()=> {console.log("about clicked");
});

contactButton.addEventListener("click", ()=> {console.log("contact clicked");
});
homePage();


