import * as d3 from 'd3'

export class BarChart{

     constructor(public data,public targetRef,public svgWidth,public svgHeight){
                  let margin = {top: 20, right: 20, bottom: 30, left: 100},
                      width = svgWidth - margin.left - margin.right,
                      height = svgHeight - margin.top - margin.bottom;
                      targetRef = "#"+targetRef;
                   let node = d3.select(targetRef+'>svg');
                      // console.log(node.size());
                      if(node.size()){
                         node.remove();
                      }                      
                  let svg = d3.select(targetRef).append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom);

                  let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
                      y = d3.scaleLinear().rangeRound([height, 0]),
                      g = svg.append("g")
                          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                      x.domain(data.map(function(d) { return d.country; }));
                      y.domain([0, d3.max(data, function(d) { return d.number; })]);
                      g.append("g")
                            .attr("class", "axis axis--x")
                            .attr("transform", "translate(0," + height + ")")
                            .call(d3.axisBottom(x));
                      g.append("g")
                          .attr("class", "axis axis--y")
                          .call(d3.axisLeft(y).ticks())
                          // .call(d3.axisLeft(y).tickFormat(d3.format("")))
                        .append("text")
                          .attr("transform", "rotate(-90)")
                          .attr("y", 6)
                          .attr("dy", "0.71em")
                          .attr("text-anchor", "end")
                          .text("country");
                      g.selectAll(".bar")
                          .data(data)
                          .enter().append("rect")
                            .attr("class", "bar")
                            .attr("fill","steelblue")
                            .attr("x", function(d) { return x(d.country); })
                            .attr("y", function(d) { return y(d.number); })
                            .attr("width", x.bandwidth())
                            .attr("height", function(d) { return height - y(d.number); });                          

     }
}