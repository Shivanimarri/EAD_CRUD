import './App.css';
import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkStrength(newPassword); // Call the function when the password changes
  };

  const checkStrength = (password) => {
    let passwordCount = 0; // Initialize as let, not const

    if (/[a-z]/.test(password)) {
      passwordCount++;
    }
    if (/[A-Z]/.test(password)) {
      passwordCount++;
    }
    if (/[0-9]/.test(password)) {
      passwordCount++;
    }
    if (/[^a-zA-Z0-9]/.test(password)) {
      passwordCount++;
    }
    if (/.{8,12}/.test(password)) {
      passwordCount++;
    }

    // Updated to strict equality comparison
    if (passwordCount === 1) {
      setStrength("Very Weak");
    } else if (passwordCount === 2) {
      setStrength("Weak");
    } else if (passwordCount === 3) {
      setStrength("Medium");
    } else if (passwordCount === 4) {
      setStrength("Strong");
    } else if (passwordCount === 5) {
      setStrength("Very Strong");
    }
  };

  return (
    <div className="App">
      <h2 style={{color:"Blue"}}>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter your password here"
        value={password}
        onChange={handleChange} // Make sure to call handleChange on input change
      />
      <p>Password Strength: {strength}</p>
    </div>
  );
}

export default App;
