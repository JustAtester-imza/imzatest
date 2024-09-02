document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                observer.unobserve(entry.target); 
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

        const elementsToObserve = ['.head', '.row_one', '.row_two', '.row_three', '.emekdashlar', '.content', '.container1', '.swiper-pagination', '.swiper-button-next', '.swiper-button-prev'];

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

      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 576px
          576: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 4,
          },
          // when window width is >= 992px
          1140: {
            slidesPerView: 5,
          },
          // when window width is >= 992px
          1260: {
            slidesPerView: 6,
          }
        }
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
