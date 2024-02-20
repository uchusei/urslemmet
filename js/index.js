gsap.registerPlugin(ScrollTrigger, SplitText);

let scroll;


const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

initPageTransitions();

// Animation - First Page Load
function initLoaderShort() { 

  var tl = gsap.timeline();

  tl.set(".loading-logo .loading-logo-inner", {
		yPercent: -160,
	});

  tl.set(".loading-screen", {
    yPercent: -100,
	});

}

// Animation - First Page Load
function initLoader() { 

  var tl = gsap.timeline();

  tl.call(function() {
    scroll.stop();
  });

  tl.set(".loading-screen", {
    rotate: 5,
    scale: 1.25,
    yPercent: 0,
	});

  tl.set("html", { 
		cursor: "wait"
	});

  tl.set(".section-home-header .single-word-inner", { 
		yPercent: 125,
    rotation: 5
	});	

  tl.set(".navigation .bar", { 
		scaleX: 0
	});	

  tl.set(".loader-flex-col", { 
		yPercent: 50,
    opacity: 0
	});	

  tl.set(".header-trigger-scroll", { 
		autoAlpha: 0
	});	

  tl.set(".navigation-menu", { 
		autoAlpha: 0
	});	

  tl.set(".loading-logo .loading-logo-inner svg path", {
    opacity: 1
	});

  tl.set(".loading-logo .loading-logo-inner", {
    yPercent: 160,
    rotate: 5,
	});

  tl.to(".loading-logo .loading-logo-inner", {
		duration: 1.5,
    rotate: 0,
		yPercent: 0,
		ease: "Expo.easeInOut"
	});

  // tl.set(".loading-logo .loading-logo-inner svg path", {
  //   opacity: 0
	// },"=-.15");

  // tl.set(".loading-logo .loading-logo-inner svg path", {
  //   opacity: 1,
  //   delay: .5
	// });

  // tl.set(".loading-logo .loading-logo-inner svg path", {
  //   opacity: 0,
  //   delay: .5
	// });

  // tl.set(".loading-logo .loading-logo-inner svg path", {
  //   opacity: 1,
  //   delay: .5
	// });

  tl.to(".loading-logo .loading-logo-inner svg path", {
		duration: .33,
    opacity: 0,
		ease: "Power1.easeInOut",
    stagger: .02,
	},"=-.25");

  tl.to(".loading-logo .loading-logo-inner svg path", {
		duration: .33,
    opacity: 1,
		ease: "Power1.easeInOut",
    stagger: .02,
	});

  // tl.to(".loading-logo .loading-logo-inner svg path", {
	// 	duration: .5,
  //   opacity: 0,
	// 	ease: "Power1.easeInOut",
	// });

  // tl.to(".loading-logo .loading-logo-inner svg path", {
	// 	duration: .5,
  //   opacity: 1,
	// 	ease: "Power1.easeInOut",
	// });

  tl.to(".loading-logo .loading-logo-inner", {
		duration: 1.5,
    rotate: -5,
		yPercent: -160,
		ease: "Expo.easeInOut",
	},"=-.25");

  tl.to(".loading-screen", {
    rotate: 0.001,
    scale: 1,
		duration: 1.5,
    yPercent: -100,
		ease: "Expo.easeInOut",
	},"=-1.5");
  
  tl.set(".header-trigger-scroll", { 
		autoAlpha: 1,
    clearProps: "all"
	});

  tl.set(".navigation-menu", { 
		autoAlpha: 1,
    clearProps: "all"
	});	

  tl.set("html", { 
		cursor: "auto"
	});

  tl.call(function() {
    scroll.start();
  });

  tl.to(".navigation .bar", { 
    scaleX: 1,
    ease: "Expo.easeOut",
    duration: 2,
    clearProps: "all"
	},"=-.75");

  tl.to(".section-home-header .single-word-inner", {
    yPercent: 0,
    stagger: .075,
    rotation: 0,
    ease: "Expo.easeOut",
    duration: 2,
    clearProps: "all"
	},"=-2");

  tl.to(".loader-flex-col", {
    yPercent: 0,
    opacity: 1,
    stagger: .05,
    ease: "Expo.easeOut",
    duration: 2,
    clearProps: "all"
	},"=-1.75");

}

