const spencer = document.querySelector('.spencer');

spencer.addEventListener('click', function (e) {
  console.log('you clicked it');
  const changePage = confirm('This wesite might be bad.');
  if (!changePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (e) {
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro. No Chads.');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.addEventListener('keyup', logEvent);
signupForm.addEventListener('keydown', logEvent);
signupForm.addEventListener('focus', logEvent);
signupForm.addEventListener('blur', logEvent);
