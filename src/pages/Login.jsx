import Navbar from "../Components/Navbar"
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

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

    axios
        .post('https://api.mudoapi.tech/login', payload)
        .then((res) => {
            setNotif("Login berhasil");
            const token = res?.data?.data?.token
            if (token) {
                setTimeout(() => {
                    Navigate('/menu')
                }, 1000);
                }   
        })
        .catch((err) => {
            console.log(err);
        })
  }


  return (
    <div>
    <Navbar/>
    <h1 style={{textAlign: 'center'}}>Login</h1>
    {!!notif.length && <h1>{notif}</h1>}
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
    <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login