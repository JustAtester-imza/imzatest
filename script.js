document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                observer.unobserve(entry.target); // Stop observing once it's in view
            }
        });
    });

    document.querySelectorAll('.flex').forEach(div => {
        observer.observe(div);
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    observer.unobserve(entry.target);
                }
            });
        });

        const elementsToObserve = ['.head', '.row_one', '.row_two', '.row_three', '.emekdashlar', '.content', '.container1'];

        elementsToObserve.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                observer.observe(element);
            });
        });
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

        breakpoints: {
            0:{
                slidesPerView: 1
            },
            620:{
                slidesPerView: 2
            },
            1024:{
                slidesPerView: 3
            }
        }
      });

      var swiper2 = new Swiper('.swiper1', {
        autoHeight: true,
        pagination:  {
          el: '.swiper-pagination2',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Enable debugger
        debugger: true,
      });


      const burgerMenu = document.getElementById('burgerMenu');
      const navbar = document.querySelector('.navbar_in');
      const navLinks = document.querySelectorAll('.navbar_link');

      burgerMenu.addEventListener('click', function() {
          burgerMenu.classList.toggle('active');
          navbar.classList.toggle('active');
      });

      navLinks.forEach(link => {
          link.addEventListener('click', function() {
              burgerMenu.classList.remove('active');
              navbar.classList.remove('active');
          });
      });
