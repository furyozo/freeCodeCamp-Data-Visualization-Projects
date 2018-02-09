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
    "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json"
  );

  var point = {
    name: "",
    radius: 0,
    centered: "",
    country: "",
    yeild: 0,
    fillKey: "",
    date: ""
  };

  var objArr = [];

  for (var i = 0; i < data.features.length; i++) {
    var x = data.features[i];
    var p = new Object();
    p.name = x.properties.name;
    p.radius = Math.sqrt(x.properties.mass * 0.0001);
    p.yeild = x.properties.mass;
    p.date = x.properties.year;
    p.latitude = x.properties.reclat;
    p.longitude = x.properties.reclong;
    p.fillKey = Math.floor(Math.random() * 6 + 1);
    objArr.push(p);
  }

  var bubble_map = new Datamap({
    element: document.getElementById("bubbles"),
    geographyConfig: {
      popupOnHover: false,
      highlightOnHover: false
    },
    fills: {
      defaultFill: "#ABDDA4",
      USA: "blue",
      RUS: "red",
      1: "#f44336",
      2: "#e91e63",
      3: "#9c27b0",
      4: "#673ab7",
      5: "#3f51b5",
      6: "#2196f3"
    }
  });
  bubble_map.bubbles(objArr, {
    popupTemplate: function(geo, data) {
      return (
        '<div class="hoverinfo"><b>Name:</b> ' +
        data.name +
        "</br> <b>Radius:</b> " +
        data.radius +
        "</br> <b>Date:</b> " +
        data.date +
        "</br> <b>Lat:</b> " +
        data.latitude +
        "</br> <b>Long:</b> " +
        data.longitude +
        "</div>"
      );
    }
  });
};
