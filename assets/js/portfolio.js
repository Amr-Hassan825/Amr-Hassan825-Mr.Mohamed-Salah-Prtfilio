document.addEventListener('DOMContentLoaded', () => {
    // Navigation active state management for both desktop and mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active', 'bg-warning', 'text-dark'));
        e.target.closest('.nav-link').classList.add('active', 'bg-warning', 'text-dark');
      });
    });
  
    // Toggle button icon rotation
    const toggleButton = document.querySelector('[data-bs-toggle="collapse"]');
    const toggleIcon = toggleButton.querySelector('.bi');
    
    document.querySelector('#projectContent').addEventListener('show.bs.collapse', () => {
      toggleIcon.classList.remove('bi-chevron-down');
      toggleIcon.classList.add('bi-chevron-up');
    });
  
    document.querySelector('#projectContent').addEventListener('hide.bs.collapse', () => {
      toggleIcon.classList.remove('bi-chevron-up');
      toggleIcon.classList.add('bi-chevron-down');
    });
});

// Slider Controls
const slider = document.querySelector(".slider-list");
const prevBtn = document.querySelector("[data-slider-prev]");
const nextBtn = document.querySelector("[data-slider-next]");

if (slider && prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
  });
}