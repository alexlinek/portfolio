
// YouTube embed player =========================================

// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src',src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src','');
}

// Smooth Scrolling =============================================
$(function() {
  $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// AJAX example =================================================
$("#baconbtn").click(function(){
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: 'json'
  })
  .done(addP)
  .fail(function(){
    alert("OH NO! FAILED!");
  })
});

function addP (data){
  $("p#putstuffhere").text(data[0]);
}

//xkcd
$(document).ready(function() {
  $('#gen_xkcd').on('click', xkcdApp.fetchMonths);
  $(window).scroll(xkcdApp.scrollFunction);

});


var xkcdApp = xkcdApp || {};

xkcdApp.offsetYay = xkcdApp.offsetYay || 0;
xkcdApp.limitYay = 5;

xkcdApp.scrollFunction = function(){
// function scrollFunction() {
    var win = $(window);
    // Infinite scroll math!
    if(win.height() + win.scrollTop() >= $(document).height()) {
      xkcdApp.fetchMonths();
    }
  };


xkcdApp.fetchMonths = function(result){

  $.ajax({
    // url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd?api_key=foobar&',
    url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
    data: {
      month: 07,
      api_key: 'foobar',
      limit: xkcdApp.limitYay,
      offset: xkcdApp.offsetYay}
  })
  .done(xkcdApp.displayComics);

  xkcdApp.offsetYay += xkcdApp.limitYay;
  // or use closure

};

xkcdApp.displayComics = function(result){

  result.forEach(function(comic){
    var comicImg = comic.img;
    var comicAlt = comic.alt;
    var imgElement = $('<img>').attr('src', comicImg).attr('alt', comic.alt);
    $('#comic_results').append(imgElement);
  });
};


//npm xkcd
var request = require('request');

var HOST = "http://xkcd.com/"

module.exports = {
  get : function(number, callback) {
    getComic(number, callback);
  },

  latest : function(callback) {
    request.get({
      url     : HOST + '/info.0.json',
      json    : true
    }, function(error, response, body){
      if (error) {
        console.error("Request error: " + error);
        callback(error, null);
      } else {
        callback(error, body);
      }
    });
  },

  random : function(callback) {
    request.get({
      url     : HOST + '/info.0.json',
      json    : true
    }, function(error, response, body){
      if (error) {
        console.error("Request error: " + error);
        callback(error, null);
      } else {
        var currentNumber = body.num;
        getComic(randomIntFromInterval(1, currentNumber), callback);
      }
    });
  }
}

function getComic(number, callback) {
  request.get({
    url     : HOST + number + '/info.0.json',
    json    : true
  }, function(error, response, body){
    if (error) {
      console.error("Request error: " + error);
      callback(error, null);
    } if (response.statusCode === 404) {
      callback("Comic does not exist. Yet.", body);
    } else if (response.statusCode !== 200) {
      callback(response.statusCode, body);
    } else {
      callback(error, body);
    }
  });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
