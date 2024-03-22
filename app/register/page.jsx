"use client"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating UUIDs
import styles from '@/app/ui/register/register.module.css';
import { addUser } from '../lib/actions';

const RegisterPage = () => {
  const generateUniqueId = () => {
    return uuidv4(); // Generate a new UUID
  };

  const uniqueId = generateUniqueId(); // Generate unique ID

  // State for password validation warning
  const [passwordWarning, setPasswordWarning] = useState('');

  // Function to handle password input change
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    // Check password conditions
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setPasswordWarning('Password must be at least 8 characters long and include at least one uppercase and one lowercase character.');
    } else {
      setPasswordWarning('');
    }
  };

  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={handlePasswordChange}
        />
        {passwordWarning && <p className={styles.warning}>{passwordWarning}</p>}
        <input type="phone" placeholder="phone" name="phone" />
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <input type="text" placeholder="ID" name="id" value={uniqueId} required />
        <input type="date" placeholder="Birthday" name="birthday" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
