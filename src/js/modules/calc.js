const calc = (size, mat, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        matblock = document.querySelector(mat),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

    let sum = 0;
    const calcFunc = () => {
        sum = Math.round(
            +sizeBlock.value * +matblock.value + +optionsBlock.value
        );

        if (sizeBlock.value == "" || matblock.value == "") {
            resultBlock.textContent =
                "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    function setName(block) {
        if (block.getAttribute("name")) return;

        let id = block.getAttribute("id");
        if (id) {
            block.setAttribute("name", id);
        }
    }

    setName(sizeBlock);
    setName(matblock);
    setName(optionsBlock);

    sizeBlock.addEventListener("change", calcFunc);
    matblock.addEventListener("change", calcFunc);
    optionsBlock.addEventListener("change", calcFunc);
    promocodeBlock.addEventListener("input", calcFunc);
};

export default calc;
