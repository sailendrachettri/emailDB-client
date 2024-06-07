import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { SERVER_URI } from '../config';
import { UserContext } from '../UserContext';

const AdminLogin = () => {
  // VARIABLES
  const navigate = useNavigate();

  // HOOKS
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("Login");
  const { setUserInfo } = useContext(UserContext);

  // METHODS
  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(`${SERVER_URI}/api/auth/user/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if(response.ok){
        const data = await response.json();
        setUserInfo(data);
        navigate("/");
        toast.success(data.message);
      }

    } catch (error) {
      setLoading("Login")
      toast.error("Internal server error. Please try again later.");
    }

  }

  const handleLoading = (e) => {
    if (username && password) {
      setLoading("Please wait...");
    }
  }

  return (
    <>
      <main>
        <section className="container card-width d-flex flex-column align-items-center my-5 shadow p-5 mb-5 bg-body rounded">
          <h4 className="display-6 mb-4">Welcome Back</h4>
          <form onSubmit={handleLogin} className="d-flex flex-column gap-3 w-auto border rounded p-4">
            <input type="username" value={username} onChange={ev => { setUsername(ev.target.value) }} className="username form-control" placeholder="username" required />
            <input type="password" value={password} onChange={ev => { setPassword(ev.target.value) }} className="password form-control" placeholder="password" required />
            <p><i className="bi bi-exclamation-triangle"></i> Caution: Admin login only</p>
            <button onClick={handleLoading} className="btn btn-outline-dark">{loading}</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default AdminLogin