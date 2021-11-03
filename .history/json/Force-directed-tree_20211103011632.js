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
    height:550px;
    max-width:100%;
    }
    </style>
    
    <!-- Resources -->
    <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/plugins/forceDirected.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
    
    <!-- Chart code -->
    <script>
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    
    
    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    
    chart.data = [
      {
        name: "Core",
        children: [
          {
            name: "First",
            children: [
              { name: "A1", value: 100 },
              { name: "A2", value: 60 }
            ]
          },
          {
            name: "Second",
            children: [
              { name: "B1", value: 135 },
              { name: "B2", value: 98 }
            ]
          },
          {
            name: "Third",
            children: [
              {
                name: "C1",
                children: [
                  { name: "EE1", value: 130 },
                  { name: "EE2", value: 87 },
                  { name: "EE3", value: 55 }
                ]
              },
              { name: "C2", value: 148 },
              {
                name: "C3", children: [
                  { name: "CC1", value: 53 },
                  { name: "CC2", value: 30 }
                ]
              },
              { name: "C4", value: 26 }
            ]
          },
          {
            name: "Fourth",
            children: [
              { name: "D1", value: 415 },
              { name: "D2", value: 148 },
              { name: "D3", value: 89 }
            ]
          },
          {
            name: "Fifth",
            children: [
              {
                name: "E1",
                children: [
                  { name: "EE1", value: 33 },
                  { name: "EE2", value: 40 },
                  { name: "EE3", value: 89 }
                ]
              },
              {
                name: "E2",
                value: 148
              }
            ]
          }
    
        ]
      }
    ];
    
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.children = "children";
    networkSeries.nodes.template.tooltipText = "{name}:{value}";
    networkSeries.nodes.template.fillOpacity = 1;
    
    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 10;
    
    networkSeries.links.template.strokeWidth = 1;
    
    var hoverState = networkSeries.links.template.states.create("hover");
    hoverState.properties.strokeWidth = 3;
    hoverState.properties.strokeOpacity = 1;
    
    networkSeries.nodes.template.events.on("over", function(event) {
      event.target.dataItem.childLinks.each(function(link) {
        link.isHover = true;
      })
      if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = true;
      }
    
    })
    
    networkSeries.nodes.template.events.on("out", function(event) {
      event.target.dataItem.childLinks.each(function(link) {
        link.isHover = false;
      })
      if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = false;
      }
    })
    
    }); // end am4core.ready()
    </script>
    
    <!-- HTML -->
    <div id="chartdiv"></div>
</body>
</html>