import React from 'react'

import './CustomButton.css'

const CustomButton = ({text, onClick, classValue}) =>  <button className={`custom-btn ${classValue}`} onClick={onClick}>{text}</button>
   
export default CustomButton;
