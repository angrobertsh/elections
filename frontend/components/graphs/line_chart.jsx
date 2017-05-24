import React from 'react';
import * as d3 from 'd3';

class LineChart extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentData: {}
    }
    this.d3Render = this.d3Render.bind(this);
    this.filterData = this.filterData.bind(this);
    this.drawLines = this.drawLines.bind(this);
  }

  filterData(){
    let { currentState, data, voteType, voterParties } = this.props;
    let filteredData = {data: {}, years: [], nums: []};
    let years = Object.keys(data);
    if(currentState){
      voterParties.forEach((party) => {filteredData["data"][party] = []});
      years.forEach((year) => {
        if(data[year].votes[currentState][voteType]){
          filteredData["years"].push(new Date(year + "-02-02"));
          voterParties.forEach((party) => {
            if(data[year].votes[currentState][voteType][party] > -1){
              filteredData["nums"].push(data[year].votes[currentState][voteType][party])
              filteredData["data"][party].push({votes: data[year].votes[currentState][voteType][party], year: new Date(year + "-02-02"), president: data[year].candidates[party]})
            }
          });
        }
      });
    }
    return filteredData;
  }

  d3Render(){
    const { data, years, nums } = this.filterData();
    if(data){
      if(JSON.stringify(data) != JSON.stringify(this.state.currentData)){
        this.setState({currentData: data});

        d3.select(".linechart").selectAll("*").remove();

        if(this.props.currentState){
          const margin = {top: 20, right: 0, bottom: 40, left: 55},
              width = 250 - margin.left - margin.right,
              height = 250 - margin.top - margin.bottom;

          const chart = d3.select(".linechart")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          const x = d3.scaleTime()
              .range([0, width])
              .domain([years[0], years[years.length-1]]);

          const y = d3.scaleLinear()
              .range([height, 0])
              .domain([0, Math.max.apply(null, nums)]);

          chart.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x)
                  .ticks(5));

          chart.append("text")
            .attr("transform", "translate(" + (width/2) + " ," + (height + 35) + ")")
            .style("text-anchor", "middle")
            .text("Years");

          chart.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(10, "s"));

          chart.append("text")
            .attr("transform", "rotate(-90) translate(" + (height/-2) + " , 0)")
            .attr("dy", "-2.35em")
            .text("Votes");

          chart.append("text")
            .attr("transform", "translate(" + (width/4) + " , -5)")
            .text("Historical Trends");

          Object.keys(data).forEach((party) => {
            this.drawLines(party, data[party], x, y, chart);
          })
        }
      }
    }
  }

  drawLines(party, data, xScale, yScale, chart){
    let valueline = d3.line()
        .x((d) => ( xScale(d.year) ))
        .y((d) => ( yScale(d.votes) ));

    chart.append("path")
        .data([data])
        .attr("class", party + " line")
        .attr("d", valueline);
  }

  componentDidMount(){
    this.d3Render();
  }

  componentDidUpdate(){
    this.d3Render();
  }

  render(){
    return (<svg className="linechart chart"></svg>)
  }
}

export default LineChart;
