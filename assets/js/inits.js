
// YouTube embed player =========================================

// poster frame click event
// $(document).on('click','.js-videoPoster',function(ev) {
//   ev.preventDefault();
//   var $poster = $(this);
//   var $wrapper = $poster.closest('.js-videoWrapper');
//   videoPlay($wrapper);
// });
//
// // play the targeted video (and hide the poster frame)
// function videoPlay($wrapper) {
//   var $iframe = $wrapper.find('.js-videoIframe');
//   var src = $iframe.data('src');
//   // hide poster
//   $wrapper.addClass('videoWrapperActive');
//   // add iframe src in, starting the video
//   $iframe.attr('src',src);
// }
//
// // stop the targeted/all videos (and re-instate the poster frames)
// function videoStop($wrapper) {
//   // if we're stopping all videos on page
//   if (!$wrapper) {
//     var $wrapper = $('.js-videoWrapper');
//     var $iframe = $('.js-videoIframe');
//   // if we're stopping a particular video
//   } else {
//     var $iframe = $wrapper.find('.js-videoIframe');
//   }
//   // reveal poster
//   $wrapper.removeClass('videoWrapperActive');
//   // remove youtube link, stopping the video from playing in the background
//   $iframe.attr('src','');
// }
//
// // Smooth Scrolling =============================================
// $(function() {
//   $('a[href*="#"]').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });
//
//
// // AJAX example =================================================
// $(document).ready(function(){
//   $("#xkcdbox").hide();
// });
//
// $("#xkcdbtn").click(function(){
//   $.ajax({
//     method: "GET",
//     url: "https://xkcd.now.sh/",
//     dataType: 'json'
//   })
//   .done(showComic)
//   .fail(function(){
//     alert("ah fuck");
//   })
// });
//
// function showComic (data){
//   $("xkcdcomic").text(data[0]);
//   var comicImg = data.img;
//   var comicAlt = data.alt;
//   var comicUrl = data.url;
//   var imgElement = $('<img>').attr('src', comicImg).attr('alt', data.alt);
//   $('#xkcdbtn').hide();
//   $('#xkcdbox').show();
//   $('#xkcdcomic').append(imgElement);
//   $('#xkcdtext').append(comicAlt);
// }

// Time Ago =================================================
// $(document).ready(function() {
//   $("time.timeago").timeago();
// });

// Time Ago =================================================
$(document).ready(function() {
  $(function(){
      var kKeys = [];
      function Kpress(e){
          kKeys.push(e.keyCode);
          if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
              $(this).unbind('keydown', Kpress);
              kExec();
          }
      }
      $(document).keydown(Kpress);
  });
  function kExec(){
     $('.treasurechest').addClass('unlocked');
  };
});
