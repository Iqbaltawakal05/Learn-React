import Navbar from "../Components/Navbar"
import "../Css/Register.css"

function Register () {
    return (
        <div className="container">
            <Navbar/>
            <div className="form">
            <h1>Register</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Register</button>
            </div>
        </div>
    )
}

export default Register