import forms from "./modules/forms.js";
import modals from "./modules/modals.js";
import pageEffects from "./modules/pageEffects.js";
import sliders from "./modules/sliders";
import mask from "./modules/mask";
import checkInputs from "./modules/checkInputs";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    modals();
    pageEffects();
    forms();
    sliders(".main-slider-item", "vertical");
    sliders(
        ".feedback-slider-item",
        "horizontal",
        ".main-prev-btn",
        ".main-next-btn"
    );
    mask('[name="phone"]');
    checkInputs('[name="name"]');
    checkInputs('[name="message"]');
});
