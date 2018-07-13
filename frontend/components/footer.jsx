import React from 'react';

export default () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <img className='eho-image' src={window.imageEHO}></img>
        <span className='footer-copy'>CasaMare&nbsp;&copy;2018</span>
        <span className='footer-text'>Follow me
          <a href='https://github.com/The-Speck'>
            <img src={window.gitLogo}>
            </img>
          </a>
        </span>
      </div>
    </footer>
  );
};
