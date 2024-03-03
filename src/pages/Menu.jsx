import Navbar from "../Components/Navbar"
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

const Menu = () => {
    const [menu, setMenu] = useState([]);

  const getMenudata = () => {
    axios
      .get('https://api.mudoapi.tech/menus')
      .then((res) => {
        setMenu(res.data.data.Data);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    getMenudata()
  }, []);



    return (
        <div style={{textAlign: 'center'}}>
            <Navbar />
            <h1>menu page</h1>
            <Link to={"/Add-menu"} style={{width: '300px', height: '30px', fontSize: '20px'}}>
              Add menu
            </Link><br />
            <Link to={"/List-menu"} style={{width: '300px', height: '30px', fontSize: '20px'}}>
              Listmenu
            </Link>
          {
            menu.map(item => (
              <div style={{border: '5px solid black', padding: '10px',margin: '20px'}}>
                <h1>{item.name}</h1>
                <h2>{item.description}</h2>
                <img src={item.imageUrl} alt={item.name} width={200} /><hr/>
                <Link to={`/menu/${item.id}`}>
                  <button style={{width: '300px', height: '30px', fontSize: '20px'}}>detail</button> 
                </Link>

              </div>
            ))
          }
        </div>
    )
}

export default Menu;