import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
//import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card num={1200} percentage={12} />
          <Card num={1356} percentage={17}/>
          <Card num={842} percentage={3}/>
        </div>
        <Transactions />
        <Chart />
      </div>
      {/*
        <div className={styles.side}>
          <Rightbar/>
        </div>
      */}
    </div>
  );
};

export default Dashboard;
