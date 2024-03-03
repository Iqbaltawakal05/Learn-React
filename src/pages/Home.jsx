import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Layout from "../Components/Layout";
const Home = () => {
    const Navigate = useNavigate();
    const access_token = localStorage.getItem("access_token")

    console.log('token', access_token);

    const logout = () => {
        localStorage.removeItem("access_token");
        Navigate("/login");
    }

    return (
        <Layout>    
            {access_token ? (
               <button onClick={logout}>logout</button>
                    ) : (
            <Link to={"/login"}>
                <h1>login</h1>
            </Link>
            )}
            <h1>ini home page</h1>
        </Layout>
    )
}

export default Home;