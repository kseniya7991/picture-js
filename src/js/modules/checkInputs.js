const checkInputs = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach((input) => {
        input.addEventListener("keypress", function (e) {
            if (e.key.match(/[^а-яё 0-9]/gi)) {
                e.preventDefault();
            }
        });

        input.addEventListener("input", function () {
            const reg = /[a-z]*/gi;
            input.value = input.value.replace(reg, "");
        });
    });
};

export default checkInputs;
