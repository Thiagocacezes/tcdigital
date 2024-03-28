document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const scrollUpBtn = document.querySelector(".scroll-up-btn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    scrollUpBtn.addEventListener("click", function () {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    });

    const elementosComAnimacaoDeTexto = document.querySelectorAll(".typing");
    elementosComAnimacaoDeTexto.forEach((elemento) => {
        new Typed(elemento, {
            strings: elemento.dataset.strings.split(","), // Separa strings separadas por vírgulas
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });
    });

    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.addEventListener("click", function () {
        const menu = document.querySelector(".navbar .menu");
        menu.classList.toggle("active");
        menuBtn.querySelector("i").classList.toggle("active");
    });


    const carousel = document.querySelector(".carousel");
    if (carousel) { // Verifica se o carrossel existe antes de inicializar
        $(carousel).owlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeOut: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 2,
                    nav: false,
                },
                1000: {
                    items: 3,
                    nav: false,
                },
            },
        });
    }
    const cookieNotification = document.getElementById('aviso-de-cookies');
    const closeButton = document.getElementById('aviso-de-cookies-fechar');

    function closeCookieNotification() {
        cookieNotification.style.display = 'none';
    }

    closeButton.addEventListener('click', closeCookieNotification);

    const cookieConsent = getCookie('cookieConsent');

    if (!cookieConsent) {
        cookieNotification.style.display = 'block';
    }

    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
    }

    function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return cookieValue ? cookieValue[2] : null;
    }

});


