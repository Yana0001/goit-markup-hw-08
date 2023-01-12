(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-menu]"),
    closeModalBtn: document.querySelector("[data-close-menu]"),
    modal: document.querySelector("[data-menu-container]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", testModal);
  function testModal() {
    console.log("click occured")
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-closed");
  }
  })();