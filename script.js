 // Typewriter
  const roles = [
    'Red Team Operator',
    'Penetration Tester',
    'MERN Stack Developer',
    'Security Researcher',
    'CS Undergraduate @ COMSATS',
  ];
  let ri = 0, ci = 0, deleting = false;
  const el = document.getElementById('typewriter');

  function type() {
    const word = roles[ri];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(type, deleting ? 45 : 80);
  }
  type();

  // Scroll fade-in
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // Form
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#00b894';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }