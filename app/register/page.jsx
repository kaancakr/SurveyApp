import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating UUIDs
import styles from "@/app/ui/register/register.module.css";
import { addUser } from "../lib/actions";

const RegisterPage = () => {
  const generateUniqueId = () => {
    return uuidv4(); // Generate a new UUID
  };

  const uniqueId = generateUniqueId(); // Generate unique ID

  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="id" name="id" value={uniqueId} readOnly required />
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
