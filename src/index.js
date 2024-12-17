import "./styles.css";

import { homePage } from "./home-page.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import { clearContent } from "./clear-content.js";

const homeButton = document.getElementById("home");

const menuButton = document.getElementById("menu");

const aboutButton = document.getElementById("about");

const contactButton = document.getElementById("contact");


homeButton.addEventListener("click", ()=> {console.log("home clicked");
	clearContent();
	homePage();
});

menuButton.addEventListener("click", ()=> {console.log("menu clicked");
	clearContent();
	menu();
});

aboutButton.addEventListener("click", ()=> {console.log("about clicked");
	clearContent();
	about();
});

contactButton.addEventListener("click", ()=> {console.log("contact clicked");
	clearContent();
	contact();
});

homePage();


