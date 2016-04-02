var turf = require('turf');
var fs = require('fs');
var source = require('./source.json');

var points = [];

source.forEach(function(row) {
   var point = turf.point([parseFloat(row.longitude), parseFloat(row.latitude)]);
   point.properties = {
      state: row.state,
      city: row.city
   };
   points.push(point);
});

fs.writeFileSync(__dirname + '/index.json', JSON.stringify(turf.featurecollection(points)));
