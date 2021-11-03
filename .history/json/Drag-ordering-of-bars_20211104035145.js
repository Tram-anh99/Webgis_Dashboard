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
    height: 400px;
  }
  </style>
  
  <!-- Resources -->
  <script src="https://www.amcharts.com/lib/4/core.js"></script>
  <script src="https://www.amcharts.com/lib/4/charts.js"></script>
  <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
  
  <!-- Chart code -->
  <script>
  am4core.ready(function() {
  
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.XYChart);
  
  // Add data
  var data = [
    {
      country: "Lithuania",
      research: 501.9
    },
    {
      country: "Czechia",
      research: 301.9
    },
    {
      country: "Ireland",
      research: 271.1
    },
    {
      country: "Hungary",
      research: 361.9
    },
    {
      country: "Poland",
      research: 271.1
    }
  ]