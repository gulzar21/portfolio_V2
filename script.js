document.addEventListener('DOMContentLoaded', () => {
    // Console Welcome Message
    console.log("%c SYSTEM INITIATED ", "background: #000; color: #00ff00; font-size: 20px; border: 1px solid #00ff00; padding: 5px;");
    console.log("Welcome to the portfolio of Gulzar Hussain Baba.");

    // Smooth Scroll anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close menu on mobile click
                const nav = document.querySelector('.nav-menu');
                const toggle = document.querySelector('.menu-toggle');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    toggle.classList.remove('active');
                }
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Random Glitch Effect on Title every few seconds
    const title = document.querySelector('.glitch-large');
    if (title) {
        setInterval(() => {
            title.style.textShadow = `
                ${Math.random() * 10 - 5}px 0 #ff0000, 
                ${Math.random() * 10 - 5}px 0 #0000ff
            `;
            setTimeout(() => {
                title.style.textShadow = "none";
            }, 100);
        }, 5000);
    }

    // Decode Text Effect for elements with class 'decode-text'
    // (Optional enhancement if applied)

    // Intersection Observer for fade-in elements
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.cyber-card, .timeline-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Binary Rain Animation
    const canvas = document.getElementById('binaryCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        // Resize canvas on window resize
        window.addEventListener('resize', () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        });

        const characters = '01';
        const fontSize = 14;
        const columns = width / fontSize;
        const drops = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function drawBinary() {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0F0'; // Neon Green
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawBinary, 33);
    }
});