// Animation - Page transition In
function pageTransitionIn() {
	var tl = gsap.timeline();

  tl.set(".loading-logo .loading-logo-inner", {
		yPercent: 160,
    rotate: 5,
	});

  tl.set(".loading-screen", {
    yPercent: 100,
    rotate: 0.001,
    scale: 1
	});

  tl.set("html", { 
		cursor: "wait"
	});

  tl.to(".loading-logo .loading-logo-inner", {
		duration: 1.5,
		yPercent: 0,
    rotate: 0,
		ease: "Expo.easeInOut",
	});

  tl.to(".loading-screen", {
		duration: 1.5,
    rotate: 0.001,
    scale: 1,
    yPercent: 0,
		ease: "Expo.easeInOut",
	},"=-1.5");

  tl.to(".loading-logo .loading-logo-inner", {
		duration: 1.5,
    delay: .2,
    rotate: -5,
		yPercent: -160,
		ease: "Expo.easeInOut",
	});

  tl.set(".loading-screen", {
    rotate: 5,
    scale: 1.25,
    yPercent: 0
	},"=-1.5");

  tl.to(".loading-screen", {
		duration: 1.5,
    yPercent: -100,
    rotate: 0.001,
    scale: 1,
		ease: "Expo.easeInOut",
	},"=-1.5");

  tl.set("html", { 
		cursor: "auto"
	},"=-0.2");

  tl.set(".loading-logo .loading-logo-inner", {
		yPercent: 160,
	});

  tl.set(".loading-screen", { 
    yPercent: 100,
    rotate: 0.001,
    scale: 1
	});	
  
}


// Animation - Page transition Out
function pageTransitionOut() {
	var tl = gsap.timeline();

  tl.call(function() {
    scroll.start();
  });

}

function initPageTransitions() {

  //let scroll;

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
    // reinit locomotive scroll
    scroll.init();
    scroll.stop();
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    scroll.destroy();
  });

  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
  });


  barba.init({
    sync: true,
    debug: false,
    timeout:7000,
    transitions: [{
      name: 'default',
      once(data) {
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        initLoader();
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionIn(data.current);
        await delay(1495);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript(); 
      },
    }]
  });

  function initSmoothScroll(container) {

    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1,
      // multiplier: 1.25
    });

    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]'),
    });

    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

  }  
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


/**
 * Fire all scripts on page load
 */
function initScript() {
  select('body').classList.remove('is-loading');
  initWindowInnerheight();
  initCheckScrollUpDown();
  initCheckTouchDevice();
  initBtnMenuOpenClose();
  initScrollToLoco();
  initStickyCursorWithDelay();
  initMagneticButtons();
  initSwiperSlider();
  initLazyLoad();
  initPlayVideoInview();
  initSplitText();
  initDataBackground();
  initScrolltriggerAnimations();
}

/**
* Window Inner Height Check
*/
function initWindowInnerheight() {
    
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  $(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

}

$(window).resize(function(){
  if ($(window).width < 1024){ 
    location.reload();
  }
  else if ($(window).width > 1024){ 
    location.reload();
  }
});

/**
* Check Scroll up or Down
*/
function initCheckScrollUpDown() {
  
  var lastScrollTop = 0
  var threshold = 50;

	scroll.on('scroll', (instance) => {
    var nowScrollTop = instance.scroll.y;
    if(Math.abs(lastScrollTop - nowScrollTop) >= threshold){
      if (nowScrollTop > lastScrollTop){
        // console.log("Down");
        $("main").addClass('scrolled');
      } else {
        // console.log("Up");
        $("main").removeClass('scrolled');
      }
    lastScrollTop = nowScrollTop;
		}
	});

  barba.hooks.after(() => {
    initAnimateLocoOnScroll();
  });
}

/**
* Check touch device
*/
function initCheckTouchDevice() {
    
  function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
  };
  
  if(isTouchScreendevice()){
    $('main').addClass('touch');
    $('main').removeClass('no-touch');
  } else {
    $('main').removeClass('touch');
    $('main').addClass('no-touch');
  }
  $(window).resize(function() {
    if(isTouchScreendevice()){
       $('main').addClass('touch');
       $('main').removeClass('no-touch');
    } else {
       $('main').removeClass('touch');
       $('main').addClass('no-touch');
    }
  });

}

