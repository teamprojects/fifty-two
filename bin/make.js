#! /usr/bin/env node

var mkdirp = require('mkdirp');
var d = require('date-fns');

var year = process.argv[2]

var week = new Date(parseInt(year),0,0);
var numWeeks = d.getISOWeeksInYear(week);

for (var i = 1; i <= numWeeks; i++) {

  var weekNumber = i > 9 ? "" + i: "0" + i;

  var start = d.format(d.startOfISOWeek(week), 'MMM-DD');
  var end = d.format(d.endOfISOWeek(week), 'MMM-DD');

  var dirName = weekNumber + '   ' + start + ' to ' + end;

  mkdirp.sync(year + '/' + dirName);

  week = d.addWeeks(week, 1);

}
