import modals from "./modules/modals.js";
import pageEffects from './modules/pageEffects.js';
import sliders from './modules/sliders';

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modals();
  pageEffects();
  sliders('.main-slider-item', "vertical")
  sliders('.feedback-slider-item', "horizontal", ".main-prev-btn",".main-next-btn");
  console.log("hello");
});
