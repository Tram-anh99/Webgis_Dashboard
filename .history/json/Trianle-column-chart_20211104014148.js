<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Styles -->
<style>
    #chartdiv {
      width: 100%;
      height: 500px;
    }
    
    </style>
    
    <!-- Resources -->
    <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
    
    <!-- Chart code -->
    <script>
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    chart.data = [{
      "country": "One",
      "value": 3025
    }, {
      "country": "Two",
      "value": 1882
    }, {
      "country": "Three",
      "value": 1809
    }, {
      "country": "Four",
      "value": 1322
    }, {
      "country": "Five",
      "value": 1122
    }, {
      "country": "Six",
      "value": -1114
    }, {
      "country": "Seven",
      "value": -984
    }, {
      "country": "Eight",
      "value": 711
    }, {
      "country": "Nine",
      "value": 665
    }, {
      "country": "Ten",
      "value": -580
    }, {
      "country": "Eleven",
      "value": 443
    }, {
      "country": "Twelve",
      "value": 441
    }]