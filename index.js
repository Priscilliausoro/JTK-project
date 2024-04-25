const section2 = document.getElementById('section2');
const active = document.querySelectorAll('.active');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7 // Adjust as needed
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const item = entry.target;
      const src = item.getAttribute('data-src');
      item.style.backgroundImage = `url(${src})`;
      observer.unobserve(item);
    }
  });
}, options);
items.forEach(item => {
    observer.observe(item);
  });