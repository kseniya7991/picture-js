import { getData } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener("click", function () {
        getData(`http://localhost:3000/styles`)
            .then((res) => {
                createCards(res);
                this.remove();
            })
            .catch((error) => {
                console.log(error);
            });
    });

    function createCards(response) {
        console.log(response);
        response.forEach((item) => {
            const { src, title, link } = item;
            const card = document.createElement("div");
            card.classList.add(
                "animated",
                "fadeInUp",
                "col-sm-3",
                "col-sm-offset-0",
                "col-xs-10",
                "col-xs-offset-1"
            );
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;
