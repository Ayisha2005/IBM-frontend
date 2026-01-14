function Login({ setRole }) {
  const handleLogin = (e) => {
    e.preventDefault();
    const role = e.target.role.value;
    setRole(role);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <select name="role" required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
          <option value="customer">Customer</option>
          <option value="manager">Manager</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
