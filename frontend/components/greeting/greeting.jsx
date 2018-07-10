import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );
  const personalGreeting = () => {
    const regex = /^([^@]+)/;
    const name = regex.exec(currentUser.email)[0]

    return (
      <hgroup className="header-group">
        <h2 className="header-name">Welcome, {name}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    )
  };

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
