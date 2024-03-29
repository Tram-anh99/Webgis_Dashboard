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
      height: 600px;
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
    
    var data = [];
    var value1 = 100;
    var value2 = 200;
    var value3 = 400;
    
    var names = ["Raina",
      "Demarcus",
      "Carlo",
      "Jacinda",
      "Richie",
      "Antony",
      "Amada",
      "Idalia",
      "Janella",
      "Marla",
      "Curtis",
      "Shellie",
      "Meggan",
      "Nathanael",
      "Jannette",
      "Tyrell",
      "Sheena",
      "Maranda",
      "Briana"
    ];
    
    
    for (var i = 0; i < names.length; i++) {
      value1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      value2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      value3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      data.push({ category: names[i], value1: value1, value2:value2, value3:value3 });
    }
    
    var interfaceColors = new am4core.InterfaceColorSet();
    
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    
    chart.data = data;
    // the following line makes value axes to be arranged vertically.
    chart.bottomAxesContainer.layout = "horizontal";
    chart.bottomAxesContainer.reverseOrder = true;
    
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.stroke = interfaceColors.getFor("background");
    categoryAxis.renderer.grid.template.strokeOpacity = 1;
    categoryAxis.renderer.grid.template.location = 1;
    categoryAxis.renderer.minGridDistance = 20;
    
    var valueAxis1 = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis1.tooltip.disabled = true;
    valueAxis1.renderer.baseGrid.disabled = true;
    valueAxis1.marginRight = 30;
    valueAxis1.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
    valueAxis1.renderer.gridContainer.background.fillOpacity = 0.05;
    valueAxis1.renderer.grid.template.stroke = interfaceColors.getFor("background");
    valueAxis1.renderer.grid.template.strokeOpacity = 1;
    valueAxis1.title.text = "Axis 1";
    
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.categoryY = "category";
    series1.dataFields.valueX = "value1";
    series1.xAxis = valueAxis1;
    series1.name = "Series 1";
    var bullet1 = series1.bullets.push(new am4charts.CircleBullet());
    bullet1.tooltipText = "{valueX.value}";
    
    var valueAxis2 = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    valueAxis2.renderer.baseGrid.disabled = true;
    valueAxis2.marginRight = 30;
    valueAxis2.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
    valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
    valueAxis2.renderer.grid.template.stroke = interfaceColors.getFor("background");
    valueAxis2.renderer.grid.template.strokeOpacity = 1;
    valueAxis2.title.text = "Axis 2";
    
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.categoryY = "category";
    series2.dataFields.valueX = "value2";
    series2.xAxis = valueAxis2;
    series2.name = "Series 2";
    var bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.fillOpacity = 0;
    bullet2.strokeOpacity = 0;
    bullet2.tooltipText = "{valueX.value}";
    
    var valueAxis3 = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis3.tooltip.disabled = true;
    valueAxis3.renderer.baseGrid.disabled = true;
    valueAxis3.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
    valueAxis3.renderer.gridContainer.background.fillOpacity = 0.05;
    valueAxis3.renderer.grid.template.stroke = interfaceColors.getFor("background");
    valueAxis3.renderer.grid.template.strokeOpacity = 1;
    valueAxis3.title.text = "Axis 3";
    
    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.categoryY = "category";
    series3.dataFields.valueX = "value3";
    series3.xAxis = valueAxis3;
    series3.name = "Series 3";
    var bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.tooltipText = "{valueX.value}";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";
    
    var scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY = scrollbarY;
    
    }); // end am4core.ready()
    </script>
    
    <!-- HTML -->
    <div id="chartdiv"></div>
</body>
</html>