import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react';

const MenuDetail = () => {
    // const param = useParams()
    const [menu, setMenu] = useState([]);

    const {id} = useParams ()
    const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => {
        setMenu(res.data?.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }
  useEffect(() => {
      getMenuDetail()
  })
    
    

    return (
        <div style={{textAlign: 'center',border: '5px solid black', padding: '10px',margin: '20px'}}>
            <h1>Menu detail</h1><hr/>
            <h1 style={{marginTop: '50px'}}>{menu?.name}</h1>
            <h3 style={{marginBottom: '50px'}}>{menu?.description}</h3>
            <img src={menu?.imageUrl} alt={menu?.name} width={500} />
        </div>
    )
}

export default MenuDetail