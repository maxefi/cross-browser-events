(function() {

  var buttons = document.getElementsByTagName('button'),
      h1 = document.getElementsByTagName('h1'),
      h1TextD = document.querySelector('.textD'),
      h1TextN = document.querySelector('.textN'),
      newH1 = document.createElement('h1'),
      buttonDay = document.getElementById('day'),
      contentDay = document.createTextNode('DAY'),
      contentNight = document.createTextNode('NIGHT');

  var changeDayTime = function (e) {
    eventsObj.preventDefault(e);
    var elem = eventsObj.getTarget(e);

    if (elem.id === 'day') {
      document.body.className = document.body.className.replace("night", "day");
      h1TextD.className = "textD";
      h1TextN.className = "textN none";
    } else if (elem.id === 'night') {
      document.body.className = document.body.className.replace("day", "night");
      h1TextD.className = "textD none";
      h1TextN.className = "textN";
    }
  };

  for (var i = 0, len = buttons.length; i < len; i++) {
    eventsObj.addEvent(buttons[i], 'click', changeDayTime);
  }

})();
