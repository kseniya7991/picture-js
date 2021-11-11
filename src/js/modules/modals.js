const modals = () => {
  let timeOut;

  function bindModal(
    triggerSelector,
    popupSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      close = document.querySelectorAll(closeSelector),
      windows = document.querySelectorAll("[data-]");

    if (trigger.length > 1) {
      trigger.forEach((item) => {
        item.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }

          windows.forEach((el) => {
            el.classList.remove("popup_opened");
          });

          popup.classList.add("popup_opened");
          document.body.classList.add("modal_open");
        });
      });
    } else {
      trigger[0].addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });

        popup.classList.add("popup_opened");
        document.body.classList.add("modal_open");
      });
    }

    popup.addEventListener("click", (e) => {
      if (e.target == e.currentTarget && closeClickOverlay) {
        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });
        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal_open");
      }
    });

    close.forEach((el) => {
      el.addEventListener("click", (e) => {
        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });
        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal-open");
      });
    });
  }

  console.log(!document.body.classList.contains("modal-open"));

  function showModalByTime(selector, time) {
    timeOut = setTimeout(() => {
      let display;

      document.querySelectorAll("[data-modal]").forEach((el) => {
        if (el.classList.contains("popup_opened")) {
          display = "block";
        }
      });
      if (!display) {
        document.body.classList.add("modal-open");
        document
          .querySelector(`${selector}[data-modal]`)
          .classList.add("popup_opened");
      }
    }, time);
  }

  showModalByTime(".popup-consultation", 6000);

  bindModal(".button-design", ".popup-design", ".popup-design", ".popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation",
    ".popup-close"
  );
};

export default modals;
