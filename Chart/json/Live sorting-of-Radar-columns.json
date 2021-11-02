<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
    <script src="https://cdn.amcharts.com/lib/4/themes/frozen.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>

    <!-- Chart code -->
    <script>
      am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_frozen);
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv", am4charts.RadarChart);

        chart.data = [
          {
            country: "USA",
            visits: 2025,
          },
          {
            country: "China",
            visits: 1882,
          },
          {
            country: "Japan",
            visits: 1809,
          },
          {
            country: "Germany",
            visits: 1322,
          },
          {
            country: "UK",
            visits: 1122,
          },
          {
            country: "France",
            visits: 1114,
          },
          {
            country: "India",
            visits: 984,
          },
          {
            country: "Spain",
            visits: 711,
          },
          {
            country: "Netherlands",
            visits: 665,
          },
          {
            country: "Russia",
            visits: 580,
          },
          {
            country: "South Korea",
            visits: 443,
          },
          {
            country: "Canada",
            visits: 441,
          },
        ];

        chart.innerRadius = am4core.percent(40);

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.grid.template.strokeOpacity = 0.08;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        valueAxis.renderer.grid.template.strokeOpacity = 0.08;

        chart.seriesContainer.zIndex = -10;

        var series = chart.series.push(new am4charts.RadarColumnSeries());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.tooltipText = "{valueY.value}";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.radarColumn.cornerRadius = 5;
        series.columns.template.radarColumn.innerCornerRadius = 0;

        chart.zoomOutButton.disabled = true;

        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", (fill, target) => {
          return chart.colors.getIndex(target.dataItem.index);
        });

        setInterval(() => {
          am4core.array.each(chart.data, (item) => {
            item.visits *= Math.random() * 0.5 + 0.5;
            item.visits += 10;
          });
          chart.invalidateRawData();
        }, 2000);

        categoryAxis.sortBySeries = series;

        chart.cursor = new am4charts.RadarCursor();
        chart.cursor.behavior = "none";
        chart.cursor.lineX.disabled = true;
        chart.cursor.lineY.disabled = true;
      }); // end am4core.ready()
    </script>

    <!-- HTML -->
    <div id="chartdiv"></div>
    amCharts
  </body>
</html>
