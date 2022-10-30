const filter = () => {
    const menu = document.querySelector(".portfolio-menu"),
        menuItems = menu.querySelectorAll("li"),
        btnAll = menu.querySelector(".all"),
        btnLovers = menu.querySelector(".lovers"),
        btnChef = menu.querySelector(".chef"),
        btnGirl = menu.querySelector(".girl"),
        btnGuy = menu.querySelector(".guy"),
        btnGrandM = menu.querySelector(".grandmother"),
        btnGrandD = menu.querySelector(".granddad"),
        wrapper = document.querySelector(".portfolio-wrapper"),
        contentAll = wrapper.querySelectorAll(".all"),
        contentGirl = wrapper.querySelectorAll(".girl"),
        contentGuy = wrapper.querySelectorAll(".guy"),
        contentLovers = wrapper.querySelectorAll(".lovers"),
        contentChef = wrapper.querySelectorAll(".chef"),
        noPortfolio = document.querySelector(".portfolio-no"),
        allBtns = [
            ".all",
            ".lovers",
            ".chef",
            ".girl",
            ".guy",
            ".grandmother",
            ".granddad",
        ];

    const setEventListener = (btn, content) => {
        btn.addEventListener("click", () => {
            typeFilter(content);
        });
    };

    const typeFilter = (filter) => {
        contentAll.forEach((item) => {
            item.style.display = "none";
            item.classList.remove("animated", "fadeIn");
        });

        noPortfolio.style.display = "none";
        noPortfolio.classList.remove("animated", "fadeIn");

        if (filter) {
            filter.forEach((item) => {
                item.style.display = "block";
                item.classList.add("animated", "fadeIn");
            });
        } else {
            noPortfolio.style.display = "block";
            noPortfolio.classList.add("animated", "fadeIn");
        }
    };

    setEventListener(btnAll, contentAll);
    setEventListener(btnLovers, contentLovers);
    setEventListener(btnChef, contentChef);
    setEventListener(btnGirl, contentGirl);
    setEventListener(btnGuy, contentGuy);
    setEventListener(btnGrandM, "");
    setEventListener(btnGrandD, "");

    menu.addEventListener("click", (e) => {
        let target = e.target;
        if (target && target.tagName == "LI") {
            menuItems.forEach((item) => {
                item.classList.remove("active");
            });
            target.classList.add("active");
        }
    });
};

export default filter;
