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

  var pause = function () {
    paused = !paused;
  };

  $(window).on({
    blur: pause,
    focus: pause
  });
}
