import React from 'react';
import BarChart from '../graphs/bar_chart';
import PieChart from '../graphs/pie_chart';
import LineChart from '../graphs/line_chart';

const Display = ({filters, data, updateFilterStore, toggleParties}) => (
  data[filters.years] ? (
    <div id="display">
      <div id="year-label">{filters.years} - {data[filters.years].candidates.democrat} vs. {data[filters.years].candidates.republican}</div>
      <div id="graph-area">
        <BarChart
          data={data[filters.years]}
          voteType={filters.voteType}
          voterParties={filters.voterParties}
          click={updateFilterStore} />
        {
          filters.currentState ? (
            <div id="smaller-graphs">
              <PieChart
                data={data[filters.years]}
                year={filters.years}
                voteType={filters.voteType}
                voterParties={filters.voterParties}
                currentState={filters.currentState}
                click={toggleParties}
              />
              <LineChart
                data={data}
                voteType={filters.voteType}
                voterParties={filters.voterParties}
                currentState={filters.currentState}
              />
            </div>) : (
            <div id="state-holder">Click a State!</div>
          )
        }
      </div>
    </div>
  ) : null
)

const blah = (data, filters, toggleParties) => (
  filters.currentState ? (
    <div>
      <PieChart
        data={data[filters.years]}
        year={filters.years}
        voteType={filters.voteType}
        voterParties={filters.voterParties}
        currentState={filters.currentState}
        click={toggleParties}
      />
      <LineChart
        data={data}
        voteType={filters.voteType}
        voterParties={filters.voterParties}
        currentState={filters.currentState}
      />
    </div>) : (
    <div id="state-holder">State Info</div>
  )
)

export default Display;
