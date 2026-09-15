const modals = ['modal-software', 'modal-lowlevel', 'modal-network', 'modal-algo'];
let currentModalIndex = 0;

function openModal(modalId) {
    currentModalIndex = modals.indexOf(modalId);
    document.getElementById(modalId).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevents background scrolling
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto'; // Restores background scrolling
}

function changeModal(direction) {
    closeModal(modals[currentModalIndex]);
    currentModalIndex += direction;
    
    if (currentModalIndex < 0) currentModalIndex = modals.length - 1;
    if (currentModalIndex >= modals.length) currentModalIndex = 0;
    
    openModal(modals[currentModalIndex]);
}

// Close modal when clicking the dark background outside the content box
window.onclick = function(event) {
    if (event.target.classList.contains('custom-modal')) {
        closeModal(modals[currentModalIndex]);
    }
}