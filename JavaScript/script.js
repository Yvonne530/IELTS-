document.addEventListener("DOMContentLoaded", function () {
    const imagesContainer = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.querySelector(".carousel-btn.left");
    const nextButton = document.querySelector(".carousel-btn.right");
    const dotsContainer = document.querySelector(".carousel-dots");
    let index = 0;
    const totalImages = images.length;
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToImage(i));
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".carousel-dots span");
    function updateCarousel() {
        imagesContainer.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }
    prevButton.addEventListener("click", function () {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });
    nextButton.addEventListener("click", function () {
        index = (index + 1) % totalImages;
        updateCarousel();
    });
    function goToImage(i) {
        index = i;
        updateCarousel();
    }
});



