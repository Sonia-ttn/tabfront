import React from 'react';
import { useState } from 'react';
import Popup from "../Popup/Popup";
import styles from "./Dashboard.module.css";
import Table from "react-bootstrap/Table";

import Nonedit from "./Nonedit";

const Dashboard = () => {
  const [infos,setInfos]=useState([]);
  return (

    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/Tabcorp_logo%402x.acbf1473646b688ae82a35cafdce87970a933d22.png"
          alt=""
        />
        
      </div>
      
      <div className={styles.txt}>
        <h2 className={styles.para}>Saved Configurations</h2>

        <div className={styles.addbutton}>
          <Popup />
        </div>
      </div>
     
      <div className={styles.table}>
      <Table striped bordered hover>
        <thead>
          <tr className={styles.head}>
            <th>Type</th>
            <th>Details</th>
            <th>Date Added</th>
            <th>Added By</th>
            <th>Enabled</th>
            <th>Actions</th>
          </tr>
        </thead>
       
      
        <tbody className={styles.body}>

       {infos.map((info,i)=>(
           <>
           <Nonedit info={info}/>
           
       
           </>
  
           )
        )}

</tbody>

      
      </Table> 
      
     
      
      </div>
     


    </div>
  );
};

export default Dashboard;




