/**
* Hamburger Nav Open/Close
*/
function initBtnMenuOpenClose() {
    
  // Open/close navigation when clicked .btn-hamburger

  $(document).ready(function(){
    $(".navigation-trigger-open").click(function(){
      if ($(".navigation").hasClass('navigation-is-open')) {
          $(".navigation").addClass('navigation-is-closing');
          $(".navigation").removeClass('navigation-is-open');
          setTimeout(function() {
            $(".navigation").removeClass('navigation-is-closing');
          }, 950);
          scroll.start();
      } else {
          $(".navigation").addClass('navigation-is-open');
          scroll.stop();
      }
    });
    $('.navigation-trigger-close').click(function(){
      $(".navigation").addClass('navigation-is-closing');
      $(".navigation").removeClass('navigation-is-open');
      setTimeout(function() {
        $(".navigation").removeClass('navigation-is-closing');
      }, 950);
      scroll.start();
    });
  });
  $(document).keydown(function(e){
    if(e.keyCode == 27) {
      if ($(".navigation").hasClass('navigation-is-open')) {
        $(".navigation").addClass('navigation-is-closing');
        $(".navigation").removeClass('navigation-is-open');
        setTimeout(function() {
          $(".navigation").removeClass('navigation-is-closing');
        }, 950);
      scroll.start();
      } 
    }
  });

}

/**
 * ScrollTo Anchor Links
 */
 function initScrollToLoco() {

  if ($(window).width() > 1024){ 

    $("[data-target]").click(function() {
      let target = $(this).data('target');
      scroll.scrollTo(target,{
        'duration': 1200,
        'easing':[0.7, 0, 0.1, 1],
        'disableLerp': false,
        'callback': closeNav
      });
    });

    function closeNav() {
      $("main").addClass('scrolled');
    }

    const applyTarget = document.querySelector('#target-apply');
    if (window.location.href.indexOf("?target=apply") > -1) {
      setTimeout(function() {
        scroll.scrollTo(applyTarget ,{
          'duration': 1000,
          'easing':[1, 0, 0, 1],
          'disableLerp': false
        });
      }, 50);
      setTimeout(function() {
        $("main, nav").removeClass('theme-nav-primary');
        $("main, nav").removeClass('theme-nav-dark');
        $("main, nav").removeClass('theme-nav-light');
        $("main, nav").addClass('theme-nav-secondary');
      }, 700);
    }

  } else {

    var navHeight = $("nav .navigation-bar").height();
    var navHeight = navHeight - 20;

    $("[data-target]").click(function() {
      let target = $(this).data('target');
      scroll.scrollTo(target,{
        'duration': 1200,
        'easing':[0.7, 0, 0.1, 1],
        'disableLerp': false,
        'callback': closeNav,
        'offset': '-' + navHeight
      });
    });

    function closeNav() {
      $("main").addClass('scrolled');
    }

    const applyTarget = document.querySelector('#target-apply');
    if (window.location.href.indexOf("?target=apply") > -1) {
      setTimeout(function() {
        scroll.scrollTo(applyTarget ,{
          'duration': 100,
          'easing':[1, 0, 0, 1],
          'disableLerp': false,
          'offset': '-' + navHeight
        });
      }, 50);
      setTimeout(function() {
        $("main, nav").removeClass('theme-nav-primary');
        $("main, nav").removeClass('theme-nav-dark');
        $("main, nav").removeClass('theme-nav-light');
        $("main, nav").addClass('theme-nav-secondary');
      }, 700);
    }

  }
}

