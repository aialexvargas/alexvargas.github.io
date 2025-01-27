  // Once DOM is loaded, fade in the body & fix the icon state
  window.addEventListener('DOMContentLoaded', () => {
    // Fade in body
    document.body.classList.add('loaded');

    // Theme toggling logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const isDarkSaved = localStorage.getItem('theme') === 'dark';

    // If user had dark theme saved, update the icon to sun
    if (isDarkSaved) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }

    // Toggle event
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDarkNow = document.documentElement.classList.contains('dark');
      if (isDarkNow) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
      }
    });
  });

  // Expand/Collapse role descriptions
  document.addEventListener('click', (e) => {
    const jobItem = e.target.closest('.job-item');
    if (jobItem) {
      jobItem.classList.toggle('open');
    }
  });