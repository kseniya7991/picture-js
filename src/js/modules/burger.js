const burger = (selectorBurger, selectorMenu) => {
    const burger = document.querySelector(selectorBurger);
    const mobMenu = document.querySelector(selectorMenu);

    mobMenu.style.display = "none";

    burger.addEventListener("click", () => {
        if (mobMenu.style.display == "none" && window.screen.availWidth < 993) {
            mobMenu.style.display = "block";
        } else {
            mobMenu.style.display = "none";
        }
    });

    window.addEventListener("resize", () => {
        if (window.screen.availWidth > 993) {
            mobMenu.style.display = "none";
        }
    });
};

export default burger;
