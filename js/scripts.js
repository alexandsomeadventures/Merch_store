window.addEventListener('DOMContentLoaded', event => {

    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("current-year").innerHTML = year;

    var typed = new Typed(".auto-type", 
        {strings: ["Alex Daniels","AGI", "Sylvie"],
         typeSpeed: 200,
         backSpeed: 200,
         loop: true
    });

    const changingImages = [
        "assets/img/sylvie_screen3.png", "assets/img/sylvie_screen2.png", "assets/img/sylvie_screen1.png",
    ];
    var imageIndex = 0;
    const imgElement = document.getElementById('project1_img');
    setInterval(() => {
        imgElement.style.opacity = 0; // Start fade-out
        setTimeout(() => {
            imageIndex = (imageIndex + 1) % changingImages.length; // Update image index
            imgElement.src = changingImages[imageIndex]; // Change image source
            imgElement.style.opacity = 1; // Start fade-in
        }, 1000); // Wait for fade-out to complete (same duration as CSS transition)
    }, 3000); // Interval duration for changing images


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    // Shrink the navbar 
    navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
