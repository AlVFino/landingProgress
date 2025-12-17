        AOS.init({
            once: false,
            duration: 700,
            easing: 'ease-out-cubic',
            offset: 80,
        });
 
        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Smooth Scroll is handled by 'scroll-smooth' class in HTML tag, 
        // but this adds extra compatibility
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


    const marquee = document.getElementById("marquee");

    let translateX = -marquee.scrollWidth; // mulai dari luar kiri

    // Gandakan isi biar infinite scroll mulus
    marquee.innerHTML += marquee.innerHTML;

    function animateMarquee() {
        translateX += 1; // makin besar → gerak ke kanan
        marquee.style.transform = `translateX(${translateX}px)`;

        if (translateX >= 0) {
            translateX = -marquee.scrollWidth / 2; // reset posisi
        }

        requestAnimationFrame(animateMarquee);
    }

    animateMarquee();