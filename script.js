/* ============================================================
   Questly — site interactions
   Sections:
   1. Mobile nav toggle
   2. Active nav-link highlighting on scroll
   3. Quest path draw-in (re-triggers when scrolled into view)
   4. Animated stat counters (214K, 38, 6.2M, 92%)
   5. XP bar fill animation on scroll
   6. Button feedback (Begin your quest / Create your character)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.textContent = isOpen ? '✕' : '☰';
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu after tapping a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.textContent = '☰';
      });
    });
  }

  /* ---------- 2. Active nav-link highlighting on scroll ---------- */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  if (sections.length && navAnchors.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));
  }

  /* ---------- 3. Quest path draw-in on scroll ---------- */
  const path = document.getElementById('drawnPath');
  const questMap = document.querySelector('.quest-map');

  if (path && questMap) {
    const pathObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          path.style.animation = 'none';
          void path.offsetWidth; // force reflow so the animation restarts
          path.style.animation = null;
        }
      });
    }, { threshold: 0.3 });

    pathObserver.observe(questMap);
  }

  /* ---------- 4. Animated stat counters ---------- */
  const statNumbers = document.querySelectorAll('.stat .num[data-count]');

  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out for a snappier finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toFixed(decimals) + suffix;
      }
    }
    requestAnimationFrame(tick);
  }

  if (statNumbers.length) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target); // only run once
        }
      });
    }, { threshold: 0.6 });

    statNumbers.forEach(num => statObserver.observe(num));
  }

  /* ---------- 5. XP bar fill animation on scroll ---------- */
  const xpFills = document.querySelectorAll('.xp-fill[data-width]');

  if (xpFills.length) {
    const xpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = `${bar.dataset.width}%`;
          xpObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });

    xpFills.forEach(bar => xpObserver.observe(bar));
  }

  /* ---------- 6. Button feedback ---------- */
  // Any primary button without its own specific behavior scrolls to the
  // quest path / CTA and gives a brief "confirmed" pulse for feedback.
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Let\u2019s go \u2192';
      btn.style.opacity = '0.85';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
      }, 1200);

      const questMapEl = document.querySelector('.quest-map');
      if (questMapEl) {
        questMapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

});