/**
* Sticky Cursor with Delay
*/
function initStickyCursorWithDelay() {
    
  // Sticky Cursor with delay
  // https://greensock.com/forums/topic/21161-animated-mouse-cursor/

  var posXBtn = 0
  var posYBtn = 0
  var posXImage = 0
  var posYImage = 0
  var mouseX = 0
  var mouseY = 0

  if(document.querySelector(".custom-cursor")) {
  gsap.to({}, 0.0083333333, {
    repeat: -1,
    onRepeat: function() {

      if(document.querySelector(".custom-cursor")) {
        posXBtn += (mouseX - posXBtn) / 5;
        posYBtn += (mouseY - posYBtn) / 5;
        gsap.set($(".custom-cursor"), {
          css: {
          left: posXBtn,
          top: posYBtn
          }
        });
        gsap.set($(".custom-cursor .rotate-cursor, .custom-cursor .cursor-scroll-inner svg"), {
          css: {
          rotate: (mouseX - posXBtn) / 2.5
          }
        });
      }
      if(document.querySelector(".mouse-pos-list-image")) {
        posXImage += ((mouseX / 4) - posXImage) / 6;
        posYImage += (mouseY - posYImage) / 6;
        gsap.set($(".mouse-pos-list-image"), {
          css: {
          left: posXImage,
          top: posYImage
          }
        });
      }
    }
  });
  }

  $(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Mouse Init
  $('main').on('mousemove', function() {
    if ($(".custom-cursor").hasClass('cursor-init')) {
    } else {
    $(".custom-cursor").addClass('cursor-init');
    }
  });

  // Cursor Colors
  $('.theme-primary').on('mouseover', function() {
    $('.custom-cursor').addClass('cursor-theme-primary');
    $('.custom-cursor').removeClass('cursor-theme-secondary');
    $('.custom-cursor').removeClass('cursor-theme-dark');
    $('.custom-cursor').removeClass('cursor-theme-light');
  });
  $('.theme-secondary').on('mouseover', function() {
    $('.custom-cursor').addClass('cursor-theme-secondary');
    $('.custom-cursor').removeClass('cursor-theme-light');
    $('.custom-cursor').removeClass('cursor-theme-dark');
    $('.custom-cursor').removeClass('cursor-theme-primary');
  });
  $('.theme-dark').on('mouseover', function() {
    $('.custom-cursor').addClass('cursor-theme-dark');
    $('.custom-cursor').removeClass('cursor-theme-light');
    $('.custom-cursor').removeClass('cursor-theme-secondary');
    $('.custom-cursor').removeClass('cursor-theme-primary');
  });
  $('.theme-light').on('mouseover', function() {
    $('.custom-cursor').addClass('cursor-theme-light');
    $('.custom-cursor').removeClass('cursor-theme-dark');
    $('.custom-cursor').removeClass('cursor-theme-secondary');
    $('.custom-cursor').removeClass('cursor-theme-primary');
  });

  // Link Hover
  $('a, .cursor-link-hover').on('mouseenter', function() {
    $('.custom-cursor').addClass('cursor-hover');
  });
  $('a, .cursor-link-hover').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-hover');
  });

  // Cursor Hidden
  $('.cursor-link-hidden').on('mouseenter', function() {
    $('.custom-cursor').addClass('cursor-hidden');
  });
  $('.cursor-link-hidden').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-hidden');
  });

  // Pressed
  $('main').on('mousedown', function() {
    $(".custom-cursor").addClass('pressed');
  });
  $('main').on('mouseup', function() {
    $(".custom-cursor").removeClass('pressed');
  });

  // Nav Item Hover
  $('.menu-item').on('mouseenter', function() {
    let dataNumber = $(this).find('.click').data('number');
    $('.custom-cursor').addClass('cursor-nav');
    $('.custom-cursor').find('.cursor-nav-inner h4').text(dataNumber);
  });
  $('.menu-item').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-nav');
    $('.custom-cursor').addClass("cursor-bounce").delay(100).queue(function(next){
      $(this).removeClass("cursor-bounce");
      next();
      $('.custom-cursor').addClass("cursor-bounce-after").delay(100).queue(function(next2){
        $(this).removeClass("cursor-bounce-after");
        next2();
      });
    });
  });

  $('.archive-work-grid li').on('mouseenter', function() {
    $(".mouse-pos-list-btn").addClass("hover").delay(100).queue(function(next){
      $(this).removeClass("hover");
      next();
    });
  });

  // Schedule-item (table)
  $('.table-row').on('mouseenter', function() {
    $('.custom-cursor').addClass('cursor-table');
  });
  $('.table-row').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-table');
    $('.custom-cursor').addClass("cursor-bounce").delay(100).queue(function(next){
      $(this).removeClass("cursor-bounce");
      next();
      $('.custom-cursor').addClass("cursor-bounce-after").delay(100).queue(function(next2){
        $(this).removeClass("cursor-bounce-after");
        next2();
      });
    });
  });

  // Scroll Down  Hover
  $('.scroll-down-trigger').on('mouseenter', function() {
    $('.custom-cursor').addClass('cursor-scroll');
  });
  $('.scroll-down-trigger').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-scroll');
  });
  
}

