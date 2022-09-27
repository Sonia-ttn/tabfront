import React from 'react';
import logo from "./logoo.png";
import styles from "./Home.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



//import {Navigate, useNavigate} from "react-router-dom";

function Home() {
      
    return (
      <div className={styles.container}>
      <Card border="light" style={{ width: '18rem' }} className={styles.cards}>
        
        <img src={logo} className={styles.img} alt="logo here"/>
       
        <Card.Body>
          <Card.Title className={styles.head}>
          <h1 className={styles.head}>SGM Configurator</h1>
          </Card.Title>
          <Card.Text>
            <div className={styles.buttons}>
            <a href="/dash" >
              <Button variant="success">LOGIN via TAB</Button>
            </a>
            
            </div>
           
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      

            

            

            
      
   
  )
}

export default Home
