/* 
=========================================
[End Activation Code]
=========================================*/
(function ($) {
  "use strict";
  $(document).on("ready", function () {
    /*====================================
			Mobile Menu
		======================================*/
    $(".menu").slicknav({
      prependTo: ".mobile-nav",
      duration: 300,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      closeOnClick: true,
    });

    /*====================================
		03. Sticky Header JS
		======================================*/
    jQuery(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
    });

    /*=======================
		  Search JS JS
		=========================*/
    $(".top-search a").on("click", function () {
      $(".search-top").toggleClass("active");
    });

    /*=======================
		  Slider Range JS
		=========================*/
    $(function () {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [120, 250],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
      });
      $("#amount").val(
        "$" +
          $("#slider-range").slider("values", 0) +
          " - $" +
          $("#slider-range").slider("values", 1)
      );
    });

    /*=======================
		  Home Slider JS
		=========================*/
    $(".home-slider").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplayHoverPause: true,
      loop: true,
      nav: true,
      merge: true,
      dots: false,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1170: {
          items: 4,
        },
      },
    });

    /*===========================
		  Quick View Slider JS
		=============================*/
    $(".quickview-slider-active").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      nav: true,
      loop: true,
      merge: true,
      dots: false,
      navText: [
        '<i class=" ti-arrow-left"></i>',
        '<i class=" ti-arrow-right"></i>',
      ],
    });

    /*===========================
		  Home Slider 4 JS
		=============================*/
    $(".home-slider-4").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      nav: true,
      loop: true,
      merge: true,
      dots: false,
      navText: [
        '<i class=" ti-arrow-left"></i>',
        '<i class=" ti-arrow-right"></i>',
      ],
    });

    /*====================================
		14. CountDown
		======================================*/
    $("[data-countdown]").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        $this.html(
          event.strftime(
            '<div class="cdown"><span class="days"><strong>%-D</strong><p>Days.</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES.</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS.</p></span></div>'
          )
        );
      });
    });

    /*====================================
		16. Flex Slider JS
		======================================*/
    (function ($) {
      "use strict";
      $(".flexslider-thumbnails").flexslider({
        animation: "slide",
        controlNav: "thumbnails",
      });
    })(jQuery);

    /*====================================
		  Cart Plus Minus Button
		======================================*/
    var CartPlusMinus = $(".cart-plus-minus");
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });

    /*=======================
		  Extra Scroll JS
		=========================*/
    $(".scroll").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 0,
          },
          900
        );
      e.preventDefault();
    });

    /*===============================
		10. Checkbox JS
		=================================*/
    $('input[type="checkbox"]').change(function () {
      if ($(this).is(":checked")) {
        $(this).parent("label").addClass("checked");
      } else {
        $(this).parent("label").removeClass("checked");
      }
    });

    /*==================================
		 12. Product page Quantity Counter
		 ===================================*/
    $(".qty-box .quantity-right-plus").on("click", function () {
      var $qty = $(".qty-box .input-number");
      var currentVal = parseInt($qty.val(), 10);
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    });
    $(".qty-box .quantity-left-minus").on("click", function () {
      var $qty = $(".qty-box .input-number");
      var currentVal = parseInt($qty.val(), 10);
      if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
      }
    });

    /*=====================================
		15.  Video Popup JS
		======================================*/
    $(".video-popup").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
    });

    /*====================================
			Scroll Up JS
		======================================*/
    $.scrollUp({
      scrollText: '<span><i class="fa fa-angle-up"></i></span>',
      easingType: "easeInOutExpo",
      scrollSpeed: 900,
      animation: "fade",
    });
  });

  /*====================================
	18. Nice Select JS
	======================================*/
  $("select").niceSelect();

  /*=====================================
	 Others JS
	======================================*/
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [0, 500],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });

  /*=====================================
	  Preloader JS
	======================================*/
  //After 2s preloader is fadeOut
  $(".preloader").delay(500).fadeOut("slow");
  setTimeout(function () {
    //After 2s, the no-scroll class of the body will be removed
    $("body").removeClass("no-scroll");
  }, 500); //Here you can change preloader time
})(jQuery);

/*=====================================
	  jq-slider flipster
	======================================*/

$(function () {
  var coverflow = $("#coverflow").flipster();
});

/*=====================================
   index	  
   Women Banner & Reviews
	======================================*/
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});
/*=====================================
	  img item-name
	======================================*/

// ***************//

let imgs = document.querySelectorAll(".item-img img");
let slider = document.querySelector(".figure img");
imgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    slider.src = e.target.src;
  });
});

/*=====================================
	  //cart page
     //Shopping Summery 
     //Remove a table from the list within the cart page in Shopping Summery 
	======================================*/

const close = document.querySelectorAll("#remove-icon");
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", () => {
    close[i].parentElement.style.display = "none";
  });
}
// inputText.value = "";

/*=====================================
	  //MyAccount page
    //class name Account
	======================================*/
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("Account");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

/*=====================================
	  //MyAccount page
    //class name Account
	======================================*/
// function openCity(Reviews) {
//   var i;
//   var x = document.getElementsByClassName("Yuor-Reviews");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   document.getElementById(Reviews).style.display = "block";
// }

/*=====================================
	  //page index
    //class name deal-of-week
	======================================*/

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = `
  //  ${days } :  ${hours}  :  ${minutes } :  ${seconds}`;
  document.getElementById("d").innerText = days;
  document.getElementById("h").innerText = hours;
  document.getElementById("m").innerText = minutes;
  document.getElementById("s").innerText = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("d", "h", "m", "s").innerHTML = "EXPIRED";
  }
}, 1000);

// ************************
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotel();
}
