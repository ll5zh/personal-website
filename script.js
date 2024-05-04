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

/* Contact form */
const form = document.querySelector('#form');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameVal = formName.value;
  const emailVal = formEmail.value;
  const messageVal = formMessage.value;
  const sendTo = 'll5zhang@uwaterloo.ca';
  document.location = "mailto:"+sendTo+"?subject="+nameVal+": Contacting Lucia Zhang&body="+"EMAIL:%0A"+emailVal+"%0A%0AMESSAGE:%0A"+messageVal;
});