/**
* Magnetic Buttons
*/
function initMagneticButtons() {
    
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll('.magnetic');
  var strength = 100;
  
  // START : If screen is bigger as 540 px do magnetic
  if(window.innerWidth > 540){
  // Mouse Reset
  magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    $(this.parentNode).removeClass('not-active');
    magnet.addEventListener('mouseleave', function(event) {
        gsap.to( event.currentTarget, 2, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
        gsap.to( $(this).find(".btn-text"), 2, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
    });
  });

  // Mouse move
  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength");
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
      
    gsap.to( magnetButton, 2, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
    gsap.to( $(this).find(".btn-text"), 2, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
  }

  }; // END : If screen is bigger as 540 px do magnetic

}


	/**
* Swiper Slider
*/
function initSwiperSlider() {

  // Custom slider tutorial
  // Tutorial: https://arnost.medium.com/creating-custom-slide-transitions-in-swiper-js-also-with-gsap-ac71f9badf53
  // Result: https://codepen.io/paralleluniv3rse/pen/yGQjMv
  
  $('.double-slider').each(function(index){

    var sliderIndexID = 'slider-double-id-' + index;
    $(this).attr('id', sliderIndexID);

    var sliderThis = $(this);

    // Init Slider 1: Primary
    var swiperSliderMain = document.querySelector('#' + sliderIndexID + ' .swiper-container-right');
    var swiperMain = new Swiper(swiperSliderMain, {
      simulateTouch:false,
      loop: true,
      grabCursor: false,
      speed: 1200,
      navigation: {
        nextEl: '#' + sliderIndexID + ' .swiper-btn-next',
        prevEl: '#' + sliderIndexID + ' .swiper-btn-prev'
      },
      pagination: {
        el: '#' + sliderIndexID + ' .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><div class="progress">' + '</div></span>';
        },
      },
      parallax: true,
      lazy: {
        loadPrevNext: true,
      },
    });

    // GSAP Animation Progress Bar (Will trigger slider to slide)
    var tl = gsap.timeline({paused: true});

    // Retrigger Animation on Slide Change
    function singleSwiperSliderEnd() {
      swiperMain.slideNext();
      tl.restart();
    }
    
    tl.to(sliderThis.find('.progress'), {
      duration: 5,
      scaleX: 1,
      ease: "Power1.easeInOut",
      onComplete: singleSwiperSliderEnd
    });

    // Reset Progress Bar On Slide Change
    swiperMain.on("slideChange", function () {
      tl.restart();
      addSwipeTextClass();
    });

    // Pause Carousel/Progress Bar On Hover
    sliderThis.find('.swiper-pagination').on('mouseenter', function() {
      tl.pause();
    });

    sliderThis.find('.swiper-pagination').on('mouseleave', function() {
      tl.resume();
    });

    // Play/Pause Slider in viewport
    sliderThis.each(function() {
      let triggerElement = $(this);
    
      ScrollTrigger.create({
        trigger: triggerElement,
        start: '0% 120%',
        end: '100% -20%',
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });

    });

    // Init Slider 2: Secondary
    var swiperSliderSecondary = document.querySelector('#' + sliderIndexID + ' .swiper-container-left');
    var swiperSecondary = new Swiper(swiperSliderSecondary, {
      simulateTouch:false,
      loop: true,
      grabCursor: false,
      parallax: true,
      lazy: {
        loadPrevNext: true,
      },
    });
    

    // Init Slider 3: Text
    var swiperSliderText = document.querySelector('#' + sliderIndexID + ' .swiper-container-text');
    var swiperText = new Swiper(swiperSliderText, {
      simulateTouch:false,
      loop: true,
      grabCursor: false,
      parallax: true,
      effect: "fade"
    });

    function addSwipeTextClass() {
      sliderThis.find('.swiper-slide').addClass('slide-is-transitioning');
      sliderThis.find('.swiper-slide-visible').removeClass('slide-is-transitioning');
      setTimeout(function() {
        sliderThis.find('.swiper-slide').removeClass('slide-is-transitioning');
      }, 700);
    }

    // Connect Swiper Sliders
    swiperMain.controller.control = [swiperSecondary, swiperText];

	});

  

  $('.single-slider').each(function(index){

    var sliderIndexID = 'slider-single-id-' + index;
    $(this).attr('id', sliderIndexID);

    var sliderThis = $(this);

    // Init Slider 1: Primary
    var swiperSliderMain = document.querySelector('#' + sliderIndexID + ' .swiper-container-main');
    var swiperMain = new Swiper(swiperSliderMain, {
      simulateTouch: false,
      loop: true,
      grabCursor: false,
      speed: 1200,
      navigation: {
        nextEl: '#' + sliderIndexID + ' .swiper-btn-next',
        prevEl: '#' + sliderIndexID + ' .swiper-btn-prev'
      },
      pagination: {
        el: '#' + sliderIndexID + ' .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><div class="progress">' + '</div></span>';
        },
      },
      parallax: true,
      lazy: {
        loadPrevNext: true,
      },
    });


    // GSAP Animation Progress Bar (Will trigger slider to slide)
    var tl = gsap.timeline({paused: true});

    // Retrigger Animation on Slide Change
    function singleSwiperSliderEnd() {
      swiperMain.slideNext();
      tl.restart();
    }
    
    tl.to(sliderThis.find('.progress'), {
      duration: 5,
      scaleX: 1,
      ease: "Power1.easeInOut",
      onComplete: singleSwiperSliderEnd
    });

    // Reset Progress Bar On Slide Change
    swiperMain.on("slideChange", function () {
      tl.restart();
      addSwipeTextClass();
    });

    // Pause Carousel/Progress Bar On Hover
    sliderThis.find('.swiper-pagination, .swiper-btn-big').on('mouseenter', function() {
      tl.pause();
    });

    sliderThis.find('.swiper-pagination, .swiper-btn-big').on('mouseleave', function() {
      tl.resume();
    });

    // Play/Pause Slider in viewport
    sliderThis.each(function() {
      let triggerElement = $(this);
    
      ScrollTrigger.create({
        trigger: triggerElement,
        start: '0% 120%',
        end: '100% -20%',
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });

    });

    // Init Slider 2: Left
    var swiperSliderLeft = document.querySelector('#' + sliderIndexID + ' .swiper-container-left');
    var swiperLeft = new Swiper(swiperSliderLeft, {
      simulateTouch:false,
      loop: true,
      grabCursor: false,
      parallax: true,
      lazy: {
        loadPrevNext: true,
      },
    });

    // Init Slider 3: Right
    var swiperSliderRight = document.querySelector('#' + sliderIndexID + ' .swiper-container-right');
    var swiperRight = new Swiper(swiperSliderRight, {
      simulateTouch:false,
      loop: true,
      grabCursor: false,
      parallax: true,
      lazy: {
        loadPrevNext: true,
      },
    });

    // Init Slider 4: Text
    var swiperSliderText = document.querySelector('#' + sliderIndexID + ' .swiper-container-text');
    var swiperText = new Swiper(swiperSliderText, {
      simulateTouch: false,
      loop: true,
      grabCursor: false,
      parallax: true,
      effect: "fade"
    });

    function addSwipeTextClass() {
      sliderThis.find('.swiper-slide').addClass('slide-is-transitioning');
      sliderThis.find('.swiper-slide-visible').removeClass('slide-is-transitioning');
      setTimeout(function() {
        sliderThis.find('.swiper-slide').removeClass('slide-is-transitioning');
      }, 700);
    }

    // // Connect Swiper Sliders
    swiperMain.controller.control = [swiperText];
    swiperText.controller.control = [swiperLeft, swiperRight];

	});
}

