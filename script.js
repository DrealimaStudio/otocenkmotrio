const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  counter.innerText = "0";

  const target = +counter.getAttribute("data-target");
  const increment = Math.max(1, target / 100);

  const updateCounter = () => {
    const current = parseInt(counter.innerText) || 0;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}+`;
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = `${target}+`;
    }
  };

  updateCounter();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.4
});

counters.forEach(counter => {
  observer.observe(counter);
});

const whatsappMain = document.querySelector(".whatsapp-main");
const whatsappOptions = document.querySelector(".whatsapp-options");

if (whatsappMain && whatsappOptions) {
  whatsappMain.addEventListener("click", (e) => {
    e.stopPropagation();
    whatsappOptions.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (
      !whatsappOptions.contains(e.target) &&
      !whatsappMain.contains(e.target)
    ) {
      whatsappOptions.classList.remove("show");
    }
  });
}

if (whatsappMain) {
  setInterval(() => {
    whatsappMain.classList.toggle("pulse");
  }, 1800);
}
const track = document.querySelector('.gallery-track');

document.querySelector('.next').addEventListener('click', () => {
    track.scrollBy({
        left: 450,
        behavior: 'smooth'
    });
});

document.querySelector('.prev').addEventListener('click', () => {
    track.scrollBy({
        left: -450,
        behavior: 'smooth'
    });
});