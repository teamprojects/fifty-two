#! /usr/bin/env node

var fs = require('fs');
var moment = require('moment');

var numWeeks = 52;
var weekOne = moment('2017-01-02');

for (var i = 0; i < numWeeks; i++) {

  var weekNumber = i > 9 ? "" + i: "0" + i;
  var start = moment().add(i, 'weeks').startOf('isoWeek')
  var end = moment().add(i, 'weeks').endOf('isoWeek')

  var pathName = weekNumber + '  ' + start.format("MMM") + ' ' + start.format("DD") + ' - ' + end.format("MMM") + ' ' + end.format("DD");
  // var path = '2017/' + pathName;
  var path = pathName;

  fs.mkdirSync(path);

}
