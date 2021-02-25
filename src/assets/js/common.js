$(document).ready(function(){
    // START FOR MOBILE NAV CANVAS
    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');

    var defaultOptions = {
      disableAt: 992,
      customToggle: $toggle,
      levelSpacing: 40,
      navTitle: 'All Categories',
      levelTitles: true,
      levelTitleAsBack: true,
      pushContent: '',
      insertClose: false
    };

    // call our plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);

    // add new items to original nav
    $main_nav.find('li.add').children('a').on('click', function() {
      var $this = $(this);
      var $li = $this.parent();
      var items = eval('(' + $this.attr('data-add') + ')');

      $li.before('<li class="new"><a href="#">'+items[0]+'</a></li>');

      items.shift();

      if (!items.length) {
        $li.remove();
      }
      else {
        $this.attr('data-add', JSON.stringify(items));
      }

      Nav.update(true);
    });

    // demo settings update
    const update = (settings) => {
      if (Nav.isOpen()) {
        Nav.on('close.once', function() {
          Nav.update(settings);
          Nav.open();
        });

        Nav.close();
      }
      else {
        Nav.update(settings);
      }
    };

    $('.actions').find('a').on('click', function(e) {
      e.preventDefault();

      var $this = $(this).addClass('active');
      var $siblings = $this.parent().siblings().children('a').removeClass('active');
      var settings = eval('(' + $this.data('demo') + ')');

      update(settings);
    });

    $('.actions').find('input').on('change', function() {
      var $this = $(this);
      var settings = eval('(' + $this.data('demo') + ')');

      if ($this.is(':checked')) {
        update(settings);
      }
      else {
        var removeData = {};
        $.each(settings, function(index, value) {
          removeData[index] = false;
        });

        update(removeData);
      }
    });
    // END FOR MOBILE NAV CANVAS

		// START FOR SCROLL TOP AND BOTTOM ANIMATED
  	 WOW.prototype.addBox = function(element) {
	    this.boxes.push(element);
	  };

	  // Init WOW.js and get instance
	  var wow = new WOW();
	  wow.init();

	  // Attach scrollSpy to .wow elements for detect view exit events,
	  // then reset elements and add again for animation
	  $('.wow').on('scrollSpy:exit', function() {
	    $(this).css({
	      'visibility': 'hidden',
	      'animation-name': 'none'
	    }).removeClass('animate__animated');
	    wow.addBox(this);
	  }).scrollSpy();
  	// END FOR SCROLL TOP AND BOTTOM ANIMATED 

  	// START FOR BACK TOP SCROLL
  	$(window).scroll(function(){
  		var height = $(window).height();
  		// console.log(height);
  		if($(this).scrollTop()>height)
  		{
  			$(".backtop").fadeIn();
  		}
  		else
  		{
  			$(".backtop").fadeOut();	
  		}
  	});

  	$(".backtop").on("click",function(){
  		$("html,body").animate({scrollTop:1},1000);
  	});
  	// END FOR BACK TOP SCROLL

    // STICKY HEADER START
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });
     $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".menu_desktop").addClass("menu_desk_sticky");
        } else {
            $(".menu_desktop").removeClass("menu_desk_sticky");
        }
    });
    // STICKY HEADER END


    // START INCREMENT - DECREMENT QUANTITY
     // This button will increment the value
    $('.btn_plus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".btn_minus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // END INCREMENT - DECREMENT QUANTIY

    // START SLIDETOGGLE TOP NAVIGATION DESKTOP
    $("#btn_desk_hamburger").click(function(){
      $("#menu_desktop").toggleClass('menu_desktop_open');
    });
    // END SLIDETOGGLE TOP NAVIGATION DESKTOP

    // START FOR MEGAMENU
    $(".list_menu .dropdown").mouseenter(function(){
      $(".megamenu",this).addClass("megamenu_open");
    });
    $(".list_menu .dropdown").mouseleave(function(){
      $(".megamenu",this).removeClass("megamenu_open");
    });
    // END FOR MEGAMENU

    // START FOR SIZE ACTIVE
    $(".size_block .list_size li a").click(function(){
      $(".size_block .list_size li a").removeClass("active");
      $(this).addClass("active");
    });
    // END FOR SIZE ACTIVE


	// START STAR RATING FOR EACH DEVICE VIEW
	$('.starRating span').click(function(){
	    $(this).siblings().removeClass('active');
	    $(this).addClass('active');
	    $(this).parent().addClass('starRated');
	});
  	// END STAR RATRING FOR EACH DEVICE VIEW	

  	// START FOR COUNTER TIMER
  	var myDate = new Date();
	  myDate.setDate(myDate.getDate() + 2);
    $("#countdown").countdown(myDate, function (event) {
        $(this).html(
            event.strftime(
                '<div class="timer-wrapper"><div class="time">%D</div><span class="text">Days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">Hours</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Minutes</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Seconds</span></div>'
            )
        );
    });
  	// END FOR COUNTER TIMER

   // START FOR PRODUCT IMAGE SLIDER FOR MOBILE
    $('#product_img_slider').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      fade: true,
      cssEase: 'linear',
      nav:false,
      autoplay:true,
      autoplaySpeed:2000
    });
    // END FOR PRODUCT IMAGE SLIDER FOR MOBILE

    // START FOR CUSTOM SCROLLBAR VERTICAL
    if($(window).width()>991){
      $("#rating_scrollbar").mCustomScrollbar({});
    }
    // END FOR CUSTOM SCROLLBAR VERITCAL

   // START FOR PRODUCT IMAGE ZOOM ROLL MOUSE FOR DESKTOP
    $('.show').zoomImage();
    $('.show-small-img:first-of-type').css({'border': 'solid 1px #951b25', 'padding': '2px'})
    $('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
    $('.show-small-img').click(function () {
      $('#show-img').attr('src', $(this).attr('src'))
      $('#big-img').attr('src', $(this).attr('src'))
      $(this).attr('alt', 'now').siblings().removeAttr('alt')
      $(this).css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
      if ($('#small-img-roll').children().length > 4) {
        if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
          $('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
        } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
          $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
        } else {
          $('#small-img-roll').css('left', '0')
        }
      }
    })
    // 点击 '>' 下一张
    $('#next-img').click(function (){
      $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
      $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
      $(".show-small-img[alt='now']").next().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
      $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
      if ($('#small-img-roll').children().length > 4) {
        if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
          $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
        } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
          $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
        } else {
          $('#small-img-roll').css('left', '0')
        }
      }
    })
    // 点击 '<' 上一张
    $('#prev-img').click(function (){
      $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
      $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
      $(".show-small-img[alt='now']").prev().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
      $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
      if ($('#small-img-roll').children().length > 4) {
        if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
          $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
        } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
          $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
        } else {
          $('#small-img-roll').css('left', '0')
        }
      }
    });
    // END FOR PRODUCT IMAGE ZOOM ROLL MOUSE FOR DESKTOP
});