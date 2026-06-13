// Floating birthday emojis effect
function createFloatingHearts() {
  const heartsContainer = document.createElement('div');
  heartsContainer.className = 'hearts-background';
  document.body.insertBefore(heartsContainer, document.body.firstChild);
  
  const heartEmojis = ['🎈', '🎉', '🎂', '🎁', '🥳', '✨', '🍰'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 10000);
  }, 600);
}

// Confetti explosion
function createConfetti() {
  const colors = ['#9FD3FF', '#FFD9A8', '#FF8A6B', '#B8E0D2', '#FFE6A7'];
  
  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.width = (Math.random() * 8 + 5) + 'px';
      confetti.style.height = (Math.random() * 8 + 5) + 'px';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 4000);
    }, i * 10);
  }
}

// Sparkles effect
function createSparkles(x, y) {
  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = (x || Math.random() * window.innerWidth) + 'px';
    sparkle.style.top = (y || Math.random() * window.innerHeight) + 'px';
    sparkle.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleFloat 1.5s ease-out forwards';
    sparkle.style.zIndex = '1000';
    sparkle.style.opacity = '0';
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
  }
}

// Gentle page transition
function pageTransition(url) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--pastel-pink), var(--blush));
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 9999;
  `;
  
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);
  
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

// Initialize effects on page load
window.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  
  // Add fade-in to main content
  const mainContent = document.querySelector('.card, .romantic-card, .gallery-container, .letter-container');
  if (mainContent) {
    mainContent.classList.add('fade-in');
  }
});
