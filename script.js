// Matrix canvas animation
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Modal logic
const loginBtn = document.getElementById('loginBtn');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const submitLogin = document.getElementById('submitLogin');

loginBtn.addEventListener('click', function () {
  authModal.style.display = 'flex';
});

closeModal.addEventListener('click', function () {
  authModal.style.display = 'none';
});

submitLogin.addEventListener('click', function () {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  if (username && password) {
    alert('Login successful! Welcome, ' + username);
    authModal.style.display = 'none';
  } else {
    alert('Please enter username and password.');
  }
});

// Page navigation
function openPage(page) {
  window.location.href = page;
}
