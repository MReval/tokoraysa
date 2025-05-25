function showToast(message, type = 'info', duration = 3000) {
    let toastContainer = document.getElementById('toast-container');

    // If the container doesn't exist, create and append it to the body.
    // This is a fallback, ideally the container is already in the HTML.
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
        // Basic styling if it was dynamically created, though CSS file should handle this
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.left = '20px';
        toastContainer.style.zIndex = '1050';
        toastContainer.style.display = 'flex';
        toastContainer.style.flexDirection = 'column-reverse';
    }

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`; // e.g., toast-notification toast-success
    toast.innerHTML = message;

    // Prepend toast to have new ones appear above older ones if flex-direction is column-reverse
    // Or append if flex-direction is column (adjust CSS for #toast-container accordingly if you change this)
    toastContainer.appendChild(toast); // With column-reverse, new children are at the bottom, visually appearing "on top"

    // Animate in (simple fade-in or slide-in can be added with CSS transitions)
    setTimeout(() => {
        toast.style.opacity = '1'; // Assuming initial opacity is 0 or it's handled by CSS transition
    }, 100); // Small delay to allow rendering for transition

    // Remove toast after duration
    setTimeout(() => {
        // Optional: Add a fade-out animation
        toast.style.opacity = '0'; // Start fade-out
        setTimeout(() => {
            if (toast.parentNode === toastContainer) { // Check if it hasn't been removed by other means
                toastContainer.removeChild(toast);
            }
            // If the container is empty and was dynamically created, consider removing it
            // For simplicity, we'll leave it. Or add more complex logic if needed.
        }, 500); // Wait for fade-out transition to complete
    }, duration);
}

// Make showToast globally accessible
window.showToast = showToast;
