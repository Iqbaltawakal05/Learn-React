import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listmenu = () => {
    const [menus, setMenus] = useState([]);
    const [updateMenu, setUpdateMenu] = useState({ id: '', name: '',description: '', imageUrl: '',  price: '', type: '' });

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };
            const response = await axios.get('https://api.mudoapi.tech/menus', config);
            setMenus(response.data.data.Data);
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    };


    const updateMenuById =() => {
        try {
            const token = localStorage.getItem('access_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };
            axios.put(`https://api.mudoapi.tech/menu/${updateMenu.id}`, updateMenu, config);
            fetchMenus();
        } catch (error) {
            console.error('Error updating menu:', error);
        }
    };

    const deleteMenuById = (id) => {
        try {
            const token = localStorage.getItem('access_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };
           axios.delete(`https://api.mudoapi.tech/menu/${id}`, config);
            fetchMenus();
        } catch (error) {
            console.error('Error deleting menu:', error);
        }
    };

    return (
        <div>
            <h1>Menu</h1>
            <div>
                <Link to="/add-menu">
                    <button>Add Menu</button>
                </Link>
            </div>

            <div>
                <h2>Update Menu</h2>
                <input type="text" placeholder="ID" value={updateMenu.id} onChange={(e) => setUpdateMenu({ ...updateMenu, id: e.target.value })} />
                <input type="text" placeholder="Name" value={updateMenu.name} onChange={(e) => setUpdateMenu({ ...updateMenu, name: e.target.value })} />
                <input type="text" placeholder="Description" value={updateMenu.description} onChange={(e) => setUpdateMenu({ ...updateMenu, description: e.target.value })} />
                <input type="text" placeholder="Image Url" value={updateMenu.imageUrl} onChange={(e) => setUpdateMenu({ ...updateMenu, imageUrl: e.target.value })} />
                <input type="text" placeholder="Price" value={updateMenu.price} onChange={(e) => setUpdateMenu({ ...updateMenu, price: e.target.value })} />
                <select type="text" placeholder="Type" value={updateMenu.type} onChange={(e) => setUpdateMenu({ ...updateMenu, type: e.target.value })}>
                    <option value="main-dish">Makanan</option>
                    <option value="beverage">Minuman</option>
                </select>
                <button onClick={updateMenuById}>Update Menu</button>
            </div>

            {/* Daftar menu */}
            <div>
                <h2>Menu List</h2>
                <ul>
                    {menus.map(item => (
                        <li>
                            {item.name} - {item.description} - {item.imageUrl} - {item.type} - ${item.price}
                            <button onClick={() => deleteMenuById(menus.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Listmenu;
