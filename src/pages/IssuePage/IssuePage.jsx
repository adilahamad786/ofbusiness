import React from 'react';
import Header from "../../components/Header/Header";
import style from "./IssuePage.module.css"
import Main from '../../components/Main/Main';

const IssuePage = () => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Main />
    </div>
  )
}

export default IssuePage;