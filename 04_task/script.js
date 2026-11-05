
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.heart').forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('clicked');
            icon.textContent = icon.classList.contains('clicked') ? '❤️' : '♡';
        });
    });
});
