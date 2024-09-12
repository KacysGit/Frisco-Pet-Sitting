document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-button');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    let currentIndex = -1;

    function openModal(index) {
        modal.style.display = 'flex';
        modalImg.src = galleryImages[index].src;
        currentIndex = index;
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            openModal(index);
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Navigate to the previous image
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            openModal(currentIndex - 1);
        } else {
            openModal(galleryImages.length - 1); // Loop to last image
        }
    });

    // Navigate to the next image
    rightArrow.addEventListener('click', () => {
        if (currentIndex < galleryImages.length - 1) {
            openModal(currentIndex + 1);
        } else {
            openModal(0); // Loop to first image
        }
    });
});
