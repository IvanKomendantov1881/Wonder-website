jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 1550) {
        jQuery('.nav-text').addClass('text-animate');
        jQuery('.nav-text2').addClass('text-animate');
        jQuery('.nav-text3').addClass('text-animate');
        jQuery('.nav-text4').addClass('text-animate');
        jQuery('.nav-text5').addClass('text-animate');
        jQuery('h4').addClass('h4-animate-bl');
    } else {
        jQuery('.nav-text').removeClass('text-animate');
        jQuery('.nav-text2').removeClass('text-animate');
        jQuery('.nav-text3').removeClass('text-animate');
        jQuery('.nav-text4').removeClass('text-animate');
        jQuery('.nav-text5').removeClass('text-animate');
        jQuery('h4').removeClass('h4-animate-bl');
    }
    });
    const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
          // если элемент появился
          if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('line-animation');
            entry.target.classList.add('line-animation2');
          }
        });
      });
      observer.observe(document.querySelector('.line'));
      observer.observe(document.querySelector('.line2'));
    jQuery(window).scroll(function() {
        if (jQuery(document).scrollTop() > 60) {
            jQuery('.navigation-animation-black').addClass('navigation-animation-black-js');
        } else {
            jQuery('.navigation-animation-black').removeClass('navigation-animation-black-js');
        }
        });
        var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
            return false;
        });