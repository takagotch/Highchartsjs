
<script src="https://code.highcharts.com/highcharts.js"></script>

npm install --save highcharts
bower install highcharts


requirejs([
  'path/to/highcharts.js',
  'path/to/modules/exporting.js',
  'path/to/modules/accessibility.src.js',
], function(Highcharts, exporting, accessibility){
  exporting(Highcharts);
  accessibility(Highcharts);

  Highcharts.chart('container', {
    series: [{
      data" [1,2,3,4,5]
    }]
  });
});


var Highcharts = require('highcharts');

require('highcharts/modules/exporting')(Highcharts);

Highcharts.chart('container',{
  //options  curl https://api.highcharts.com/highcharts
});


//babel
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);
Highcharts.chart('container', {
});

import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);
Highcharts.chart('container', {
});


//cmd
npm install
gulp





