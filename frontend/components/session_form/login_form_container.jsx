import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mStP = state => ({
  formType: 'login',
  errors: state.errors.session,
});

const mDtP = dispatch => ({
  processForm: user => dispatch(login(user)),
});

export default connect(mStP, mDtP)(SessionForm);
