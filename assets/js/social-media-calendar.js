'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Gallery variables
const galleryItems = document.querySelectorAll("[data-gallery-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalImgBox = document.querySelector(".modal-img-box");

// Modal toggle function
const galleryModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add click event to all gallery items
for (let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("img").src;
    modalImg.alt = this.querySelector("img").alt;
    galleryModalFunc();
  });
}

// Add click event to modal close button and overlay
modalCloseBtn.addEventListener("click", galleryModalFunc);
overlay.addEventListener("click", galleryModalFunc);

// Zoom functionality with mouse movement
modalImgBox.addEventListener("mousemove", function (e) {
  const img = modalImg;
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Scale the image
  img.style.transform = "scale(2)"; // تكبير الصورة مرتين
  img.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
});

modalImgBox.addEventListener("mouseleave", function () {
  modalImg.style.transform = "scale(1)"; // رجوع الصورة لحجمها الطبيعي
  modalImg.style.transformOrigin = "center center";
});