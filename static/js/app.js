'use strict'

/* eslint-disable */
function initCourseSections() {
  // Course Section Click Handler
  $('.sub-section h3').click(function() {
    $(this).parent().toggleClass('open').fadeIn(100)
  })
}

function initSelect() {
  $('select').material_select()
}

function initTeamCardSections() {
  // Team Card Click Handler
  $('.title-row').click(function() {
    $(this).parent().toggleClass('open').fadeIn(100)
  })
}

function initSideNav() {
  // Init side nav
  $('.button-collapse').sideNav({
    closeOnClick: true,
    menuWidth: 300
  })
}

function initTabs() {
  // Init tabs
  $('ul.tabs').tabs()
}

// Team Card click handler
function teamModalInit() {
  $('.modal').modal()
  $('.team-card').not('.modal').click(function() {
    console.log('click')
    var thisCard = this
    var cardSlug = $(thisCard).attr('data-slug')
    console.log(cardSlug)
    $('#' + cardSlug).modal('open')
    // Modal close btn is buggy, fix later
    // $('.team-card .modal-footer a').click(function() {
    //   $(`#${cardSlug}`).modal('close');
    // });
  })
}

function stickyNav() {
  // Track scroll position of .bottom-nav
  // When bottom-nav is at the top, change to position: fixed
  // Sticky submenu
  // Code below from Mark Senff https://codepen.io/senff/pen/ayGvD with very slight modifications
  // Create a clone of the menu, right next to original.
  $('.bottom-nav')
    .addClass('original')
    .clone()
    .insertAfter('.bottom-nav')
    .addClass('cloned')
    .css('position', 'fixed')
    .css('top', '83')
    .css('margin-top', '0')
    .css('z-index', '500')
    .removeClass('original')
    .hide()

  // Init scrolling
  // inPageNav();

  var scrollIntervalID = setInterval(stickIt, 10)

  function stickIt() {
    var orgElementPos = $('.original').offset()
    var orgElementTop = orgElementPos.top

    if ($(window).scrollTop() >= orgElementTop) {
      // scrolled past the original position; now only show the cloned, sticky element.

      // Cloned element should always have same left position and width as original element.
      var orgElement = $('.original')
      var coordsOrgElement = orgElement.offset()
      var leftOrgElement = coordsOrgElement.left
      var widthOrgElement = orgElement.css('width')
      $('.cloned')
        .css('left', leftOrgElement + 'px')
        .css('top', 0)
        .css('width', widthOrgElement)
        .show()
      $('.original').css('visibility', 'hidden')
    } else {
      // not scrolled past the menu; only show the original menu.
      $('.cloned').hide()
      $('.original').css('visibility', 'visible')
    }
  }

  // Copyright (c) 2016 by Mark Senff (http://codepen.io/senff/pen/ayGvD)
  // Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  //
  // The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
}
/* eslint-enable */
// Scrolls the contents of event table on click.
// TODO: Smoother scroll
// TODO: Make the scroll change by the width of the td
function hScroller () {
  $('#scrollLeft').click(function () {
    var scrollPos = $('tbody').scrollLeft()
    $('tbody').scrollLeft(scrollPos - 300)
  })

  $('#scrollRight').click(function () {
    var scrollPos = $('tbody').scrollLeft()
    $('tbody').scrollLeft(scrollPos + 300)
  })
}

// function bgScrollEffect () {
// //San Damiano Section Scroll Effect
//   let $formationSection =  $('#san-damiano'),
//     programPos = $($formationSection).offset().top,
//     programHeight = $($formationSection).height(),
//     windowWidth = $(window).width(),
//     windowHeight = window.innerHeight,
//       scrollPos;
//     //TODO: Add some timeouts so the resize and scroll functions don't run as often
//   $(window).resize(function() {
//     programPos = $($formationSection).offset().top;
//     programHeight = $($formationSection).height();
//     windowWidth = $(window).width();
//   });
//
//   $(window).scroll(function(){
//     scrollPos = $('body').scrollTop();
//
//     if (scrollPos > (programPos - windowHeight)) {
//       let posY = (scrollPos - programPos) - 400;
//       console.log(posY);
//       $('#san-damiano').css('background-position-y', `calc(100vh - ${posY}px)`);
//     }
//   });
// }

$(function () {
  initSideNav()

  // Get current year and add to footer
  var dateToday = new Date()
  var currentYear = dateToday.getFullYear()
  $('#copyright-date').text(currentYear)

  // Scroll to top btn
  $('.scroll-to-top i').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      1000
    )
    return false
  })

  if ($(window).scrollTop() > 1500) {
    $('.scroll-to-top').removeClass('slide-out').addClass('slide-in')
  } else {
    $('.scroll-to-top').removeClass('slide-in').addClass('slide-out')
  }

  function scrollToTop () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1500) {
        $('.scroll-to-top').removeClass('slide-out').addClass('slide-in')
      } else {
        $('.scroll-to-top').removeClass('slide-in').addClass('slide-out')
      }
    })
  }

  scrollToTop()

  $('.collapsible').collapsible()

  // Top nav links array
  var linkArr = $('.top-nav-links li')
  // Add index numbers as an attribute to top nav li's
  for (var i = 0; i < linkArr.length; i++) {
    $(linkArr[i]).attr('indexNum', i)
  }

  // Top nav search input
  $('nav .search-icon').click(function () {
    if ($('#search-input').hasClass('open')) {
      // Do the search
      console.log('search')
    } else {
      $('#search-input').addClass('open')
      $('#search-input input').focus()

      // Close btn
      $('#search-input svg').click(function () {
        $('#search-input').removeClass()
      })
    }
  })

  // Init tabs
  $('ul.tabs').tabs()

  // Init San Damiano section scroll effect
  // if (document.getElementById('san-damiano')) {
  //   bgScrollEffect();
  // }

  // Init horizontal scroll buttons for event table
  hScroller()
})
