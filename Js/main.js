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
  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 1550) {
        jQuery('.nav-text1:after').addClass('nav-text-after-animate');
        jQuery('.nav-text2:after').addClass('nav-text-after-animate');
        jQuery('.nav-text3:after').addClass('nav-text-after-animate');
        jQuery('.nav-text4:after').addClass('nav-text-after-animate');
        jQuery('.nav-text5:after').addClass('nav-text-after-animate');
        jQuery('.nav-text6:after').addClass('nav-text-after-animate');
        jQuery('.nav-text7:after').addClass('nav-text-after-animate');
    } else {
        jQuery('.nav-text1:after').removeClass('nav-text-after-animate');
        jQuery('.nav-text2:after').removeClass('nav-text-after-animate');
        jQuery('.nav-text3:after').removeClass('nav-text-after-animate');
        jQuery('.nav-text4:after').removeClass('nav-text-after-animate');
        jQuery('.nav-text5:after').removeClass('nav-text-after-animate');
        jQuery('.nav-text6:after').removeClass('nav-text-after-animate');
        jQuery('.nav-text7:after').removeClass('nav-text-after-animate');
    }
    });
    jQuery(window).scroll(function() {
      if (jQuery(document).scrollTop() > 1550) {
          jQuery('.body').addClass('body-black');
      } else {
          jQuery('.body').removeClass('body-black');
      }
      });
      const animate = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
          // если элемент появился
          if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('text-con-anim');
            entry.target.classList.add('text-con-anim');
          }
        });
      });
      animate.observe(document.querySelector('.text-con'));
      animate.observe(document.querySelector('.text-con1'));

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

      const press = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
          // если элемент появился
          if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('block-pres-anim');
            entry.target.classList.add('block-pres-anim2');
          }
        });
      });
      press.observe(document.querySelector('.block-pres'));
      press.observe(document.querySelector('.block-pres2'));
      jQuery(window).scroll(function() {
        if (jQuery(document).scrollTop() > 60) {
            jQuery('.navigation-animation-black').addClass('navigation-animation-black-js');
        } else {
            jQuery('.navigation-animation-black').removeClass('navigation-animation-black-js');
        }
        });
        jQuery(window).scroll(function() {
          if (jQuery(document).scrollTop() > 1550) {
              jQuery('.navigation-animation-black-js').addClass('navigation-animation-white-js-anim');
          } else {
              jQuery('.navigation-animation-black-js').removeClass('navigation-animation-white-js-anim');
          }
          });
          $('summary').click(function() {
            $(this).next().slideDown(2000);
        });
        var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
            return false;
        });
        function clickRadio(param) {
          var value = document.querySelectorAll("input[type='radio'][name='" + param.name + "']");
          for (var i = 0; i < value.length; i++) {
              if (value[i] != param)
                  value[i].BeforeCheck = false;
          }
          if (param.BeforeCheck)
              param.checked = false;
          param.BeforeCheck = param.checked;
      }
      let checked = null;
      
      $('input').click(function() {
        checked = checked === this.value ? null : this.value;
        this.checked = !!checked;
      });
      let menuBtn = document.querySelector('.btn-main-radio');
      let menu = document.querySelector('.btn-main-radio2');
      
      menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
      })
      
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
    const live = new IntersectionObserver(entries => {
      // перебор записей
      entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('summary1-animation');
          entry.target.classList.add('summary2-animation');
          entry.target.classList.add('summary4-animation');
          entry.target.classList.add('summary5-animation');
          entry.target.classList.add('summary6-animation');
          entry.target.classList.add('summary7-animation');
          entry.target.classList.add('summary8-animation');
          entry.target.classList.add('summary9-animation');
          entry.target.classList.add('summary10-animation');
          entry.target.classList.add('summary11-animation');
          entry.target.classList.add('summary12-animation');
          entry.target.classList.add('summary13-animation');
          entry.target.classList.add('summary14-animation');
          entry.target.classList.add('hidden-inf-text-anim');
          entry.target.classList.add('inf-text-anim');
          entry.target.classList.add('details-anim');
          entry.target.classList.add('details-anim2');
          entry.target.classList.add('details-anim3');
        }
      });
    });
    live.observe(document.querySelector('.summary1'));
    live.observe(document.querySelector('.summary2'));
    live.observe(document.querySelector('.summary4'));
    live.observe(document.querySelector('.summary5'));
    live.observe(document.querySelector('.summary6'));
    live.observe(document.querySelector('.summary7'));
    live.observe(document.querySelector('.summary8'));
    live.observe(document.querySelector('.summary9'));
    live.observe(document.querySelector('.summary10'));
    live.observe(document.querySelector('.summary11'));
    live.observe(document.querySelector('.summary12'));
    live.observe(document.querySelector('.summary13'));
    live.observe(document.querySelector('.summary14'));
    live.observe(document.querySelector('.hidden-inf-text'));
    live.observe(document.querySelector('.inf-text'));
    live.observe(document.querySelector('.details'));
    live.observe(document.querySelector('.details2'));
    live.observe(document.querySelector('.details3'));



