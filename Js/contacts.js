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
    function digitalClock() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
           //* добавление ведущих нулей */
          if (hours < 10) hours = "0" + hours;
          if (minutes < 10) minutes = "0" + minutes;
          if (seconds < 10) seconds = "0" + seconds;
            document.getElementById("id_clock").innerHTML = hours + ":" + minutes + ":" + seconds;
            setTimeout("digitalClock()", 1000);
       }
       function am12() {

        var date12 = new Date();
        var hours12 = date12.getHours() - (date12.getHours() >= 12 ? 12 : 0);
        var period = date12.getHours() >= 12 ? 'PM' : 'AM';
        var minutes12 = date12.getMinutes();
        var seconds12 = date12.getSeconds();
        if (minutes12 < 10) minutes12 = "0" + minutes12;
        if (seconds12 < 10) seconds12 = "0" + seconds12;
        
        document.getElementById("clock12").innerHTML = hours12 + ":" + minutes12 + ":"+ seconds12 +" " + period;
        setTimeout("am12()", 1000);
        }
        $(document).ready(function(){
            let sliderPosition = 0; // начальная позиция дорожки
            const sliderContainer = $('.slider-container');
            const sliderTrack = $('.slider-track');
            const sliderItem = $('.slider-item');
            const sliderItemWidth = sliderItem.width();
            const sliderContainerWidth = sliderContainer.width();
            // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
            // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
            const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth; 
            const sliderButtonPrev = $('.arrow-left');
            const sliderButtonNext = $('.arrow-right');
            sliderButtonPrev.on('click', function(){
                sliderPosition += sliderItemWidth; // увеличиваем отступ при нажатии назад
                // поскольку отступ будет всегда отрицательный, нужно сравнивать с нулем, 
                // чтобы исключить пустые прокрутки
                if (sliderPosition > 0) {
                    sliderPosition = 0;
                }
                sliderTrack.css('transform', `translateX(${sliderPosition}px`);
                sliderButtons();
            });
            sliderButtonNext.on('click', function(){
                sliderPosition -= sliderItemWidth;
                // так как отступы отрицательные, нужно сравнить с отрицательной длинной дорожки, 
                // чтобы исключить пустые прокрутки
                if (sliderPosition < -sliderTrackWidth) {
                    sliderPosition = -sliderTrackWidth;
                }
                sliderTrack.css('transform', `translateX(${sliderPosition}px`);
                sliderButtons();
            });
            // скрываем кнопки prev/next, когда нельзя больше крутить
            const sliderButtons = () => {
                if (sliderPosition == 0) {
                    sliderButtonPrev.hide();
                } else {
                    sliderButtonPrev.show();
                }
                if (sliderPosition == -sliderTrackWidth) {
                    sliderButtonNext.hide();
                } else {
                    sliderButtonNext.show();
                }
            };
            sliderButtons();
        });
          var $page = $('html, body');
          $('a[href*="#"]').click(function() {
              $page.animate({
                  scrollTop: $($.attr(this, 'href')).offset().top
              }, 1000);
              return false;
          });