import React from 'react';

class FilterForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      years: this.props.years,
      voterParties: this.props.voterParties,
      voteType: this.props.voteType,
      currentState: ""
    };
    this.update = this.update.bind(this);
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
        this.setState({[field]: newState}, () => {this.props.updateFilterStore(this.state)});
      } else {
        this.setState({[field]: e.currentTarget.value}, () => {this.props.updateFilterStore(this.state)});
      }
	  }
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  render() {
    return (
      <div id="filter-form-container" ref={ filterForm => this.filterForm = filterForm }>
        <form id="filter-form">
          <div id="filter-form-years">
            <label><input type="radio" onChange={this.update("years")} value="2016" checked={this.state.years === "2016"} />2016</label>
            <label><input type="radio" onChange={this.update("years")} value="2012" checked={this.state.years === "2012"} />2012</label>
            <label><input type="radio" onChange={this.update("years")} value="2008" checked={this.state.years === "2008"} />2008</label>
            <label><input type="radio" onChange={this.update("years")} value="2004" checked={this.state.years === "2004"} />2004</label>
            <label><input type="radio" onChange={this.update("years")} value="2000" checked={this.state.years === "2000"} />2000</label>
            <label><input type="radio" onChange={this.update("years")} value="1996" checked={this.state.years === "1996"} />1996</label>
            <label><input type="radio" onChange={this.update("years")} value="1992" checked={this.state.years === "1992"} />1992</label>
            <label><input type="radio" onChange={this.update("years")} value="1984" disabled={this.state.voteType === "popular"} checked={this.state.years === "1984"} />1984</label>
            <label><input type="radio" onChange={this.update("years")} value="1980" disabled={this.state.voteType === "popular"} checked={this.state.years === "1980"} />1980</label>
            <label><input type="radio" onChange={this.update("years")} value="1976" disabled={this.state.voteType === "popular"} checked={this.state.years === "1976"} />1976</label>
            <label><input type="radio" onChange={this.update("years")} value="1972" disabled={this.state.voteType === "popular"} checked={this.state.years === "1972"} />1972</label>
            <label><input type="radio" onChange={this.update("years")} value="1968" disabled={this.state.voteType === "popular"} checked={this.state.years === "1968"} />1968</label>
            <label><input type="radio" onChange={this.update("years")} value="1964" disabled={this.state.voteType === "popular"} checked={this.state.years === "1964"} />1964</label>
            <label><input type="radio" onChange={this.update("years")} value="1960" disabled={this.state.voteType === "popular"} checked={this.state.years === "1960"} />1960</label>
            <label><input type="radio" onChange={this.update("years")} value="1956" disabled={this.state.voteType === "popular"} checked={this.state.years === "1956"} />1956</label>
            <label><input type="radio" onChange={this.update("years")} value="1952" disabled={this.state.voteType === "popular"} checked={this.state.years === "1952"} />1952</label>
            <label><input type="radio" onChange={this.update("years")} value="1948" disabled={this.state.voteType === "popular"} checked={this.state.years === "1948"} />1948</label>
            <label><input type="radio" onChange={this.update("years")} value="1944" disabled={this.state.voteType === "popular"} checked={this.state.years === "1944"} />1944</label>
            <label><input type="radio" onChange={this.update("years")} value="1940" disabled={this.state.voteType === "popular"} checked={this.state.years === "1940"} />1940</label>
            <label><input type="radio" onChange={this.update("years")} value="1936" disabled={this.state.voteType === "popular"} checked={this.state.years === "1936"} />1936</label>
            <label><input type="radio" onChange={this.update("years")} value="1932" disabled={this.state.voteType === "popular"} checked={this.state.years === "1932"} />1932</label>
            <label><input type="radio" onChange={this.update("years")} value="1928" disabled={this.state.voteType === "popular"} checked={this.state.years === "1928"} />1928</label>
            <label><input type="radio" onChange={this.update("years")} value="1924" disabled={this.state.voteType === "popular"} checked={this.state.years === "1924"} />1924</label>
            <label><input type="radio" onChange={this.update("years")} value="1920" disabled={this.state.voteType === "popular"} checked={this.state.years === "1920"} />1920</label>
            <label><input type="radio" onChange={this.update("years")} value="1916" disabled={this.state.voteType === "popular"} checked={this.state.years === "1916"} />1916</label>
            <label><input type="radio" onChange={this.update("years")} value="1912" disabled={this.state.voteType === "popular"} checked={this.state.years === "1912"} />1912</label>
            <label><input type="radio" onChange={this.update("years")} value="1908" disabled={this.state.voteType === "popular"} checked={this.state.years === "1908"} />1908</label>
            <label><input type="radio" onChange={this.update("years")} value="1904" disabled={this.state.voteType === "popular"} checked={this.state.years === "1904"} />1904</label>
            <label><input type="radio" onChange={this.update("years")} value="1900" disabled={this.state.voteType === "popular"} checked={this.state.years === "1900"} />1900</label>
          </div>
          <div id="filter-form-filters">
            <div id="filter-form-vote-type">
              <div className="filter-form-inputs">
                <label><input type="radio" onChange={this.update("voteType")} value="popular" disabled={parseInt(this.state.years) < 1990} checked={this.state.voteType === "popular"} />Popular</label>
                <label><input type="radio" onChange={this.update("voteType")} value="electoral" checked={this.state.voteType === "electoral"} />Electoral</label>
              </div>
            </div>
            <div id="filter-form-parties">
              <div className="filter-form-inputs">
                <label><input type="checkbox" onChange={this.update("voterParties")} value="democrat" checked={this.state.voterParties.includes("democrat")} />Democrat</label>
                <label><input type="checkbox" onChange={this.update("voterParties")} value="republican" checked={this.state.voterParties.includes("republican")} />Republican</label>
                <label><input type="checkbox" onChange={this.update("voterParties")} value="other" checked={this.state.voterParties.includes("other")} />Other</label>
              </div>
            </div>
          </div>
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
