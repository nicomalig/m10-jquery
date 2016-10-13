// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
$(function() {
  // Select all <p> elements and assign a click event that removes the clicked element (recall `this`)
  $('p').click(function() {
    $(this).remove();
  });
  // Select the <circle>, and when it's clicked, turn it red
  $('circle').on('click',function() {
    $(this).attr('style','fill:red')
  });
  // Each time the <circle> is clicked, change its radius from 10 to 40
  $('circle').on('click',function() {
    // var currR = $(this).attr('r');
    // var newR = currR == 10 ? 40 : 40; // I think this doesn't work.. help!

    if ($('circle').attr('r') == 10) {
      $('circle').attr('r','40');
    } else {
      $('circle').attr('r', '10');
    }
  });


  // Assign a mouseenter event to the <rect> element that makes it have an opacity of .5

  // THIS IS COOLER!
  // $('rect').on('mouseenter',function() {
  //   $('rect').fadeTo("fast",'0.5');
  // });

  // CSS opacity
  $('rect').on('mouseenter',function() {
    $('rect').css('opacity','0.5');
  });

  // Assign a mouseleave event to the <rect> element that makes it have an opacity of 1

  // jQuery .fadeTo()
  // $('rect').on('mouseleave',function() {
  //   $('rect').fadeTo("fast",'1');
  // });

  // CSS opacity
  $('rect').on('mouseleave',function() {
    $('rect').css('opacity','1');
  });


});
