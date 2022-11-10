'use strict';

let buttons = document.querySelectorAll(".button");
let submitButton = document.querySelector(".submit-button");
let afterDiv = document.querySelector(".after");
let beforeDiv = document.querySelector(".before");
let selectedLabel = document.querySelector(".selected-number");

let nowSelected;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", event => {
        nowSelected = i + 1;
        for(let j = 0; j < buttons.length; j++){
            if( j == i ){
                buttons[j].classList.add("is_click");
                buttons[j].classList.remove("is_not_click");
            }
            else{
                buttons[j].classList.add("is_not_click");
                buttons[j].classList.remove("is_click");
            }
        }
    });
}

submitButton.addEventListener("click", event => {
    if( nowSelected != undefined ){
        afterDiv.classList.remove("is_not_view");
        beforeDiv.classList.add("is_not_view");
        selectedLabel.textContent = "You selected " + nowSelected + " out of 5";
    }
});