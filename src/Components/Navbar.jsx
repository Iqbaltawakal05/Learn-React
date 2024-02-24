import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div style={{ display: 'flex', gap: "20px", alignContent: "center", justifyContent: "center", fontSize: "20px"}}>
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/menu"}>
                <p>Menu</p>
            </Link>
            <Link to={"/login"}>
                <p>Login</p>
            </Link>
            <Link to={"/register"}>
                <p>Register</p>
            </Link>
        
        </div>
    )
}

export default Navbar