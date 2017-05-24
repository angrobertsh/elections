import { connect } from 'react-redux';
import Display from './display';
import * as FILTER_ACTIONS from '../../actions/filter_actions';

const mapStateToProps = state => ({
  filters: state.filters,
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  updateFilterStore: (filters) => dispatch(FILTER_ACTIONS.updateFilterStore(filters)),
  toggleParties: (party) => dispatch(FILTER_ACTIONS.toggleParties(party))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
