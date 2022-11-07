import forms from "./modules/forms.js";
import modals from "./modules/modals.js";
import pageEffects from "./modules/pageEffects.js";
import sliders from "./modules/sliders";
import mask from "./modules/mask";
import checkInputs from "./modules/checkInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter.js";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";

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
    showMoreStyles(".button-styles", "#styles .row");
    calc("#size", "#material", "#options", ".promocode", ".calc-price");
    filter();
    pictureSize();
    accordion();
});
