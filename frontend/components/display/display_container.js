import { connect } from 'react-redux';
import Display from './display';
import * as FILTER_ACTIONS from '../../actions/filter_actions';

const mapStateToProps = state => ({
  years: state.filters.years
});

export default connect(
  mapStateToProps
)(Display);
