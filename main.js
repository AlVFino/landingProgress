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


    // chatboot
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6958a3d6a138e01977ecaa34/1je14006c';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();

    // Marquee Animation
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


        const fabBtn = document.getElementById('fabMessageBtn');
        const fabIcon = document.getElementById('fabMessageIcon');
        const fabOptions = document.getElementById('fabMessageOptions');

        const messageSVG = `<img src="assets/img/contact2.png" alt="icon contact" width="150"/>`;
        const closeSVG =
    `<svg class="close bg-blue-700 text-white" width="50" fill="currentColor" viewBox="0 0 24 24"><path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/></svg>`;

    fabBtn.addEventListener('click', function(e) {
        fabOptions.classList.toggle('show');
        if (fabOptions.classList.contains('show')) {
            fabIcon.innerHTML = closeSVG;
        } else {
            fabIcon.innerHTML = messageSVG;
        }
        e.stopPropagation();
    });
    window.addEventListener('click', function(e) {
        if (!fabBtn.contains(e.target) && !fabOptions.contains(e.target)) {
            fabOptions.classList.remove('show');
            fabIcon.innerHTML = messageSVG;
        }
    });






