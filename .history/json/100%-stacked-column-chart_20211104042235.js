// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <!-- Styles -->
// <style>
//     #chartdiv {
//       width: 100%;
//       height: 500px;
//     }
    
//     </style>
    
//     <!-- Resources -->
//     <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
//     <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
//     <script src="https://cdn.amcharts.com/lib/4/themes/kelly.js"></script>
//     <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
    
//     <!-- Chart code -->
//     <script>
//     am4core.ready(function() {
    
//     // Themes begin
//     am4core.useTheme(am4themes_kelly);
//     am4core.useTheme(am4themes_animated);
//     // Themes end
    
//     var chart = am4core.create("chartdiv", am4charts.XYChart);
//     chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        category: "One",
        value1: 1,
        value2: 5,
        value3: 3
      },
      {
        category: "Two",
        value1: 2,
        value2: 5,
        value3: 3
      },
      {
        category: "Three",
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: "Four",
        value1: 4,
        value2: 5,
        value3: 6
      },
      {
        category: "Five",
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: "Six",
        value1: 2,
        value2: 13,
        value3: 1
      }
    ]