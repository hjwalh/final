document.addEventListener("DOMContentLoaded", function () {
    // Image data
    const images = [
        { src: "c1.jpg", category: "car" },
        { src: " c2.jpg", category: "car" },
        { src: " c3.jpg", category: "car" },
        { src: " c4.jpg", category: "car" },
        { src: " c5.jpg", category: "car" },
        { src: " c6.jpg", category: "car" },
        { src: " c7.jpg", category: "car" },
        { src: " c8.jpg", category: "car" },
        { src: " c9.jpg", category: "car" },
        { src: " w1.jpg", category: "wildlife" },
        { src: " w2.jpg", category: "wildlife" },
        { src: " w3.jpg", category: "wildlife" },
        { src: " w4.jpg", category: "wildlife" },
        { src: " w5.jpg", category: "wildlife" },
        { src: " w6.jpg", category: "wildlife" },
        { src: " w7.jpg", category: "wildlife" },
        { src: " w8.jpg", category: "wildlife" },
        { src: " w9.jpg", category: "wildlife" },
        { src: " n1.jpg", category: "nature" },
        { src: " n2.jpg", category: "nature" },
        { src: " n3.jpg", category: "nature" },
        { src: " n4.jpg", category: "nature" },
        { src: " n5.jpg", category: "nature" },
        { src: " n6.jpg", category: "nature" },
        { src: " n7.jpg", category: "nature" },
        { src: " n8.jpg", category: "nature" },
        { src: " n9.jpg", category: "nature" }
    ];

    const galleryContainer = document.getElementById("imageGallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".close");
    const categoryButtons = document.querySelectorAll(".category-btn");

    // Function to display images based on the selected filter
    function displayImages(filter) {
        galleryContainer.innerHTML = ""; // Clear existing images

        const filteredImages = images.filter(image => filter === "all" || image.category === filter);

        let galleryHTML = '';
        filteredImages.forEach((image, index) => {
            galleryHTML += `
                <div class="gallery-item">
                    <img src="${image.src}" class="gallery-img img-fluid rounded shadow-sm" alt="Gallery Image ${index + 1}" data-src="${image.src}">
                </div>
            `;
        });
        galleryContainer.innerHTML = galleryHTML;

        // Add event listeners to images after they are added to the DOM
        const galleryImages = document.querySelectorAll('.gallery-item img');
        galleryImages.forEach(img => {
            img.addEventListener("click", function () {
                lightbox.classList.add("active");
                lightboxImg.src = this.dataset.src;
                lightboxImg.style.width = "80vw";
                lightboxImg.style.height = "auto";
            });
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const category = this.dataset.category;
            displayImages(category);
        });
    });

    closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    displayImages("all");
});