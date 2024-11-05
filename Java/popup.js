// Meowing Greatness Enterprises - Why are you here?

const confirmModal = document.getElementById('confirm-balls');
const confirmMessage = document.getElementById('confirm-message');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
let confirmLink = null;

document.querySelectorAll('.confirm-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        confirmLink = link;
        confirmMessage.textContent = link.getAttribute('data-confirm');
        confirmModal.style.display = 'flex';
    });
});

confirmYes.addEventListener('click', () => {
    if (confirmLink) {
        window.location.href = confirmLink.href;
    }
    confirmModal.style.display = 'none';
});

confirmNo.addEventListener('click', () => {
    confirmModal.style.display = 'none';
});