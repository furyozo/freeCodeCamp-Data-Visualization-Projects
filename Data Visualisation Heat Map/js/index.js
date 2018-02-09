// return the data from a url specified by the url argument
function getURLData(url) {
  var result;
  $.ajax({
    async: false,
    type: "GET",
    url: url,
    dataType: "json",
    success: function(data) {
      result = data;
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert(jqXHR.status);
    }
  });
  return result;
}

function getYears(data) {
  var years = [];
  data.forEach(function(element) {
    for (var i = 0; i < data.length; i++) {
      if (years[i] == element[0]) {
        break;
      } else if (i == data.length - 1) {
        years.push(element[0]);
      }
    }
  });
  return years;
}

window.onload = function() {
  // get the URL data
  var data = getURLData(
    "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json"
  );

  // get the racer data
  var dataset = [];
  data.monthlyVariance.forEach(function(element) {
    dataset.push([
      element.year,
      element.month - 1,
      Math.round((element.variance + data.baseTemperature) * 10000) / 10000
    ]);
  });

  // get array of years measured
  var years = getYears(dataset);

  // print out chart
  Highcharts.chart("container", {
    chart: {
      type: "heatmap",
      marginTop: 48,
      marginBottom: 80,
      plotBorderWidth: 1
    },

    plotOptions: {
      series: {
        turboThreshold: 5000
      }
    },

    title: {
      text: "Monthly Global Land Surface Temperature"
    },

    xAxis: {
      categories: years
    },

    yAxis: {
      categories: [
        "January",
        "Feubruary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      title: null
    },

    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      maxColor: Highcharts.getOptions().colors[5]
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280
    },

    tooltip: {
      formatter: function() {
        return (
          "<b>" +
          this.point.value +
          "</b> °C <br><b>" +
          this.series.yAxis.categories[this.point.y] +
          " - " +
          this.point.x +
          "</b>"
        );
      }
    },

    series: [
      {
        name: "Temperature in a month",
        data: dataset,
        dataLabels: {
          enabled: false,
          color: "#000000"
        }
      }
    ]
  });
};
