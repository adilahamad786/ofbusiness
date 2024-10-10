import React from 'react';
import  style from "./Label.module.css"

const Label = (props) => {
  return (
    <span className={style.label} style={{borderWidth: props.borderWidth, backgroundColor: `#${props.color}`}}>{props.labelValue}</span>
  )
}

export default Label;