import React from 'react';
import BarChart from '../graphs/bar_chart';
import PieChart from '../graphs/pie_chart';
import LineChart from '../graphs/line_chart';

const Display = ({filters, data, updateFilterStore}) => (
  data[filters.years] ? (
    <div id="display">
      <div id="year-label">{filters.years} - {data[filters.years].candidates.democrat} vs. {data[filters.years].candidates.republican}</div>
      <div id="graph-area">
        <BarChart data={data[filters.years]} voteType={filters.voteType} voterParties={filters.voterParties} click={updateFilterStore} />
        <div id="smaller-graphs">
          <PieChart data={data[filters.years]} year={filters.years} voteType={filters.voteType} currentState={filters.currentState} />
          <LineChart data={data} voteType={filters.voteType} voterParties={filters.voterParties} currentState={filters.currentState} />
        </div>
      </div>
    </div>
  ) : null
)

export default Display;
