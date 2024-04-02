import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({num, percentage}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Surveys</span>
        <span className={styles.number}>{num}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>{percentage}%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
