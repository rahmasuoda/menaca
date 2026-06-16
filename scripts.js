/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

document.addEventListener('DOMContentLoaded', function() {
    // Collapse responsive navbar when link is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarLinks = document.querySelectorAll('.navbar-nav a');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Hide navbar when page is scrolled down
    var navbarCollapsible = document.body.querySelector('#mainNav');
    if (navbarCollapsible) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -69px'
        });
    };

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

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            if (name && email && phone && message) {
                // Show success message
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
                document.getElementById('submitErrorMessage').classList.add('d-none');
                
                // Reset form
                contactForm.reset();
                
                // Scroll to success message
                setTimeout(() => {
                    document.getElementById('submitSuccessMessage').scrollIntoView({ behavior: 'smooth' });
                }, 500);
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('submitSuccessMessage').classList.add('d-none');
                }, 5000);
            } else {
                document.getElementById('submitErrorMessage').classList.remove('d-none');
            }
        });
    }
});
