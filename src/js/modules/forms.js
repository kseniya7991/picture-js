// import changeModalState from "./changeModalState";
// import checkNumInputs from "./checkNumInputs";
// import clearCalcForm from "./clearCalcForm";

const forms = (state) => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll('.form > input');

  const message = {
    loading: 'Загружаем данные...',
    success: "Спасибо! Скоро с Вами свяжемся.",
    fail: "Что-то пошло не так. Повторите попытку.",
    spinner: 'assets/img/loading.gif',
    successImg: 'assets/img/success.png',
    failImg: 'assets/img/fail.png',
  };

  const server = {
    design: 'assets/design.php',
    question: 'assets/question.php',
  };


  


  //Отправление запроса на сервер
  const postData = async (url, data) => {
    statusText.textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  //Очистка инпутов
  const clearInputs = () => {
    let newState = { form: 0, width: "", height: "", type: "tree" };
    changeModalState(newState);
    inputs.forEach((el) => {
      el.value = "";
    });
  };


  // Обработка формы
   form.forEach((el) => {
    el.addEventListener("submit", (e) => {
      e.preventDefault();

      // Динамический путь сервера
      let pathApi;
      el.closest('.popup-design') ? pathApi = server.design : pathApi = server.question;


      // Исчезание формы после нажатии кнопки submit
      el.classList.add("animated", "fadeOutUp")
      setTimeout(() => {
        el.style.display = "none";
      },400)

      // Блок со статусом отправки формы (вместо самой формы)
      let statusMessage = document.createElement("div");
      let statusText = document.createElement("p");
      statusMessage.classList.add("status", "animated", "fadeInUp");
      statusText.textContent = message.loading;
      el.parentNode.appendChild(statusMessage);
      statusMessage.appendChild(statusText);

      // Изображение статуса отправки формы
      let statusImg = document.createElement('img')
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add("status__img");
      statusMessage.appendChild(statusImg);


      const formData = new FormData(el);

      if (el.getAttribute("data-calc") === "end") {
        setTimeout(() => {
          const endCalcForm = document.querySelector(".popup_calc_end");
          endCalcForm.classList.remove("popup_opened");
          document.body.classList.remove("modal-open");
        }, 1000);

        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData(pathApi, formData)
        .then((res) => {
          console.log(res);
          statusText.textContent = message.success;
          statusImg.setAttribute('src', message.successImg);
        })
        .catch(() => {
          statusText.textContent = message.fail;
          statusImg.setAttribute('src', message.failImg);
        })
        .finally(() => {
          //clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            statusImg.remove();
            el.classList.remove("fadeOutUp")
            el.classList.add("fadeInUp")
            el.style.display = "block";
          }, 5000);
        });
    });
  });
};

export default forms;
