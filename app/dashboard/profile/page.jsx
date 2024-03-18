import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/profile/profile.module.css";
import Link from "next/link";

const ProfilePage = async () => {
  const user = await fetchUsers();

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>ID</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {user.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.id}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/profile/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
