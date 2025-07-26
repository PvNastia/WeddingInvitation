const hiddenElements = document.querySelectorAll('.hidden-text');
const hiddenImg = document.querySelector('.hidden-img');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      hiddenImg.classList.add('active');
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));
