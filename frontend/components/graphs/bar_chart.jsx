import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    // const data = this.props.data;
    // const labels = Object.keys(data.votes);
    // const dataElectoralDemocratMap = labels.map((state) => (data.votes[state].electoral.democrat));
    // const dataElectoralRepublicanMap = labels.map((state) => (data.votes[state].electoral.republican));
    // const dataPopularDemocratMap = labels.map((state) => (data.votes[state].popular.democrat));
    // const dataPopularRepublicanMap = labels.map((state) => (data.votes[state].popular.republican));
    // const dataPopularOtherMap = labels.map((state) => (data.votes[state].popular.other));
    //
    // const width = 960,
    //     barHeight = 20;
    //
    // const x = d3.scaleLinear()
    //     .domain([0, d3.max(dataPopularDemocratMap.concat(dataPopularRepublicanMap).concat(dataPopularOtherMap))])
    //     .range([0, width]);
    //
    // const chart = d3.select(".barchart")
    //     .attr("width", width)
    //     .attr("height", barHeight * labels.length);
    //
    // const bar = chart.selectAll("g")
    //     .data(dataPopularDemocratMap)
    //   .enter().append("g")
    //     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
    //
    // bar.append("rect")
    //     .attr("width", x)
    //     .attr("height", barHeight - 1);
    //
    // bar.append("text")
    //     .attr("x", function(d) { return x(d) - 3; })
    //     .attr("y", barHeight / 2)
    //     .attr("dy", ".35em")
    //     .text(function(d) { return d; });

    const data = this.props.data;
    const labels = Object.keys(data.votes);
    const dataElectoralDemocratMap = labels.map((state) => (data.votes[state].electoral.democrat));
    const dataElectoralRepublicanMap = labels.map((state) => (data.votes[state].electoral.republican));
    const dataPopularDemocratMap = labels.map((state) => (data.votes[state].popular.democrat));
    const dataPopularRepublicanMap = labels.map((state) => (data.votes[state].popular.republican));
    const dataPopularOtherMap = labels.map((state) => (data.votes[state].popular.other));

    const width = 960,
        height = 500,
        barWidth = width / labels.length;

    const y = d3.scaleLinear()
        .range([height, 0])
        .domain(([0, d3.max(dataPopularDemocratMap)]));

    const chart = d3.select(".barchart")
        .attr("width", width)
        .attr("height", height);

    const bar = chart.selectAll("g")
        .data(dataPopularDemocratMap)
      .enter().append("g")
        .attr("transform", (d, i) => ("translate(" + i * barWidth + ",0)"));

    bar.append("rect")
        .attr("y", (d) => ( y(d) ))
        .attr("height", (d) => ( height - y(d)) )
        .attr("width", barWidth - 1);

    bar.append("text")
        .attr("x", barWidth / 2)
        .attr("y", (d) => ( y(d) + 3 ))
        .attr("dy", ".75em")
        .text((d) => ( d ));

  }

  render(){
    return (<svg className="barchart"></svg>)
  }
}

export default BarChart;
