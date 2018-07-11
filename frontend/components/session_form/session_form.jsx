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

  render() {
    let loginSelect = 'selected';
    let signupSelect = '';
    let submitButton = 'Sign in';
    let forgotPassword = <div className='forgot-container'><a href="#" id='forgot-link'>Forgot Your Password?</a></div>;

    if (this.props.formType === 'signup'){
      [loginSelect, signupSelect] = [signupSelect, loginSelect];
      submitButton = 'Submit';
      forgotPassword = null;
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Welcome to CasaMare</h2>

          <div className='session-link-container'>
            {this.props.bothFormButton('login', 'Sign in', loginSelect)}
            {this.props.bothFormButton('signup', 'New Account', signupSelect)}
          </div>

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
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
