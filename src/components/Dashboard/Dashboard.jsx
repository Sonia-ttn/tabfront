import Popup from "../Popup/Popup";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/Tabcorp_logo%402x.acbf1473646b688ae82a35cafdce87970a933d22.png"
          alt=""
        />
      </div>
      <div className={styles.addbutton}>
        <Popup />
      </div>
    </div>
  );
};

export default Dashboard;
