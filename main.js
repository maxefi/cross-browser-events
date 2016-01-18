(function() {

  var buttons = document.getElementsByTagName('button'),
      h1TextD = document.querySelector('.textD'),
      h1TextN = document.querySelector('.textN');

  var changeDayTime = function (e) {
    eventsObj.preventDefault(e);

    var elem = eventsObj.getTarget(e),
        colorData = elem.getAttribute('data-color');

    if (colorData === 'day') {
      document.body.className = document.body.className.replace("night", colorData);
      h1TextD.className = "textD";
      h1TextN.className = "textN none";
    } else if (colorData === 'night') {
      document.body.className = document.body.className.replace("day", colorData);
      h1TextD.className = "textD none";
      h1TextN.className = "textN";
    }
  };

  // for (var i = 0, len = buttons.length; i < len; i++) {
  //   eventsObj.addEvent(buttons[i], 'click', changeDayTime);
  // }

  eventsObj.addEvent(document, 'click', changeDayTime);

})();
