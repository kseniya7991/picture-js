const modals = () => {
  let timeOut;
  
  // Нажата ли хоть одна кнопка на сайте
    let btnPressed = false;

  function bindModal(
    triggerSelector,
    popupSelector,
    closeSelector,
    deleteElement = false,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      close = document.querySelectorAll(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      fixedGift = document.querySelector(".fixed-gift"),
      scroll = calcScroll();

    function handleGiftMargin(opened) {
      if (opened) {
        fixedGift.style.right = `calc(2rem + ${scroll}px)`;
      } else {
        fixedGift.style.right = `2rem`;
      }
    }

    trigger.forEach((item) => {
        item.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }

          btnPressed = true;

          windows.forEach((el) => {
            el.classList.remove("popup_opened");
            el.classList.add('animated', 'fadeIn')
          });

          if (deleteElement) {
            fixedGift.remove()
          }
          
          popup.classList.add("popup_opened");
          document.body.classList.add("modal_open");
          document.body.style.marginRight = `${scroll}px`;
          handleGiftMargin(true);
        });
      });
    
    popup.addEventListener("click", (e) => {
      if ((e.target == e.currentTarget) && closeClickOverlay) {
        windows.forEach((el) => {
          el.classList.remove("popup_opened");
        });
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


        document.body.classList.remove("modal_open");
        document.body.style.marginRight = `0px`;
        handleGiftMargin(false);
      });
    });
  }

  function showModalByTime(selector, time) {
    timeOut = setTimeout(() => {
      let display;

      document.querySelectorAll("[data-modal]").forEach((el) => {
        if (el.classList.contains("popup_opened")) {
          display = "block";
        }
      });
      if (!display) {
        document.body.classList.add("modal_open");
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

  showModalByTime(".popup-consultation", 60000);

  function showByScroll(selector) {
    window.addEventListener('scroll', () => {
      if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
        // Исккуственно вызываем клик
        document.querySelector(selector).click();
      }
    })
  }

  bindModal(".button-design", ".popup-design", ".popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-close"
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-close", true);
  showByScroll('.fixed-gift');
};

export default modals;
