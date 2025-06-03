import React, { useState } from 'react';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2 className="auth-title">Đăng nhập</h2>
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
        <button type="submit">Đăng nhập</button>
        <p>Chưa có tài khoản? <a href="/register">Đăng ký</a></p>
      </form>
    </div>
  );
}
