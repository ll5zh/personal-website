/* Navigation bar functionality */
const primaryNav = document.querySelector('.primary-navigation');
const mobileNavToggle = document.querySelector('.mobile-navigation-toggle');

mobileNavToggle.addEventListener('click', () => {
  const isVisible = primaryNav.getAttribute('data-visible');
  if (isVisible === 'false') {
    primaryNav.setAttribute('data-visible', 'true');
    mobileNavToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.setAttribute('data-visible', 'false');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
  }
});

