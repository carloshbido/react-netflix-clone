import React from 'react';
import './Header.css';

export default function({ background }) {
 
  return(
    <header className={background ? 'black' : ''}>
      <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="logo"/>
      <img src="https://www.blexar.com/avatar.png" alt="Avatar"/>
    </header>
  )
}