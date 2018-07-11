import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  linkLogIn() {
    return (
      <div className='session-link-container'>
        <a href='#' className='selected'>Sign in</a>
        {this.props.bothFormButton('signup', 'New Account')}
      </div>
    );
  }

  linkSignUp() {
    return (
        <div className='session-link-container'>
          {this.props.bothFormButton('login', 'Sign in')}
          <a href='#' className='selected'>New Account</a>
        </div>
      );
  }

  render() {
    let submitButton = 'Sign in';
    let forgotPassword = <div className='forgot-container'><a href="#" id='forgot-link'>Forgot Your Password?</a></div>;
    let formButtons = this.linkLogIn();

    if (this.props.formType === 'signup'){
      submitButton = 'Submit';
      forgotPassword = null;
      formButtons = this.linkSignUp();
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Welcome to CasaMare</h2>

          {formButtons}

          <div onClick={this.props.closeModal} className="close-x">x</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder='Enter email'
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder='Enter password'
              />
            <br/>
            <input className="session-submit" type="submit" value={submitButton} />
            {forgotPassword}
            <hr/>

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
