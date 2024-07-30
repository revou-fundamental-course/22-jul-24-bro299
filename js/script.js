document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    menuToggle.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000);

    // Hero auto slide
    let heroSlideIndex = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const totalHeroSlides = heroSlides.length;

    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextHeroSlide() {
        heroSlideIndex = (heroSlideIndex + 1) % totalHeroSlides;
        showHeroSlide(heroSlideIndex);
    }

    setInterval(nextHeroSlide, 5000);

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const interest = document.getElementById('interest').value;

        if (name === '' || phone === '' || interest === '') {
            alert('Silakan isi semua kolom.');
            return;
        }

        if (!/^\d{10,13}$/.test(phone)) {
            alert('Nomor HP harus berupa angka dan memiliki panjang antara 10 hingga 13 karakter.');
            return;
        }

        alert('Formulir berhasil dikirim!');
        form.reset();
    });
});
