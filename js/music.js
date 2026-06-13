// Birthday surprise soundtrack
// Sakina's birthday page music

// Background Music Control

let audio = null;
let isMusicPlaying = false;

// Initialize music
function initMusic() {
    const audioPath = window.location.pathname.includes('/pages/')
        ? '../assets/audio/love-song.mp3'
        : 'assets/audio/love-song.mp3';

    audio = new Audio(audioPath);
    audio.loop = true;
    audio.volume = 0.3; // 30% volume - gentle background music
}

// Play music
function playMusic() {
    if (!audio) initMusic();
    
    audio.play().catch(err => {
        console.log('Autoplay prevented - user interaction needed');
    });
    isMusicPlaying = true;
    updateMusicButton();
}

// Pause music
function pauseMusic() {
    if (audio) {
        audio.pause();
        isMusicPlaying = false;
        updateMusicButton();
    }
}

// Toggle music
function toggleMusic() {
    if (isMusicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// Update music button icon
function updateMusicButton() {
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn) {
        musicBtn.innerHTML = isMusicPlaying ? '🎵' : '🔇';
        musicBtn.title = isMusicPlaying ? 'Pause Music' : 'Play Music';
    }
}

// Create floating music control button
function createMusicControl() {
    const musicBtn = document.createElement('button');
    musicBtn.id = 'musicToggle';
    musicBtn.innerHTML = '🎵';
    musicBtn.title = 'Play Music';
    musicBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #FF8A6B, #9FD3FF);
        color: white;
        font-size: 1.8rem;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(255, 138, 107, 0.5);
        z-index: 10000;
        transition: all 0.3s ease;
        animation: gentleBounce 2s ease-in-out infinite;
    `;
    
    musicBtn.addEventListener('click', toggleMusic);
    
    musicBtn.addEventListener('mouseenter', () => {
        musicBtn.style.transform = 'scale(1.15)';
    });
    
    musicBtn.addEventListener('mouseleave', () => {
        musicBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(musicBtn);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initMusic();
    createMusicControl();
    
    // Auto-play music after a short delay for romantic atmosphere
    setTimeout(() => {
        playMusic();
    }, 500);
    
    // Also start on first user interaction as fallback
    const startMusic = () => {
        if (!isMusicPlaying) {
            playMusic();
        }
        document.removeEventListener('click', startMusic);
        document.removeEventListener('touchstart', startMusic);
    };
    
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
});

// Fade out when leaving page
window.addEventListener('beforeunload', () => {
    if (audio && isMusicPlaying) {
        const fadeOut = setInterval(() => {
            if (audio.volume > 0.1) {
                audio.volume -= 0.1;
            } else {
                clearInterval(fadeOut);
                audio.pause();
            }
        }, 100);
    }
});
