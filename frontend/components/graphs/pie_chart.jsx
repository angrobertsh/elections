import React from 'react';
import * as d3 from 'd3';

class PieChart extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentData: {}
    }
    this.d3Render = this.d3Render.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  filterData(){
    let { currentState, data } = this.props;
    let filteredData = [];
    const parties = ["democrat", "republican", "other"];
    if(currentState){
      data = data.votes[currentState].popular;
      parties.forEach((party, idx) => {
        filteredData.push(
          {
            party: party,
            votes: data[party],
            percent: Math.round(100*(data[party]/(data["democrat"] + data["republican"] + data["other"]))),
            index: idx
          }
        )
      });
      return filteredData;
    }
  }

  d3Render(){
    const filteredData = this.filterData();
    if(filteredData){
      if(JSON.stringify(filteredData) != JSON.stringify(this.state.currentData)){
        this.setState({currentData: filteredData});

        d3.select(".piechart").selectAll("*").remove();

        const chart = d3.select(".piechart"),
            width = +chart.attr("width"),
            height = +chart.attr("height"),
            radius = Math.min(width, height) / 2,
            g = chart.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // const color = d3.scaleOrdinal(["steelblue", "red", "yellow"]);

        const pie = d3.pie()
          .sort(null)
          .value((d) => (d.percent));

        const path = d3.arc()
          .outerRadius(radius - 10)
          .innerRadius(0);

        const label = d3.arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);

        // Watch out, this takes a g for some reason
        const arc = g.selectAll(".arc")
            .data(pie(filteredData))
          .enter()
            .append("g")
            .attr("class", (d) => ("arc " + d.data.party));

        arc.append("path")
          .attr("d", path)

          // this line makes it so you don't have to specify stroke in the arc css for some reason
          // .attr("fill", (d) => (color(d.data.index)));

        arc.append("text")
          .attr("transform", (d) => ("translate(" + label.centroid(d) + ")"))
          .attr("dy", "0.35em")
          .text((d) => (d.data.votes + " votes, (" + d.data.percent + "%)"));

      }
    }
  }

  componentDidMount(){
    this.d3Render();
  }

  componentDidUpdate(){
    this.d3Render();
  }

  render(){
    return (<svg className="piechart chart" width="960" height="500"></svg>)
  }
}

export default PieChart;
