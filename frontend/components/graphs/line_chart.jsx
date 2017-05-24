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
  }

  filterData(){
    let { currentState, data, voteType, voterParties } = this.props;
    let filteredData = {};
    let years = Object.keys(data);
    if(currentState){
      voterParties.forEach((party) => {filteredData[party] = []});
      years.forEach((year) => {
        if(data[year].votes[currentState][voteType]){
          voterParties.forEach((party) => {
            if(data[year].votes[currentState][voteType][party] > -1){
              filteredData[party].push(data[year].votes[currentState][voteType][party])
            }
          });
        }
      });
    }
    console.log(filteredData);
    return filteredData;
  }

  d3Render(){
    const filteredData = this.filterData();
    if(filteredData){
      if(JSON.stringify(filteredData) != JSON.stringify(this.state.currentData)){
        this.setState({currentData: filteredData});

        d3.select(".linechart").selectAll("*").remove();

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
    return (<svg className="linechart chart" width="280" height="250"></svg>)
  }
}

export default LineChart;
