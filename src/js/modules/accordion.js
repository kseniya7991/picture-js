const accordion = () => {
    const accords = document.querySelectorAll("#accordion");
    accords.forEach((item) => {
        initAccordion(item);
    });
};

const initAccordion = (accord) => {
    const triggers = accord.querySelectorAll(".accordion-heading");
    triggers.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (this.classList.contains("active")) {
                closeAllAccord(triggers);
            } else {
                closeAllAccord(triggers);
                this.classList.add("active");
                this.nextElementSibling.classList.add("active");
                this.nextElementSibling.style.maxHeight =
                    this.nextElementSibling.scrollHeight + 80 + "px";
            }
        });
    });
};

const closeAllAccord = (triggers) => {
    triggers.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.maxHeight = "0px";
        btn.nextElementSibling.classList.remove("active");
    });
};

export default accordion;
