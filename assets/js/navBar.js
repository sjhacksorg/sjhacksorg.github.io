<script>

  var btnContainer = document.getElementById("nav1");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("navbutton");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("navbutton-active");
      current[0].className = current[0].className.replace(" navbutton-active", "");
      this.className += " navbutton-active";
    });
  }

  var sec1 = $('#section1').offset().top;
  var sec2 = $('#section2').offset().top;
  var sec3 = $('#section3').offset().top;
  var sec4 = $('#section4').offset().top;

  $(document).scroll(function()
  {
    var scrollPos = $(document).scrollTop();

      if (scrollPos >= sec1 && scrollPos < sec2) {
        clearActiveNav();
      document.getElementById("navsec1").classList.add('navbutton-active');
    }
    else if (scrollPos >= sec2 && scrollPos < sec3){
      clearActiveNav();
      document.getElementById("navsec2").classList.add('navbutton-active');
    }
    else if (scrollPos >= sec3 && scrollPos < sec4){
      clearActiveNav();
      document.getElementById("navsec3").classList.add('navbutton-active');
    }
    else if (scrollPos >= sec4) {
        clearActiveNav();
      document.getElementById("navsec4").classList.add('navbutton-active');
    }

  });

  function clearActiveNav()
  {
    document.getElementById("navsec1").classList.remove('navbutton-active');
    document.getElementById("navsec2").classList.remove('navbutton-active');
    document.getElementById("navsec3").classList.remove('navbutton-active');
    document.getElementById("navsec4").classList.remove('navbutton-active');

  }

  $(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);

      if (scrollTop >= 100) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      }

    });

  });
</script>
