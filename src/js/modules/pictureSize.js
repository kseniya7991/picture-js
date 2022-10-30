const pictureSize = () => {
    const wrapper = document.querySelector(".sizes-wrapper"),
        sizeBlocks = wrapper.querySelectorAll(".sizes-block");

    sizeBlocks.forEach((item) => {
        const img = item.querySelector("img");
        if (!img) return;

        const initSrc = img.getAttribute("src");

        item.addEventListener("mouseenter", () => {
            img.src = initSrc.slice(0, -4) + "-1.png";
            hideElems(item);
        });
        item.addEventListener("mouseleave", () => {
            img.src = initSrc;
            showElems(item);
        });
    });

    const hideElems = (elem) => {
        const items = elem.querySelectorAll("p:not(.sizes-hit)");
        items.forEach((item) => {
            item.style.opacity = "0";
        });
    };
    const showElems = (elem) => {
        const items = elem.querySelectorAll("p");
        items.forEach((item) => {
            item.style.opacity = "1";
        });
    };
};

export default pictureSize;
