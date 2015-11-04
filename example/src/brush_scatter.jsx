"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ScatterBrush = require('../../lib').ScatterBrush;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv')

  var chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        symbol: "cross"
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c',
        symbol: 'diamond'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        symbol: 'triangle-down'
      }
    ],
    x = function(d) {
      var parseDate = d3.time.format("%Y%m%d").parse;
      return parseDate(d.date);
    },
    xScale = 'time';


  ReactDOM.render(
    <ScatterBrush
      data= {generalChartData}
      chartSeries = {chartSeries}
      x= {x}
      xScale= {xScale}
    />
  , document.getElementById('data_brush_scatter')
  )
})()
