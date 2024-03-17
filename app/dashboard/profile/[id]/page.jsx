import { updateUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/profile/singleUser/singleUser.module.css";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  const user = await fetchUsers(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;