window.onload = function() {

  var index = -1;

  var svg = d3.select("svg");
  var width = svg.attr("width");
  var height = svg.attr("height");

  var color = d3.scaleOrdinal(d3.schemeCategory20);

  var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.index; }))
      .force("charge", d3.forceManyBody().distanceMin(150).distanceMax(400))
      .force("center", d3.forceCenter(width, height));

  d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function(error, graph) {
    if (error) throw error;

    // setup image patterns
    var defs = svg.append("defs");
    for (var i = 0; i < graph.nodes.length; i++) {
      svg.selectAll("defs")
          .append("pattern")
            .attr("id", "image"+i)
            .attr("patternUnits", "objectBoundingBox")
            .attr("height", 30)
            .attr("width", 30)
          .append("image")
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", 30)
            .attr("width", 30)
            .attr("xlink:href",
            "https://lipis.github.io/flag-icon-css/flags/4x3/" + graph.nodes[i].code + ".svg");
    }

    var link = svg.append("g")
        .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
        .attr("stroke-width", function(d) { return 2; });

    var node = svg.append("g")
        .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
        .attr("r", 15)
        .attr("fill", function(d) {
          index ++;
          return "url(#image"+ index +")";
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("title")
        .text(function(d) { return d.country; });

    simulation
        .nodes(graph.nodes)
        .on("tick", tick);

    simulation.force("link")
        .links(graph.links);

    function tick() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    }
  });

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(1).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0).restart();
    d.fx = null;
    d.fy = null;
  }

};
