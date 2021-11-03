 [
        {
            category: 'Place #1',
            first: 40,
            second: 55,
            third: 60
        },
        {
            category: 'Place #2',
            first: 30,
            second: 78,
            third: 69
        },
        {
            category: 'Place #3',
            first: 27,
            second: 40,
            third: 45
        },
        {
            category: 'Place #4',
            first: 50,
            second: 33,
            third: 22
        }
    
    
    
    createSeries('first', 'The First');
    createSeries('second', 'The Second');
    createSeries('third', 'The Third');
    
    function arrangeColumns() {
    
        var series = chart.series.getIndex(0);
    
        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;
    
                var newIndex = 0;
                chart.series.each(function(series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.seriesindexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;
    
                chart.series.each(function(series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;
    
                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta
    
                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
    
    }); // end am4core.ready()
    </script>
    
    <!-- HTML -->
    <div id="chartdiv"></div>
</body>
</html>