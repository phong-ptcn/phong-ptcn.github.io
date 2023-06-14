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

// Array of random quotes
const quotes = [
  "Nếu anh biết có một ngày anh yêu em như thế thì anh nhất định sẽ yêu em từ cái nhìn đầu tiên <br> - Yêu em từ cái nhìn đầu tiên, Cố Mạn",
  "Chúng ta lựa chọn độc thân không phải vì tình yêu không quan trọng, mà vì nó rất quan trọng nên không thể vội vàng. <br> - Vẻ đẹp của sự cô đơn, thầy Giác Minh Luật -",
  "Yêu hay ghét tôi, tôi đều thích. Nếu em yêu tôi, tôi sẽ luôn trong trái tim em. Nếu em ghét tôi, tôi sẽ luôn trong tâm trí em. <br> - William Shakespeare",
  "Trời còn có bữa sao quên mọc, <br> Tôi chẳng đêm nào chẳng nhớ em. <br> - Đêm Sao Sáng, Nguyễn Bỉnh -",
  "Thôn Đoài ngồi nhớ thôn Đông, <br>Một người chín nhớ mười mong một người. <br> Gió mưa là bệnh của giời, <br>Tương tư là bệnh của tôi yêu nàng. <br> - Tương Tư, Nguyễn Bính -",
  "Cuộc đời anh vốn là một đường thẳng, chỉ vì gặp em mà rẽ ngang. <br> - Mãi Mãi Là Bao Xa, Diệp Lạc Vô Tâm -",
  "Tôi cả đời này đều kiên định theo chủ nghĩa duy vật. Chỉ có em, tôi mới hy vọng có kiếp sau. - Chu Tổng Lý",
  "Vẻ đẹp không nằm ở đôi má hồng của người thiếu nữ mà ở trong đôi mắt của kẻ si tình. <br> - Immanuel Kant - ",
  "Sơn hữu mộc hề, mộc hữu chi <br> Tâm duyệt quân hề, quân bất tri.",
  "Hiểu khán thiên sắc mộ khán vân <br> Hành dã tư quân, toạ dã tư quân.<br> - Đường Bá Hổ -"

];

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[randomIndex];
}

// Add event listener to generate a random quote on page load
window.onload = generateRandomQuote;

// Add click event listener to the button
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateRandomQuote);


// rotate button
const rotateIcon = document.getElementById("refresh-icon");
rotateIcon.addEventListener("click", () => {
  rotateIcon.classList.add("rotate");

  setTimeout(() => {
    rotateIcon.classList.remove("rotate")
  }, 1000)
})
