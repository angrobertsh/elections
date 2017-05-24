import { connect } from 'react-redux';
import FilterForm from './filter_form';
import * as FILTER_ACTIONS from '../../actions/filter_actions';

const mapStateToProps = state => ({
  years: state.filters.years,
  voterParties: state.filters.voterParties,
  voteType: state.filters.voteType,
});

const mapDispatchToProps = dispatch => ({
  updateFilterStore: (filter, value) => {dispatch(FILTER_ACTIONS.updateFilterStore(filter,value))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
