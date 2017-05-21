import { connect } from 'react-redux';
import Display from './display';
import * as FILTER_ACTIONS from '../../actions/filter_actions';

const mapStateToProps = state => ({
  filters: state.filters,
  data: state.data
});

export default connect(
  mapStateToProps
)(Display);
