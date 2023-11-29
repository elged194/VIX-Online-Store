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
  }, 1000); //Here you can change preloader time
})(jQuery);

/*=====================================
	  jq-slider flipster
    index
	======================================*/
$(function () {
  var coverflow = $("#coverflow").flipster();
});
window.jQuery ||
  document.write('<script src="/js/jquery-1.10.2.min.js"></script>');
/*=====================================
   Item-name	  
   product-name
	======================================*/
var owl = $(".product-name .owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
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
      items: 3,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

/*=====================================
    // page item-name
    // product-name
	======================================*/
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

  // Update the HTML elements
  document.getElementById("days").innerHTML = days + "<span>Days</span>";
  document.getElementById("hours").innerHTML = hours + "<span>Hours</span>";
  document.getElementById("minutes").innerHTML =
    minutes + "<span>Minutes</span>";
  document.getElementById("seconds").innerHTML =
    seconds + "<span>Seconds</span>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<div>EXPIRED</div>";
  }
}, 1000);
/*=====================================
    End deal-of-week
======================================*/

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotel();
}
// WOW js
document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
//
