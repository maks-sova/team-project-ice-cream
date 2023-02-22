(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-natali-modal-open]"),
      closeModalBtn: document.querySelector("[data-natali-modal-close]"),
      modal: document.querySelector("[data-natali-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal--open");
    }
  })();