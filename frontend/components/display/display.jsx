import React from 'react';
import BarChart from '../graphs/bar_chart';
import PieChart from '../graphs/pie_chart';

const Display = ({filters, data, updateFilterStore}) => (
  data[filters.years] ? (
    <div id="display">
      <div id="graph-area">
        <BarChart data={data[filters.years]} filters={filters} click={updateFilterStore} />
      </div>
    </div>
  ) : null
)

export default Display;
