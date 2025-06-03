import React, { useState } from 'react';
import './Auth.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registering with ${email}`);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2 className="auth-title">Đăng ký</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng ký</button>
        <p>Đã có tài khoản? <a href="/">Đăng nhập</a></p>
      </form>
    </div>
  );
}
