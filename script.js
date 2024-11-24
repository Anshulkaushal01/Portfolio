var typed = new Typed('#element', {
  strings: ['Software Engineer', 'Web Developer'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true  // This option makes the animation loop infinitely
});

document.getElementById('scr-to-home').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('home').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  });
});

document.getElementById('scr-to-abt').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  });
});

document.getElementById('scr-to-pro').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('projects').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  });
});

document.getElementById('scr-to-f').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('Contact-us').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  });
});

function animateCounters() {
  const counters = document.querySelectorAll('.value');
  counters.forEach(counter => {
      const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const current = +counter.innerText;
          const increment = target / 100;

          if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCounter, 30); // Adjust speed here
          } else {
              counter.innerText = target;
          }
      };

      updateCounter();
  });
}

function fillSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (barPosition < screenPosition && !bar.classList.contains('filled')) {
          bar.style.width = bar.getAttribute('data-skill-level');
          bar.classList.add('filled');
      }
  });
}

window.addEventListener('load', () => {
  animateCounters();
  fillSkillBars();
});

window.addEventListener('scroll', fillSkillBars);

function openResume() {
  window.open('Resume.pdf', '_blank');
}