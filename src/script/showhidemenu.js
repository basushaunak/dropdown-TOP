export function showHideMenu(element){
    if (element.checkVisibility()){
        element.style.display = "none";
    }else{
        element.style.display = "flex";
    }
}