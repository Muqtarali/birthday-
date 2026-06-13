// NO button movement logic - Keeps the playful dodge effect on the landing page
const noButton = document.getElementById('noButton');
let noButtonClickCount = 0;

if (noButton) {
  // Move on hover
  noButton.addEventListener('mouseenter', moveNoButton);
  
  // Move on mobile touch
  noButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
  });
  
  // Move on click attempt
  noButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
  });
  
  // Move even on mouse down
  noButton.addEventListener('mousedown', (e) => {
    e.preventDefault();
    moveNoButton();
  });
}

function moveNoButton() {
  const card = document.querySelector('.romantic-card');
  const container = document.querySelector('.button-container');
  
  if (!card || !container || !noButton) return;
  
  noButtonClickCount++;
  
  const containerRect = container.getBoundingClientRect();
  const btnRect = noButton.getBoundingClientRect();
  
  // Increase movement range as she keeps trying
  const maxX = containerRect.width - btnRect.width - 20;
  const maxY = 120; // Vertical movement range
  
  // Random position - gets more chaotic with each attempt
  const randomX = (Math.random() - 0.5) * maxX;
  const randomY = (Math.random() - 0.5) * maxY;
  
  // Shrink NO button progressively (minimum 40%)
  const noScale = Math.max(0.4, 1 - (noButtonClickCount * 0.06));
  
  // Grow YES button progressively (maximum 150%)
  const yesBtn = document.querySelector('.yes-button');
  if (yesBtn) {
    const yesScale = Math.min(1.5, 1 + (noButtonClickCount * 0.06));
    yesBtn.style.transform = `scale(${yesScale})`;
  }
  
  // Apply combined transform
  noButton.style.transform = `translate(${randomX}px, ${randomY}px) scale(${noScale})`;
  
  // Add shake effect
  noButton.style.animation = 'shake 0.4s';
  setTimeout(() => {
    noButton.style.animation = '';
  }, 400);
  
  // Change button text after multiple attempts
  if (noButtonClickCount === 3) {
    noButton.querySelector('span').textContent = 'Maybe Later? 🤔';
  } else if (noButtonClickCount === 5) {
    noButton.querySelector('span').textContent = 'Come On 🎉';
  } else if (noButtonClickCount === 8) {
    noButton.querySelector('span').textContent = 'Almost Ready 🥳';
  } else if (noButtonClickCount > 10) {
    noButton.querySelector('span').textContent = 'Just Celebrate! 🎂';
  }
  
  // Create mini sparkles on each dodge
  createMiniSparkles(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2);
}

// Mini sparkles when NO button moves
function createMiniSparkles(x, y) {
  for (let i = 0; i < 3; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '🎉';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '1rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleFloat 0.8s ease-out forwards';
    sparkle.style.zIndex = '1000';
    sparkle.style.opacity = '0';
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }
}

// Floating birthday emojis background
function createFloatingHearts() {
  const heartsContainer = document.querySelector('.hearts-background');
  const heartEmojis = ['🎈', '🎉', '🎂', '🎁', '🥳', '✨', '🍰'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 10000);
  }, 600);
}

function startSurprise() {
  // Add sparkle effect
  createSparkles();
  
  // Smooth transition
  document.querySelector('.romantic-card').style.animation = 'scaleIn 0.5s reverse';
  
  setTimeout(() => {
    window.location.href = 'pages/gallery.html';
  }, 500);
}

function createSparkles() {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    sparkle.style.zIndex = '1000';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
  }
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
});
