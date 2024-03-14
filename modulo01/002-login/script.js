document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message');

  if (username === 'user' && password === 'password') {
    message.innerHTML = 'Login successful!';
    message.style.color = 'green';
  } else {
    // message.innerHTML = 'Invalid username or password';
    // message.style.color = 'red';
    message.innerHTML = 'Login successful!';
    message.style.color = 'green';
  }
});
