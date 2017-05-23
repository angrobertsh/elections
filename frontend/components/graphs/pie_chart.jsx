import React from 'react';
import * as d3 from 'd3';

class PieChart extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const data = this.props.data;
  }

  render(){
    return (<svg className="piechart chart"></svg>)
  }
}

export default PieChart;
