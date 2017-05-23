import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentData: {}
    }
    this.d3Render = this.d3Render.bind(this);
    this.populateBars = this.populateBars.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  d3Render(){
    const filteredData = this.filterData();
    const labels = Object.keys(filteredData);

    if(JSON.stringify(this.state.currentData) != JSON.stringify(filteredData)){
      this.setState({currentData: filteredData});

      d3.select(".barchart").selectAll("*").remove();

      const margin = {top: 20, right: 30, bottom: 40, left: 55},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

      const chart = d3.select(".barchart")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // x and y are d3 scale objects/functions
      const x = d3.scaleBand()
          .rangeRound([0, width])
          .padding(0.1)
          .domain(labels);

      const y = d3.scaleLinear()
          .range([height, 0])
          .domain(([0, Math.max.apply(null, JSON.stringify(filteredData).match(/\d+/g).map(el => parseInt(el)))]));

      // x axis labels
      chart.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      chart.append("text")
        .attr("transform", "translate(" + (width/2) + " ," + (height + 35) + ")")
        .style("text-anchor", "middle")
        .text("State");

      // y axis labels
      chart.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "s"));

      chart.append("text")
        .attr("transform", "rotate(-90) translate(" + (height/-2) + " , 0)")
        .attr("dy", "-2.35em")
        .text("Votes");

      // rectangles
      labels.forEach((state) => {this.populateBars(state, x, y, filteredData[state], chart, height)});
      // Object.keys(filteredData).forEach((type) => {this.populateBars(type, x, y, filteredData[type], chart, height)})
    }
  }

  filterData(){
    const filters = this.props.filters;
    const data = this.props.data;
    const labels = Object.keys(data.votes);
    // const dataElectoralDemocratMap = labels.map((state) => ({state: state, votes: data.votes[state].electoral.democrat}));
    // const dataElectoralRepublicanMap = labels.map((state) => ({state: state, votes: data.votes[state].electoral.republican}));
    // const dataPopularDemocratMap = labels.map((state) => ({state: state, votes: data.votes[state].popular.democrat}));
    // const dataPopularRepublicanMap = labels.map((state) => ({state: state, votes: data.votes[state].popular.republican}));
    // const dataPopularOtherMap = labels.map((state) => ({state: state, votes: data.votes[state].popular.other}));
    let filteredData = {};
    filters.voterParties.forEach((party) => {
      if(data.votes["CA"][filters.voteType][party] > -1){
        labels.forEach((state) => {filteredData[state] = filteredData[state] ? filteredData[state].concat({party: party, votes: data.votes[state][filters.voteType][party]}) : [{party: party, votes: data.votes[state][filters.voteType][party]}]});
        // filteredData[party] = labels.map((state) => ({state: state, votes: data.votes[state][filters.voteType][party]}));
      }
    })

    labels.forEach((state) => {
      filteredData[state] = filteredData[state].sort((a, b) => (a.votes < b.votes ? 1 : - 1))
    })

    return filteredData;
  }

  populateBars(state, xScale, yScale, data, chart, height){
    const bars = chart.selectAll("." + state)
      .data(data)
    .enter().append("rect")
      .attr("class", (d) => ("bar " + state + " " + d.party))
      .attr("x", (d) => (xScale(state)))
      .attr("y", (d) => (yScale(d.votes)))

    bars.transition()
      .duration(200)
      .ease(d3.easeQuad)
        .attr("height", (d) => (height - yScale(d.votes)))
        .attr("width", xScale.bandwidth());

    // chart.selectAll("." + name)
    //   .data(data)
    // .enter().append("rect")
    //   .attr("class", "bar " + name)
    //   .attr("x", (d) => (xScale(d.state)))
    //   .attr("y", (d) => (yScale(d.votes)))
    //   .attr("height", (d) => (height - yScale(d.votes)))
    //   .attr("width", xScale.bandwidth());
  }

  componentDidMount(){
    this.d3Render();
  }

  componentDidUpdate(){
    this.d3Render();
  }

  render(){
    return (<svg className="barchart chart"></svg>)
  }
}

export default BarChart;
