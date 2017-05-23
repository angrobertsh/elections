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
    const parties = ["democrat", "republican", "other"];
    let filteredData = [];
    let { currentState, data } = this.props;
    if(currentState){
      data = data.votes[currentState].popular;
      parties.forEach((party) => {
        filteredData.push(
          {
            party: party,
            votes: data[party],
            percent: data[party]/(data["democrat"] + data["republican"] + data["other"])
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

        // render it
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
    return (<svg className="piechart chart"></svg>)
  }
}

export default PieChart;
