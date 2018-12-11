import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mStP = state => ({
  formType: 'signup',
  errors: state.errors.session,
});

const mDtP = dispatch => ({
  processForm: user => dispatch(signup(user)),
});

export default connect(mStP, mDtP)(SessionForm);
