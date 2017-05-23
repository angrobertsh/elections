import React from 'react';

class FilterForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      years: this.props.years,
      voterParties: this.props.voterParties,
      candidateParties: this.props.candidateParties,
      states: this.props.states,
      voteType: this.props.voteType,
      graphType: this.props.graphType,
      currentState: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
      if(e.currentTarget.type === "checkbox"){
        let newState = this.state[field];
        if(e.currentTarget.checked){
          newState.push(e.currentTarget.value);
        } else {
          let index = newState.indexOf(e.currentTarget.value);
          newState.splice(index, 1);
        }
        this.setState({[field]: newState});
      } else {
        this.setState({[field]: e.currentTarget.value})
      }
	  }
  }

  handleSubmit(e){
		e.preventDefault();
    this.props.updateFilterStore(this.state);
	}

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  render() {
    return (
      <div className="filter-form-container" ref={ filterForm => this.filterForm = filterForm }>
        <form onSubmit={this.handleSubmit} id="filter-form">
          <div id="filter-form-years">
            <header className="filter-form-years">What years would you like to see?</header>
            <input type="radio" onChange={this.update("years")} value="1900" disabled={this.state.voteType === "popular"} checked={this.state.years === "1900"} />1900
            <input type="radio" onChange={this.update("years")} value="1904" disabled={this.state.voteType === "popular"} checked={this.state.years === "1904"} />1904
            <input type="radio" onChange={this.update("years")} value="1908" disabled={this.state.voteType === "popular"} checked={this.state.years === "1908"} />1908
            <input type="radio" onChange={this.update("years")} value="1912" disabled={this.state.voteType === "popular"} checked={this.state.years === "1912"} />1912
            <input type="radio" onChange={this.update("years")} value="1916" disabled={this.state.voteType === "popular"} checked={this.state.years === "1916"} />1916
            <input type="radio" onChange={this.update("years")} value="1920" disabled={this.state.voteType === "popular"} checked={this.state.years === "1920"} />1920
            <input type="radio" onChange={this.update("years")} value="1924" disabled={this.state.voteType === "popular"} checked={this.state.years === "1924"} />1924
            <input type="radio" onChange={this.update("years")} value="1928" disabled={this.state.voteType === "popular"} checked={this.state.years === "1928"} />1928
            <input type="radio" onChange={this.update("years")} value="1932" disabled={this.state.voteType === "popular"} checked={this.state.years === "1932"} />1932
            <input type="radio" onChange={this.update("years")} value="1936" disabled={this.state.voteType === "popular"} checked={this.state.years === "1936"} />1936
            <input type="radio" onChange={this.update("years")} value="1940" disabled={this.state.voteType === "popular"} checked={this.state.years === "1940"} />1940
            <input type="radio" onChange={this.update("years")} value="1944" disabled={this.state.voteType === "popular"} checked={this.state.years === "1944"} />1944
            <input type="radio" onChange={this.update("years")} value="1948" disabled={this.state.voteType === "popular"} checked={this.state.years === "1948"} />1948
            <input type="radio" onChange={this.update("years")} value="1952" disabled={this.state.voteType === "popular"} checked={this.state.years === "1952"} />1952
            <input type="radio" onChange={this.update("years")} value="1956" disabled={this.state.voteType === "popular"} checked={this.state.years === "1956"} />1956
            <input type="radio" onChange={this.update("years")} value="1960" disabled={this.state.voteType === "popular"} checked={this.state.years === "1960"} />1960
            <input type="radio" onChange={this.update("years")} value="1964" disabled={this.state.voteType === "popular"} checked={this.state.years === "1964"} />1964
            <input type="radio" onChange={this.update("years")} value="1968" disabled={this.state.voteType === "popular"} checked={this.state.years === "1968"} />1968
            <input type="radio" onChange={this.update("years")} value="1972" disabled={this.state.voteType === "popular"} checked={this.state.years === "1972"} />1972
            <input type="radio" onChange={this.update("years")} value="1976" disabled={this.state.voteType === "popular"} checked={this.state.years === "1976"} />1976
            <input type="radio" onChange={this.update("years")} value="1980" disabled={this.state.voteType === "popular"} checked={this.state.years === "1980"} />1980
            <input type="radio" onChange={this.update("years")} value="1984" disabled={this.state.voteType === "popular"} checked={this.state.years === "1984"} />1984
            <input type="radio" onChange={this.update("years")} value="1992" checked={this.state.years === "1992"} />1992
            <input type="radio" onChange={this.update("years")} value="1996" checked={this.state.years === "1996"} />1996
            <input type="radio" onChange={this.update("years")} value="2000" checked={this.state.years === "2000"} />2000
            <input type="radio" onChange={this.update("years")} value="2004" checked={this.state.years === "2004"} />2004
            <input type="radio" onChange={this.update("years")} value="2008" checked={this.state.years === "2008"} />2008
            <input type="radio" onChange={this.update("years")} value="2012" checked={this.state.years === "2012"} />2012
          </div>
          <div id="filter-form-vote-type">
            <header className="filter-form-voteType">What type of votes would you like to see?</header>
            <input type="radio" onChange={this.update("voteType")} value="electoral" checked={this.state.voteType === "electoral"} />Electoral votes
            <input type="radio" onChange={this.update("voteType")} value="popular" disabled={parseInt(this.state.years) < 1990} checked={this.state.voteType === "popular"} />Popular votes
          </div>
          <div id="filter-form-parties">
            <header className="filter-form-parties">What votes would you like to see?</header>
            <input type="checkbox" onChange={this.update("voterParties")} value="democrat" checked={this.state.voterParties.includes("democrat")} />Democrat votes
            <input type="checkbox" onChange={this.update("voterParties")} value="republican" checked={this.state.voterParties.includes("republican")} />Republican votes
            <input type="checkbox" onChange={this.update("voterParties")} value="other" checked={this.state.voterParties.includes("other")} />Other votes
          </div>
          <button className="submit-button">Filter</button>
        </form>
      </div>
    );
  }

}

