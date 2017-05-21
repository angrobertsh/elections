import React from 'react';

class FilterForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      years: this.props.years,
      voterParties: this.props.voterParties,
      candidateParties: this.props.candidateParties,
      states: this.props.states,
      graphType: this.props.graphType
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


  render() {
    return (
      <div className="filter-form-container" ref={ filterForm => this.filterForm = filterForm }>
        <form onSubmit={this.handleSubmit} id="filter-form">
          <div id="filter-form-years">
            <header className="search-form-days">What years would you like to see?</header>
            <input type="checkbox" onChange={this.update("years")} value="1900" checked={this.state.years.includes("1900")} />1900
            <input type="checkbox" onChange={this.update("years")} value="1904" checked={this.state.years.includes("1904")} />1904
            <input type="checkbox" onChange={this.update("years")} value="1908" checked={this.state.years.includes("1908")} />1908
            <input type="checkbox" onChange={this.update("years")} value="1912" checked={this.state.years.includes("1912")} />1912
            <input type="checkbox" onChange={this.update("years")} value="1916" checked={this.state.years.includes("1916")} />1916
            <input type="checkbox" onChange={this.update("years")} value="1920" checked={this.state.years.includes("1920")} />1920
            <input type="checkbox" onChange={this.update("years")} value="1924" checked={this.state.years.includes("1924")} />1924
          </div>
          <button className="submit-button">Filter</button>
        </form>
      </div>
    );
  }

}

export default FilterForm;
