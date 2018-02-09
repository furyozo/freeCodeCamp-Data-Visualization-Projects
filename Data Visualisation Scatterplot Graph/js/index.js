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

// window on load function
window.onload = function() {
  var data = getURLData(
    "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
  );

  // get the racer data
  var coords = [];
  data.forEach(function(element) {
    coords.push({
        x: element.Seconds,
        y: element.Place
     });
  });

  // display and setup the final graph
  var ctx = document.getElementById("myChart").getContext("2d");
  var scatterChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Racers",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          data: coords
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Time in seconds"
            },
            ticks: {
              reverse: true
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Rank"
            },
            ticks: {
              reverse: true
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          title: function(tooltipItem, chartData) {
            var i = tooltipItem[0].index;
            return data[i].Name + ", " + data[i].Year + ", " + data[i].Doping;
          }
        }
      }
    }
  });
};
