// /*=============== SHOW MODAL ===============*/
// const showModal = (openButton, modalContent) =>{
//   const openBtn = document.getElementById(openButton),
//   modalContainer = document.getElementById(modalContent)
  
//   if(openBtn && modalContainer){
//       openBtn.addEventListener('click', ()=>{
//           modalContainer.classList.add('show-modal')
//       })
//   }
// }
// showModal('open-modal','modal-container')

// /*=============== CLOSE MODAL ===============*/
// const closeBtn = document.querySelectorAll('.close-modal')

// function closeModal(){
//   const modalContainer = document.getElementById('modal-container')
//   modalContainer.classList.remove('show-modal')
// }
// closeBtn.forEach(c => c.addEventListener('click', closeModal))



const modalBtns = document.querySelectorAll('.modal__button');

const modalViews = document.querySelectorAll('.modal__container');
const modalClose = document.querySelectorAll('.close-modal');


let modal = function (modalClick) {
  modalViews[modalClick].classList.add('show-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach(mc => {
  mc.addEventListener('click', () => {
    modalViews.forEach(mv => {
      mv.classList.remove('show-modal')
    })
  })
})