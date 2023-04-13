let counter = 0;

function login() {
  if (counter % 2 == 0) {
    alert('You have been logged in!');
    document.querySelector('button').innerHTML = 'Logout';
  } else {
    alert('You have been logged out!');
    document.querySelector('button').innerHTML = 'Login';
  }
  counter += 1;
}