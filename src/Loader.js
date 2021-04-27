import React from 'react';
import './index.css'
// import { Container } from './styles';

function Loader() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"55vh"}}>
    <div className="lds-dual-ring"></div>
    </div>
  )
}

export default Loader;