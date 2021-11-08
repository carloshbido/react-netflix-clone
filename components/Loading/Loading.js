import React from 'react';
import './Loading.css'
import Spinner from '../../images/spinner.svg'

export default function() {
  return(
    <div className="loading">
      <img src={Spinner}/>
    </div>
  )
}