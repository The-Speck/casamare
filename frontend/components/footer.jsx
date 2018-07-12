import React from 'react';

export default () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <img className='eho-image' src={window.imageEHO}></img>
        <span className='footer-copy'>&copy;2018</span>
        <span className='footer-text'>By looking at this site, you give up the right to criticize</span>
      </div>
    </footer>
  );
};
