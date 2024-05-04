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
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
  const nameVal = name.value;
  const emailVal = email.value;
  const messageVal = message.value;
  const sendTo = 'll5zhang@uwaterloo.ca';
  console.log(messageVal);
  document.location = "mailto:"+sendTo+"?subject="+encodeURIComponent(nameVal)+": Contacting Lucia Zhang&body="+"EMAIL:%0A"+encodeURIComponent(emailVal)+"%0A%0AMESSAGE:%0A"+encodeURIComponent(messageVal);
});