export default FilterForm;


// <input type="checkbox" className="search-form-toggle"> { this.state.food ? "Anything!" : "This!" } </input>
// <div className="search-form-days-hours">
//   <div className="search-form-hours">
//     <header className="search-form-days-header search-form-header">When would you like to eat it?</header>
//     <input type="radio" value="breakfast" className="breakfast search-form-input" onChange={this.update("hours")} checked={this.state.hours === "breakfast"} />Breakfast
//     <input type="radio" value="lunch" className="lunch search-form-input" onChange={this.update("hours")} checked={this.state.hours === "lunch"} />Lunch
//     <input type="radio" value="dinner" className="dinner search-form-input" onChange={this.update("hours")} checked={this.state.hours === "dinner"} />Dinner
//     <input type="radio" value="latenight" className="latenight search-form-input" onChange={this.update("hours")} checked={this.state.hours === "late-night"} />Late-night
//     <input type="radio" value="anytime" className="now search-form-input" onChange={this.update("hours")} checked={this.state.hours === "anytime"} />Anytime
//   </div>
//   <div className="search-form-days">
//     <header className="search-form-days">And on what day?</header>
//     <input type="checkbox" onChange={this.update("days")} value="Sunday" checked={this.state.days.includes("Sunday")} />S
//     <input type="checkbox" onChange={this.update("days")} value="Monday" checked={this.state.days.includes("Monday")} />M
//     <input type="checkbox" onChange={this.update("days")} value="Tuesday" checked={this.state.days.includes("Tuesday")} />T
//     <input type="checkbox" onChange={this.update("days")} value="Wednesday" checked={this.state.days.includes("Wednesday")} />W
//     <input type="checkbox" onChange={this.update("days")} value="Thursday" checked={this.state.days.includes("Thursday")} />T
//     <input type="checkbox" onChange={this.update("days")} value="Friday" checked={this.state.days.includes("Friday")} />F
//     <input type="checkbox" onChange={this.update("days")} value="Saturday" checked={this.state.days.includes("Saturday")} />S
//     <button className="submit-button">{ this.state.hours || this.state.days.length > 0 || this.state.food ? "This food at this time and date" : "Anything right now!" }</button>
//   </div>
// </div>
// <input type="radio" onChange={this.update("years")} value="summary" checked={this.state.years === "summary"} />Year Summary
