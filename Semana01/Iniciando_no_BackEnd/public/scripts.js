const modalOverlay = document.querySelector('.modal-overlay');
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
