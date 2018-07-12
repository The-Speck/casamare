import React from 'react';
import UserSettings from './user_settings';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <a href='#' onClick={() => openModal('login')}>Sign in</a>
      <span>&nbsp;or&nbsp;</span>
      <a href='#' onClick={() => openModal('signup')}>Join</a>
    </nav>
  );
  const personalGreeting = () => {
    const regex = /^([^@]+)/;
    const name = regex.exec(currentUser.email)[0];

    return (
      <div className="user-tooltip">
        My Casa
        <UserSettings logout={logout} />
      </div>
    );
  };

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;

// <h2 className="header-name">Welcome, {name}!</h2>
// <button className="header-button" onClick={logout}>Log Out</button>
