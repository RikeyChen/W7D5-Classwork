import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mStP = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
});

const mDtP = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mStP, mDtP)(Greeting);
