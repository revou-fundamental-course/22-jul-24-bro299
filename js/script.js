document.addEventListener('DOMContentLoaded', function() {
    // Fungsi filter portofolio
    const buttons = document.querySelectorAll('.portfolio-filter button');
    const items = document.querySelectorAll('.portfolio-item');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Scroll halus ke form kontak saat tombol "Pesan Sekarang" diklik
    const pesanSekarangButtons = document.querySelectorAll('.btn-primary[id^="pesanSekarang"]');
    pesanSekarangButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll halus ke bagian portofolio saat tombol "Lihat Portofolio" diklik
    const portofolioButtons = document.querySelectorAll('.btn-secondary[id^="portofolio"]');
    portofolioButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('portofolio').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fungsi untuk toggle (menampilkan/menyembunyikan) menu pada tampilan mobile
    window.toggleMenuButton = function() {
        document.getElementById("menu-list").classList.toggle("show");
    };

    // Fungsi untuk scroll saat tombol "Get Started" diklik
    window.getStartButton = function() {
        const bannerHeight = document.getElementById("hero").clientHeight;
        const headerHeight = document.getElementsByClassName("header")[0].clientHeight;
        window.scrollBy(0, bannerHeight - headerHeight);
    };

    // Fungsi slideshow pada bagian hero
    const heroSlider = document.getElementById("hero-slider");
    const windowWidth = heroSlider.clientWidth;
    let index = 1;

    heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;

    setInterval(() => {
        if (index == 6) return;
        index++;
        heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
        heroSlider.style.transition = "all 2s ease-in-out";
    }, 6000);

    heroSlider.addEventListener("transitionend", () => {
        if (document.getElementById(`slide${index}`).id == "slide6") {
            heroSlider.style.transition = "none";
            index = 0;
            heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
        }
    });

    // Validasi form
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

    // Ganti semua ikon feather
    feather.replace();
});
