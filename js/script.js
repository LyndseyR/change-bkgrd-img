//Change background image on click

$(document).ready(function(){

  $('.bkgrdOne').click(function(){
    $('.hero').css({
      'background-image': 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("images/bkgrd1.jpg")'
    });
  });

  $('.bkgrdTwo').click(function(){
    $('.hero').css({
      'background-image': 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("images/bkgrd2.jpg")'
    });
  });

  $('.bkgrdThree').click(function(){
    $('.hero').css({
      'background-image': 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("images/bkgrd3.jpg")'
    });
  });

  $('.bkgrdFour').click(function(){
    $('.hero').css({
      'background-image': 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("images/bkgrd4.jpg")'
    });
  });

});
