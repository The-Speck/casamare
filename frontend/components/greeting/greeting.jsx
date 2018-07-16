import React from 'react';
import UserSettings from './user_settings';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Sign in</button>
      <span>&nbsp;or&nbsp;</span>
      <button onClick={() => openModal('signup')}>Join</button>
    </nav>
  );
  const personalGreeting = () => {
    // const regex = /^([^@]+)/;
    // const name = regex.exec(currentUser.email)[0];

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
