import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/surveys/surveys.module.css";
import Link from "next/link";
import { fetchSurveys } from "@/app/lib/data";

const SurveysPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, survey} = await fetchSurveys(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>My Surveys</h2>
        <Link href="/dashboard/surveys/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <Search placeholder="Search for a product..." />
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name of Survey</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {survey.map((survey) => (
            <tr key={survey.id}>
              <td>
                <div className={styles.user}>{survey.name}</div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};

export default SurveysPage;
