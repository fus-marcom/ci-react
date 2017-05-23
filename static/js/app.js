/* jshint esversion: 6 */


function stickyNav() {
  // Track scroll position of .bottom-nav
  // When bottom-nav is at the top, change to position: fixed
  //Sticky submenu
  //Code below from Mark Senff https://codepen.io/senff/pen/ayGvD with very slight modifications
  // Create a clone of the menu, right next to original.
 $('.bottom-nav').addClass('original').clone().insertAfter('.bottom-nav').addClass('cloned').css('position','fixed').css('top','83').css('margin-top','0').css('z-index','500').removeClass('original').hide();

 //Init scrolling
 //inPageNav();


 let scrollIntervalID = setInterval(stickIt, 10);


 function stickIt() {

  let orgElementPos = $('.original').offset();
  let orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.
    let orgElement = $('.original'),
    coordsOrgElement = orgElement.offset(),
    leftOrgElement = coordsOrgElement.left,
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
 }

 //Copyright (c) 2016 by Mark Senff (http://codepen.io/senff/pen/ayGvD)
 // Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 //
 // The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 //
 // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

}

//Scrolls the contents of event table on click.
//TODO: Smoother scroll
//TODO: Make the scroll change by the width of the td
function hScroller() {
  $('#scrollLeft').click(function() {
    let scrollPos = $('tbody').scrollLeft();
    $('tbody').scrollLeft(scrollPos - 300);
  });

  $('#scrollRight').click(function() {
    let scrollPos = $('tbody').scrollLeft();
    $('tbody').scrollLeft(scrollPos +300);
  });
}

function bgScrollEffect() {
  //San Damiano Section Scroll Effect
    let $formationSection =  $('#banner'),
      programPos = $($formationSection).offset().top,
      programHeight = $($formationSection).height(),
      windowWidth = $(window).width(),
        scrollPos;
      //TODO: Add some timeouts so the resize and scroll functions don't run as often
    $(window).resize(function() {
      programPos = $($formationSection).offset().top;
      programHeight = $($formationSection).height();
      windowWidth = $(window).width();
    });

    $(window).scroll(function(){
      scrollPos = $('body').scrollTop();

      if (scrollPos > (programPos - programHeight)) {
        let posY = programPos - scrollPos - programHeight;
        $('#san-damiano').css('background-position-y', `calc(${posY}px + ${windowWidth > 1540 ? '-12%' : '12%'})`);
      }

      if (scrollPos < (programPos - programHeight)) {
        $('#san-damiano').css('background-position-y', `${windowWidth > 1540 ? '-12%' : '12%'}`);
      }
    });
}


$(function() {

  //Get current year and add to footer
  let dateToday = new Date();
  let currentYear = dateToday.getFullYear();
  $('#copyright-date').text(currentYear);

  //Scroll to top btn
  $('.scroll-to-top i').click(function(){
    $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
  });

  if($(window).scrollTop() > 1500 ) {
    $('.scroll-to-top').removeClass('slide-out').addClass('slide-in');
  } else {
    $('.scroll-to-top').removeClass('slide-in').addClass('slide-out');
  }

  function scrollToTop() {

    $(window).scroll(function() {
       if($(window).scrollTop() > 1500 ) {
         $('.scroll-to-top').removeClass('slide-out').addClass('slide-in');
       } else {
         $('.scroll-to-top').removeClass('slide-in').addClass('slide-out');
       }
     });
  }

  scrollToTop();

  $('.modal').modal();

 // Close side nav on tap for mobile but not wide screens
  let windowsize = $(window).width();
  let closeOnClickVal = false;
   if (windowsize < 992) {
     closeOnClickVal = true;
   }

  //Init side nav
  $(".button-collapse").sideNav({
    closeOnClick: closeOnClickVal,
    menuWidth: 300,
  });

  // Show sideNav
  $('.top-nav-links li').not('#top-nav-search').click(function () {
    let indexNum = $(this).attr('indexNum');
    $('.button-collapse').sideNav('show');
    $('.collapsible').collapsible('open', indexNum);
    $('#sidenav-overlay').click(function () {
      //collapse all side nav items
      $('.collapsible').collapsible('close', indexNum);
    });
  });

  $('.collapsible').collapsible();

// Top nav links array
 const linkArr = $('.top-nav-links li');
// Add index numbers as an attribute to top nav li's
 for (let i = 0; i < linkArr.length; i++) {
   $(linkArr[i]).attr('indexNum', i);
 }

 //Top nav search input
 $('nav .search-icon').click(function () {
   if($('#search-input').hasClass('open')) {
     // Do the search
     console.log('search');
   } else {
     $('#search-input').addClass('open');
     $('#search-input input').focus();

     //Close btn
     $('#search-input svg').click(function () {
       $('#search-input').removeClass();
     });
   }
 });



//Team Card Click Handler
$('.title-row').click(function() {
  $(this).parent().toggleClass('open').fadeIn(100);
});

//Course Section Click Handler
$('.sub-section h3').click(function() {
  $(this).parent().toggleClass('open').fadeIn(100);
});

//Init tabs
$('ul.tabs').tabs();

//Init San Damiano section scroll effect
if (document.getElementById('san-damiano')) {
  bgScrollEffect();
}

//Init horizontal scroll buttons for event table
hScroller();

});
