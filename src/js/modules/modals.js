const modals = () => {
  let timeOut;

  function bindModal(
    triggerSelector,
    popupSelector,
    closeSelector,
    closeClickOverlay = true,
    deleteElement = false
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      close = document.querySelectorAll(closeSelector),
      windows = document.querySelectorAll("[data-]"),
      fixedGift = document.querySelector(".fixed-gift"),
      scroll = calcScroll();

    console.log(fixedGift);

    function handleGiftMargin(opened) {
      if (opened) {
        fixedGift.style.right = `calc(2rem + ${scroll}px)`;
      } else {
        fixedGift.style.right = `2rem`;
      }
    }

    function deleteElementByClickPopup() {
      if (deleteElement) {
        trigger[0].style.display = "none";
        console.log(deleteElement);
      }
    }

    if (trigger.length > 1) {
      trigger.forEach((item) => {
        item.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }

          windows.forEach((el) => {
            el.classList.remove("popup_opened");
          });

          deleteElementByClickPopup();
          popup.classList.add("popup_opened");
          document.body.classList.add("modal_open");
          document.body.style.marginRight = `${scroll}px`;
          handleGiftMargin(true);
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

        deleteElementByClickPopup();
        popup.classList.add("popup_opened");
        document.body.classList.add("modal_open");
        document.body.style.marginRight = `${scroll}px`;
        handleGiftMargin(true);
      });
    }

    popup.addEventListener("click", (e) => {
      if (e.target == e.currentTarget && closeClickOverlay) {
        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });
        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal_open");
        document.body.style.marginRight = `0px`;
        handleGiftMargin(false);
      }
    });

    close.forEach((el) => {
      el.addEventListener("click", (e) => {
        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });

        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal-open");
        document.body.style.marginRight = `0px`;
        handleGiftMargin(false);
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
        let scroll = calcScroll();
        let fixedGift = document.querySelector(".fixed-gift");
        fixedGift.style.right = `calc(2rem + ${scroll}px)`;
        document.body.style.marginRight = `${scroll}px`;
        document
          .querySelector(`${selector}[data-modal]`)
          .classList.add("popup_opened");
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  showModalByTime(".popup-consultation", 6000);

  bindModal(".button-design", ".popup-design", ".popup-design", ".popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation",
    ".popup-close"
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift", ".popup-close", true);
};

export default modals;
