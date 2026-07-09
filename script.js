// Re-trigger the quest path draw-in when it scrolls into view
document.addEventListener('DOMContentLoaded', () => {
  const path = document.getElementById('drawnPath');
  const questMap = document.querySelector('.quest-map');

  if (path && questMap) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          path.style.animation = 'none';
          void path.offsetWidth;
          path.style.animation = null;
        }
      });
    }, { threshold: 0.3 });

    observer.observe(questMap);
  }

  // Simple mobile nav toggle (progressive enhancement)
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});
