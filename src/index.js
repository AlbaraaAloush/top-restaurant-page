import {createHome} from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import "./styles.css";

const contentDiv = document.getElementById("content");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", switchTabs));


function switchTabs(e){
    contentDiv.replaceChildren();

    if (e.target.id === "home") {
      createHome();
    } else if (e.target.id === "menu") {
      createMenu();
    } else if (e.target.id === "about"){
      createAbout();
    }
};


createHome();