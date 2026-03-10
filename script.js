// Confetti in Sanrio colors
  (function() {
    const wrap = document.getElementById('confetti');
    const colors = ['#f0468a','#ffc0d9','#fff176','#c8e8ff','#e8c8f0','#ffffff','#ffaecf'];
    const shapes = ['50%','4px','2px'];
    for (let i = 0; i < 70; i++) {
      const el = document.createElement('div');
      el.className = 'cp';
      el.style.left = Math.random() * 100 + 'vw';
      const s = Math.random() * 9 + 5;
      el.style.width  = s + 'px';
      el.style.height = s + 'px';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
      el.style.animationDuration = (Math.random() * 5 + 5) + 's';
      el.style.animationDelay    = (Math.random() * 8) + 's';
      wrap.appendChild(el);
    }
  })();

  // Scroll-reveal for cards & gallery
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0) scale(1)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.detail-card, .celine-image, .gallery-slot, .sanrio-char').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px) scale(0.95)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s cubic-bezier(.34,1.4,.64,1)';
    obs.observe(el);
  });