/**
* Lazy Load
*/
function initLazyLoad() {
    // https://github.com/locomotivemtl/locomotive-scroll/issues/225
    // https://github.com/verlok/vanilla-lazyload
    var lazyLoadInstance = new LazyLoad({ 
      elements_selector: ".lazy",
    });
}

/**
* Play Video Inview
*/
function initPlayVideoInview() {

  let allVideoDivs = gsap.utils.toArray('.playpauze');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      scroller: document.querySelector('[data-scroll-container]'),
      trigger: videoElem,
      start: '0% 120%',
      end: '100% -20%',
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });

  });
}

/**
* GSAP Split Text
*/
function initSplitText() {

  var splitTextWords = new SplitText(".split-words", {type: "words", wordsClass: "single-word"});
  $('.split-words .single-word').wrapInner('<div class="single-word-inner">');


  var splitTextLines = new SplitText(".split-lines", {type: "lines", linesClass: "single-line"});
  $('.split-lines .single-line').wrapInner('<div class="single-line-inner">');

  // Resize reset
  // https://stackoverflow.com/questions/5489946/how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-action

  function resizedw(){
    splitTextLines.revert()
    $('.split-lines .single-line').contents().unwrap();
    setTimeout(function() {
      var splitTextLines = new SplitText(".split-lines", {type: "lines", linesClass: "single-line"});
      $('.split-lines .single-line').wrapInner('<div class="single-line-inner">');
    }, 100); 
  }

  var doit;
  window.onresize = function(){
    clearTimeout(doit);
    doit = setTimeout(resizedw, 100);
  };

}

