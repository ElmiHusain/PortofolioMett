// Initialize Animate On Scroll
AOS.init({
    duration: 1000,
    offset: 100,
    once: false,
    mirror: true
});

// Navbar Scroll Interaction
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('py-4', 'bg-black/80', 'border-white/10');
        navbar.classList.remove('py-6', 'bg-black/40', 'border-transparent');
    } else {
        navbar.classList.add('py-6', 'bg-black/40', 'border-transparent');
        navbar.classList.remove('py-4', 'bg-black/80', 'border-white/10');
    }
});

// Custom Form Submission Simulation
const form = document.querySelector('form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Mengirim...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerText = 'Pesan Terkirim!';
            btn.classList.replace('bg-cyan-500', 'bg-green-500');
            form.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.replace('bg-green-500', 'bg-cyan-500');
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');

let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        // Ganti ke ikon Muted
        musicIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        `;
    } else {
        bgMusic.play();
        // Ganti ke ikon Playing (Volume On)
        musicIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        `;
    }
    isPlaying = !isPlaying;
});

// Optional: Atur volume agar tidak terlalu keras (0.0 sampai 1.0)
bgMusic.volume = 10
}
