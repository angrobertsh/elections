## Electiongraphs

[Electiongraphs live](https://angrobertsh.github.io/elections)

This project shows graphical representations of historical U.S. election data. It utilizes React.js with a Redux architectural framework on the frontend with d3 to generate SVG graphs. The data used by this tool was from the [presidential election data module](https://github.com/brandly/presidential-election-data).

### Implementation details

Electiongraphs leverages React/Redux's store and lifecycle methods to selectively render graph SVGs with d3's rendering library. It renders the bar graphs with d3's built in `rect` function:

```javascript
const bars = chart.selectAll("." + state)
  .data(data)
.enter().append("rect")
  .attr("class", (d) => ("bar " + state + " " + d.party))
  .attr("x", (d) => (xScale(state)))
  .attr("y", (d) => (yScale(d.votes)))
  .on("click", () => {this.props.click({currentState: state})});
```

It renders the piechart with d3's built in `pie` function and svg paths.

```javascript
const pie = d3.pie()
  .sort(null)
  .value((d) => (d.percent));

  const arc = g.selectAll(".arc")
      .data(pie(filteredData))
    .enter()
      .append("g")
      .attr("class", (d) => ("arc " + d.data.party));

  arc.append("path")
    .attr("d", path)
    .on("click", (d) => {this.props.click(d.data.party)});
```

Finally, it renders line charts with d3's `line` function and svg paths.

```javascript
let valueline = d3.line()
    .x((d) => ( xScale(d.year) ))
    .y((d) => ( yScale(d.votes) ));

chart.append("path")
    .data([data])
    .attr("class", party + " line")
    .attr("d", valueline);
```

These d3 renderings are called inside of React components' ComponentDidMount and ComponentDidUpdate methods and are only called when the components receive new and different props.

### Challenges

Owing to React and JavaScript's eccentricities, it was somewhat difficult to know when data was in fact a new, different object, or an updated object. This required some fancy checking with saved data-states inside graph components, as well as writing custom reducer functions to update the store correctly.

Dealing with SVGs was also challenging owing to the different nature of its CSS and the sometimes-requirement of providing `stroke` properties when writing text, even though `font` was already declared.
