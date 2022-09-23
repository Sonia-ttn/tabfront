import React from 'react';
import logo from "./logoo.png";
import styles from "./Home.module.css";

import {Navigate, useNavigate} from "react-router-dom";

function Home() {
      
    return (
       <div className={styles.container}>
        <div className={styles.top}>
             <img src={logo} className={styles.img} alt="logo here"/>

            <h1 className={styles.head}>SGM Configurator</h1>
            <a href="/dash">
            <button className={styles.green_btn}>LOGIN via TAB
            </button>
             </a>
        </div>
              
        
    </div>
   // <button className={styles.green_btn} onClick={navToDash}>LOGIN via TAB</button>
          
  )
}

export default Home