function initDataBackground() {

  const navHeight = $("nav .navigation-bar").height();

  const sectionsDark = gsap.utils.toArray('.theme-dark');
  sectionsDark.forEach(sectionDark => {
    
    ScrollTrigger.create({
      trigger: sectionDark,
      start: () => "0% " + navHeight,
      end: '100% 0%',
      onEnter: () => functionAddDark(),
      onEnterBack: () => functionAddDark(),
      markers: false,
    });
    function functionAddDark() {
      if ($("main, nav").hasClass('theme-nav-dark')) {
      } else {
        $("main, nav").removeClass('theme-nav-primary');
        $("main, nav").removeClass('theme-nav-secondary');
        $("main, nav").removeClass('theme-nav-light');
        $("main, nav").addClass('theme-nav-dark');
      }
    };
  });

  const sectionsLight = gsap.utils.toArray('.theme-light');
  sectionsLight.forEach(sectionLight => {
    
    ScrollTrigger.create({
      trigger: sectionLight,
      start: () => "0% " + navHeight,
      end: '100% 0%',
      onEnter: () => functionAddLight(),
      onEnterBack: () => functionAddLight(),
      markers: false,
    });
    function functionAddLight() {
      if ($("main, nav").hasClass('theme-nav-light')) {
      } else {
      $("main, nav").removeClass('theme-nav-primary');
      $("main, nav").removeClass('theme-nav-secondary');
      $("main, nav").removeClass('theme-nav-dark');
      $("main, nav").addClass('theme-nav-light');
      }
    };
  });

  const sectionsPrimary = gsap.utils.toArray('.theme-primary');
  sectionsPrimary.forEach(sectionsPrimary => {
    
    ScrollTrigger.create({
      trigger: sectionsPrimary,
      start: () => "0% " + navHeight,
      end: '100% 0%',
      onEnter: () => functionAddPrimary(),
      onEnterBack: () => functionAddPrimary(),
      markers: false,
    });
    function functionAddPrimary() {
      if ($("main, nav").hasClass('theme-nav-primary')) {
      } else {
      $("main, nav").removeClass('theme-nav-dark');
      $("main, nav").removeClass('theme-nav-light');
      $("main, nav").removeClass('theme-nav-secondary');
      $("main, nav").addClass('theme-nav-primary');
      }
    };
  });

  const sectionsSecondary = gsap.utils.toArray('.theme-secondary');
  sectionsSecondary.forEach(sectionsSecondary => {
    
    ScrollTrigger.create({
      trigger: sectionsSecondary,
      start: () => "0% " + navHeight,
      end: '100% 0%',
      onEnter: () => functionAddSecondary(),
      onEnterBack: () => functionAddSecondary(),
      markers: false,
    });
    function functionAddSecondary() {
      if ($("main, nav").hasClass('theme-nav-secondary')) {
      } else {
      $("main, nav").removeClass('theme-nav-dark');
      $("main, nav").removeClass('theme-nav-light');
      $("main, nav").removeClass('theme-nav-primary');
      $("main, nav").addClass('theme-nav-secondary');
      }
    };
  });

}

