import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
        username: username,
        password: password,
    }

    setLoading(true)

    axios
        .post('https://api.mudoapi.tech/login', payload)
        .then((res) => {
            setNotif("Login berhasil");
            console.log(res);
            const token = res?.data?.data?.token
            localStorage.setItem('access_token', token);
            setLoading(false)
             setTimeout(() => {
                 Navigate('/menu')
             }, 1000);
        })
        .catch((err) => {
            console.log(err.response);
            setLoading(false)
            setNotif(err.response?.data?.message)
        })
  };

  return (
    <div>
    {!!notif.length && <h1>{notif}</h1>}
    <h1 style={{textAlign: 'center'}}>Login</h1>
    <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '50vh'}}>
    <input
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
        value = {username}
    />
    <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
        value = {password}
      />
    <button disabled={loading ? true : false} onClick={handleLogin}>{loading ? 'Loading...' : 'Login'}</button>
    <button onClick={() => Navigate(-1)}>back</button>
    </div>
    </div>
  );
};

export default Login