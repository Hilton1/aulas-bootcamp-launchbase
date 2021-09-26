const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

// Abrir modal
for (let card of cards) {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute('id');
    window.location.href = `/video?id=${videoId}`;
  });
}
