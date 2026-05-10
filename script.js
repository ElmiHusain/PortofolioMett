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
}