/**
* Scrolltrigger Animations Desktop + Mobile
*/
function initScrolltriggerAnimations() {
    
  // All Screensizes Scrolltrigger 

  $(".section-home-animation-1").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 50%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".single-word .single-word-inner"), {
      yPercent: 115,
      stagger: .1,
      rotation: 5,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

    tl.from($(this).find(".stripe"), {
      scaleX: 0,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    },"=-2");

  });

  $(".animate-p-big").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 65%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find("p.big"), {
      stagger: .1,
      opacity: 0,
      y: "2em",
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

  });

  $(".animation-reveal-images").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 85%",
        end: "100% 0%",
        markers: false
      }
    });

    gsap.set($(this).find(".reveal"), {
      scaleY: 1
    });

    tl.to($(this).find(".reveal"), {
      scaleY: 0,
      ease: "Expo.easeOut",
      duration: 2,
      stagger: .05
    }, 0);

    tl.from($(this).find(".overlay-visual"), {
      scale: 2,
      ease: "Expo.easeOut",
      duration: 2,
      stagger: .05
    }, 0);

  });

  $(".animation-reveal-image-each").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 85%",
        end: "100% 0%",
        markers: false
      }
    });

    gsap.set($(this).find(".reveal"), {
      scaleY: 1
    });

    tl.to($(this).find(".reveal"), {
      scaleY: 0,
      ease: "Expo.easeOut",
      duration: 2,
    });

    tl.from($(this).find(".overlay-visual"), {
      scale: 2,
      ease: "Expo.easeOut",
      duration: 2,
    },"=-2");

  });

  $(".section-home-big-text").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 75%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".single-word .single-word-inner"), {
      yPercent: 115,
      stagger: .1,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

    tl.from($(this).find(".single-line .single-line-inner"), {
      yPercent: 200,
      stagger: .05,
      rotation: 5,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    },"=-2.25");

  });

  $(".section-home-big-title .row").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 90%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".single-word .single-word-inner"), {
      yPercent: 115,
      stagger: .1,
      rotation: 5,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

  });

  $(".section-home-reviewers").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 50%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".stripe"), {
      scaleX: 0,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

    tl.from($(this).find(".single-word .single-word-inner"), {
      yPercent: 115,
      stagger: .1,
      rotation: 5,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    },"=-1.5");

  });

  $(".section-home-merch-big-text .part").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 75%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".single-word-inner"), {
      yPercent: 115,
      stagger: .1,
      rotation: 5,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

  });

  $(".section-home-merch-big-text .last").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 75%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find("h4"), {
      stagger: .075,
      opacity: 0,
      y: "2em",
      ease: "Expo.easeOut",
      duration: 2.,
      clearProps: "all"
    });

  });

  $(".section-home-schedule").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 50%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".single-word .single-word-inner"), {
      yPercent: 115,
      stagger: .1,
      rotation: 5,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

  });

  $(".home-agenda .table-row").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 80%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".single-line .single-line-inner"), {
      yPercent: 200,
      rotation: 5,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all"
    });

    tl.from($(this).find(".stripe"), {
      scaleX: 0,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all",
    },"=-2");

  });

  $(".footer-bottom").each(function (index) {
    let triggerElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none none', 
        start: "0% 95%",
        end: "100% 0%",
        markers: false
      }
    });

    tl.from($(this).find(".stripe"), {
      scaleX: 0,
      ease: "Expo.easeOut",
      duration: 2,
      clearProps: "all",
    },"=-2");

  });
  




  // End All Screensizes Scrolltrigger

  // Disable GSAP on Mobile
  // Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
  ScrollTrigger.matchMedia({
    
    // Desktop Only Scrolltrigger 
    "(min-width: 721px)": function() {
  
    }, // End Desktop Only Scrolltrigger
  
    // Mobile Only Scrolltrigger
    "(max-width: 720px)": function() {

    } // End Mobile Only Scrolltrigger
  

  }); // End GSAP Matchmedia

}
