const pageEffects = () => {
    const giftBtn =  document.querySelector('.fixed-gift');

    // Подергивание подарка при наведении
    function handleHoverGift(isHover) {
        if(isHover) {
            giftBtn.classList.add('animated', "swing")
        } else {
            giftBtn.classList.remove('animated', "swing")
        }
      }
  
    giftBtn.addEventListener('mouseover' , () => {handleHoverGift(true) })
    giftBtn.addEventListener('mouseout' , () => {handleHoverGift(false) })
};

export default pageEffects;