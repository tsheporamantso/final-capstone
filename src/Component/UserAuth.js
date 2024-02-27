import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {' '}
        <br />
        {' '}
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        {' '}
        <br />
        <button type="submit">Sign In</button>
        {' '}
        <br />
      </form>
      <p><Link to="/signup">Sign Up</Link></p>
    </>
  );
}
export default UserAuth;
