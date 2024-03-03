import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuCRUD = () => {
    const [menus, setMenus] = useState([]);
    const [newMenu, setNewMenu] = useState({ name: '', price: '' });
    const [updateMenu, setUpdateMenu] = useState({ id: '', name: '', price: '' });

    useEffect(() => {
        fetchMenus(); // Memuat daftar menu saat komponen dimuat
    }, []);

    const fetchMenus = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.get('https://api.mudoapi.tech/menus', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setMenus(response.data.data.Data);
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    };

    const addMenu = async () => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.post('https://api.mudoapi.tech/menu', newMenu, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            fetchMenus(res.data.data.Data);
        } catch (error) {
            console.error('Error adding menu:', error);
        }
    };

    const updateMenuById = async () => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.put(`https://api.mudoapi.tech/menu/${updateMenu.id}`, updateMenu, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            fetchMenus(); // Memuat ulang daftar menu setelah memperbarui
        } catch (error) {
            console.error('Error updating menu:', error);
        }
    };

    const deleteMenuById = async (id) => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.delete(`https://api.mudoapi.tech/menu/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            fetchMenus(); // Memuat ulang daftar menu setelah menghapus
        } catch (error) {
            console.error('Error deleting menu:', error);
        }
    };

    return (
        <div>
            <h1>Menu CRUD</h1>
            {/* Form untuk menambah menu baru */}
            <div>
                <h2>Add New Menu</h2>
                <input type="text" placeholder="Name" value={newMenu.name} onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })} />
                <input type="text" placeholder="Price" value={newMenu.price} onChange={(e) => setNewMenu({ ...newMenu, price: e.target.value })} />
                <button onClick={addMenu}>Add Menu</button>
            </div>

            {/* Form untuk memperbarui menu */}
            <div>
                <h2>Update Menu</h2>
                <input type="text" placeholder="ID" value={updateMenu.id} onChange={(e) => setUpdateMenu({ ...updateMenu, id: e.target.value })} />
                <input type="text" placeholder="Name" value={updateMenu.name} onChange={(e) => setUpdateMenu({ ...updateMenu, name: e.target.value })} />
                <input type="text" placeholder="Price" value={updateMenu.price} onChange={(e) => setUpdateMenu({ ...updateMenu, price: e.target.value })} />
                <button onClick={updateMenuById}>Update Menu</button>
            </div>

            {/* Daftar menu */}
            <div>
                <h2>Menu List</h2>
                <ul>
                    {menus.map(menu => (
                        <li key={menu.id}>
                            {menu.name} - ${menu.price}
                            <button onClick={() => deleteMenuById(menu.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuCRUD; 
