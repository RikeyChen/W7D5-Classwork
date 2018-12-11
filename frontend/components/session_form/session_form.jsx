import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({ username: '', password: '' });
  }

  render() {
    const formType = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    const otherFormType = this.props.formType === 'signup' ? 'Log In' : 'Sign Up';
    let formheader;
    if (this.props.formType === 'signup') {
      formheader = <h1> Sign Up </h1>;
    } else {
      formheader = <h1> Log In </h1>;
    }

    let errors;
    if (this.props.errors) {
      debugger;
      errors = (
        <ul>
          {this.props.errors.map(error => <li>{error}</li>)}
        </ul>
      );
    }

    return (
      <div>
        {/* if not logged in */}
        <Link to={`/${this.props.formType === 'signup' ? 'login' : 'signup'}`}>{otherFormType}</Link>
        <form onSubmit={this.handleSubmit}>
          {formheader}
          <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
          <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          <input type="submit" value={formType} />
        </form>
        {errors}

        {/* else
          <Redirect to='/' />
        */}
      </div>
    );
  }
}

export default SessionForm;
