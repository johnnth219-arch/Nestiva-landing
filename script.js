/* ============================================
   YẾN SÀO THIÊN PHÚC — Landing Page Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('header');
    const floatingCta = document.getElementById('floating-cta');
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;

        // Header background
        if (scrollY > 60) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }

        // Floating CTA visibility
        if (scrollY > 600) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, parseInt(delay));
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => animationObserver.observe(el));

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                animateCounter(target, countTo);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    function animateCounter(element, target) {
        const duration = 2000;
        const startTime = performance.now();
        const startValue = 0;

        function easeOutQuart(t) {
            return 1 - Math.pow(1 - t, 4);
        }

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.round(startValue + (target - startValue) * easedProgress);

            if (target >= 1000) {
                element.textContent = currentValue.toLocaleString('vi-VN');
            } else {
                element.textContent = currentValue;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // ===== PARTICLE SYSTEM =====
    const particlesContainer = document.getElementById('particles');

    function createParticles() {
        const particleCount = 25;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero__particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (6 + Math.random() * 6) + 's';
            particle.style.width = (2 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = 0.2 + Math.random() * 0.4;
            particlesContainer.appendChild(particle);
        }
    }

    createParticles();

    // ===== FORM SUBMISSION — Google Apps Script =====
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwcdJRFnGebNBY6jfQuplSkp1-VYM76FqRTS8HfJJJBDLvHwa51UeV_gWSAmLFAe5-u/exec';

    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput     = document.getElementById('name');
        const phoneInput    = document.getElementById('phone');
        const productSelect = document.getElementById('product-interest');
        const submitBtn     = document.getElementById('submit-order-btn');

        // --- Validate ho ten ---
        if (nameInput.value.trim().length < 2) {
            alert('Vui long nhap ho va ten (it nhat 2 ky tu).');
            shakeElement(nameInput);
            nameInput.focus();
            return;
        }

        // --- Validate so dien thoai Viet Nam ---
        const cleanPhone = phoneInput.value.trim();
        const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
        if (!phoneRegex.test(cleanPhone)) {
            alert('So dien thoai khong hop le. Vui long nhap so dien thoai Viet Nam (VD: 0946821900).');
            shakeElement(phoneInput);
            phoneInput.focus();
            return;
        }

        // --- Loading state ---
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>⏳ Đang gửi...</span>';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // --- Payload gui len Google Sheet ---
        const emailValue = document.getElementById('email').value.trim();
        const payload = {
            type: 'waitlist',
            name: nameInput.value.trim(),
            phone: cleanPhone,
            email: emailValue,
            product: productSelect.selectedOptions[0].text
        };

        // --- Gửi email qua Resend API ---
        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showSuccess();
            } else {
                throw new Error(data.error || 'Gửi email thất bại');
            }
        })
        .catch(error => {
            console.error('Email error:', error);
            showSuccess(); // Vẫn hiển thị thành công để không làm khách hàng lo lắng
        })

        // --- Vẫn gửi lên Google Apps Script để lưu database ---
        fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                name: nameInput.value.trim(),
                phone: cleanPhone,
                email: document.getElementById('email').value.trim(),
                product: productSelect.selectedOptions[0].text,
                note: ''
            })
        })
        .catch(error => console.log('Database save error:', error))
        .finally(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        function showSuccess() {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
        }
    });

    function shakeElement(el) {
        el.style.borderColor = '#C0392B';
        el.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            el.style.borderColor = '';
            el.style.animation = '';
        }, 600);
    }

    // Add shake keyframes dynamically
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-6px); }
            40% { transform: translateX(6px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
        }
    `;
    document.head.appendChild(shakeStyle);

    // ===== ACTIVE NAV LINK HIGHLIGHTING =====
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    // ===== IMAGE LAZY LOADING WITH FADE =====
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    lazyImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.6s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });

    // ===== PRODUCT CARD TILT EFFECT (Desktop only) =====
    if (window.matchMedia('(min-width: 768px)').matches) {
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / centerY * -3;
                const rotateY = (x - centerX) / centerX * 3;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ===== PRELOAD HERO IMAGE =====
    const heroImg = document.querySelector('.hero__image');
    if (heroImg && !heroImg.complete) {
        heroImg.style.opacity = '0';
        heroImg.style.transition = 'opacity 0.8s ease';
        heroImg.addEventListener('load', () => {
            heroImg.style.opacity = '1';
        });
    }

    // ===== INITIAL HERO ANIMATIONS =====
    // Trigger hero animations immediately
    setTimeout(() => {
        document.querySelectorAll('.hero [data-animate]').forEach((el, i) => {
            const delay = el.getAttribute('data-delay') || (i * 150);
            setTimeout(() => {
                el.classList.add('animated');
            }, parseInt(delay));
        });
    }, 300);

    // ===== PRODUCT TABS =====
    const productTabs = document.querySelectorAll('.products__tab');
    const productPanels = document.querySelectorAll('.products__panel');

    productTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Update tab active state
            productTabs.forEach(t => t.classList.remove('products__tab--active'));
            tab.classList.add('products__tab--active');

            // Update panel active state
            productPanels.forEach(panel => panel.classList.remove('products__panel--active'));
            const activePanel = document.getElementById(`panel-${targetTab}`);
            if (activePanel) {
                activePanel.classList.add('products__panel--active');
                // Re-trigger animations for newly visible cards
                activePanel.querySelectorAll('[data-animate]').forEach(el => {
                    if (!el.classList.contains('animated')) {
                        const delay = el.getAttribute('data-delay') || 0;
                        setTimeout(() => el.classList.add('animated'), parseInt(delay));
                    }
                });
            }
        });
    });


});

