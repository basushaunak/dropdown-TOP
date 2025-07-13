import {showHideMenu} from "./script/showhidemenu.js";
import "./css/styles.css";

document.querySelector("#burger").addEventListener("click",()=>{
    showHideMenu(document.querySelector("#hamburger-menu"));
})

document.querySelector("#hamburger-menu").addEventListener("click",(e)=>{
    console.log(e.target.id);
    showHideMenu(document.querySelector("#hamburger-menu"));
})