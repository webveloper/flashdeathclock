/*globals moment */

var $time = $('time'),
    dt = Date.now(),
    et = parseInt($time.attr('datetime')) || Date.UTC(2021,0,1, 0,0,0,0),
    paused = false,
    diff, dur, rem;

if (et && et > dt) {
  var tick = function() {
    if(paused) return;

    dt = Date.now();
    diff = et - dt;
    dur = moment.duration(diff);
    rem = dur._data.years + ' years<br/>' +
          dur._data.months + ' months<br/>' +
          dur._data.days + ' days<br/>' +
          dur._data.hours + ' hours<br/>' +
          dur._data.minutes + ' minutes<br/>' +
          dur._data.seconds + ' seconds<br/>';

    $time.html(rem);
  };

  var timer = setInterval(tick, 1000);
  tick();

  // don't update DOM when tab isn't visible
  $(document).on('visibilitychange', function() {
    paused = document.hidden;
  });
}

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create','UA-103612155-1','auto');
ga('send','pageview');
//*/
