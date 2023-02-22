// console.log("test: Hello team!!!")
(() => {
    const refs = {
      openModalBtnMenu: document.querySelector("[data-mobile-open]"),
      closeModalBtnMenu: document.querySelector("[data-mobile-close]"),
      closeModalBtnMenu1: document.querySelector("[data-mobile-close-link1]"),
      closeModalBtnMenu2: document.querySelector("[data-mobile-close-link2]"),
      closeModalBtnMenu3: document.querySelector("[data-mobile-close-link3]"),
      closeModalBtnMenu4: document.querySelector("[data-mobile-close-link4]"),
      closeModalBtnMenu5: document.querySelector("[data-mobile-close-link5]"),
      modalMenu: document.querySelector("[data-mobile]"),
    };
  
    refs.openModalBtnMenu.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu1.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu2.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu3.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu4.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu5.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalMenu.classList.toggle("mobile--open");
    }
  })();