const CONFIG = {
    musicFile: 'music/song.mp3',
    photos: {
        mugshot: 'images/mugshot.jpg',
        gallery: [
            'images/1.jpg',
            'images/2.jpg',
            'images/3.jpg',
            'images/4.jpg',
            'images/5.jpg'
        ]
    },
    socialLinks: {
        kick: 'https://kick.com/cuffem',
        twitter: 'https://twitter.com/cuffem',
        instagram: 'https://instagram.com/cuffemm',
        youtube: 'https://youtube.com/@cuffem',
        tiktok: 'https://tiktok.com/@cuffemugly'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const entryScreen = document.getElementById('entry-screen');
    const enterBtn = document.getElementById('enter-btn');
    const mainContent = document.getElementById('main-content');
    const bgMusic = document.getElementById('background-music');
    const volumeSlider = document.getElementById('volume-slider');
    
    bgMusic.volume = 0.5;
    
    createSnow();
    
    enterBtn.addEventListener('click', function() {
        entryScreen.classList.add('hidden');
        mainContent.classList.add('visible');
        
        bgMusic.play().catch(err => {
            console.log('Audio play failed:', err);
        });
        
        setTimeout(() => {
            animateStats();
            addScrollAnimations();
        }, 500);
    });
    
    volumeSlider.addEventListener('input', function() {
        bgMusic.volume = this.value / 100;
    });
    
    applyConfig();
});

function applyConfig() {
    const bgMusic = document.getElementById('background-music');
    bgMusic.src = CONFIG.musicFile;
    
    const mugshotImg = document.querySelector('.mugshot-img');
    if (mugshotImg) {
        mugshotImg.src = CONFIG.photos.mugshot;
    }
    
    const galleryImages = document.querySelectorAll('.photo-item img');
    galleryImages.forEach((img, index) => {
        if (CONFIG.photos.gallery[index]) {
            img.src = CONFIG.photos.gallery[index];
        }
    });
    
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        const platform = link.textContent.toLowerCase();
        if (CONFIG.socialLinks[platform]) {
            link.href = CONFIG.socialLinks[platform];
        }
    });
}

function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 1500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function addScrollAnimations() {
    const elements = document.querySelectorAll('.stat-row, .links a, .content-block h2');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.classList.add('fade-out');
        observer.observe(element);
    });
}

function createSnow() {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);
    
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.3;
        
        snowContainer.appendChild(snowflake);
    }
}
