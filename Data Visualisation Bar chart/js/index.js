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

window.onload = function() {

  var data = getURLData(
    "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  );

  var dates = [];
  var values = [];
  data.data.forEach(function(element) {
    dates.push(element[0]);
    values.push(element[1]);
  });

  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
      labels: dates,
      datasets: [
        {
          label: "Gross Domestic Product",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: values
        }
      ]
    },

    // Configuration options go here
    options: {}
  });

};
