const modalOverlay = document.querySelector('.modal-overlay');
<<<<<<< HEAD
const cards = document.querySelectorAll('.card');

// Abrir modal
for (let card of cards) {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute('id');
    modalOverlay.classList.add("active");
    modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
  });
}

// Fechar modal
document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector('iframe').src = ``

});


=======
const cards = document.querySelectorAll('.card')

// Lista, reconhece o evento de click e abre o modal a partir dele.
for (let card of cards) {
  card.addEventListener("click", function(){
    const video_id = card.getAttribute("id")
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_id}`
  })
}

// Responsável por ouvir o evento de clock e fechar o modal.
document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})
>>>>>>> 2257f710e5d538228cfe135063fd8b9e4d1f5d4b
