import React from 'react';
import BarChart from '../graphs/bar_chart';
import PieChart from '../graphs/pie_chart';

const Display = ({filters, data}) => {
  return (
    <div id="display">
      <div id="graph-area">
        <BarChart data={data["2012"]} filters={filters} />
      </div>
    </div>
  )
}

export default Display;
