// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication status
        if (localStorage.getItem('authenticated') !== 'true') {
            navigate('/login'); // Redirect to login if not authenticated
        }

        const userDataRef = ref(database, 'userDataRecords');
        onValue(userDataRef, (snapshot) => {
            const data = snapshot.val();
            const userList = [];
            for (let id in data) {
                userList.push({ id, ...data[id] });
            }
            setUserData(userList);
        });
    }, [navigate]);

    const handleDelete = async (id) => {
        // Function for deleting data
        await remove(ref(database, `userDataRecords/${id}`));
    };

    const handleSearch = (event) => {
        // Function for searching
    };

    const handleLogout = () => {
        // Clear authentication status
        localStorage.removeItem('authenticated');
        // Redirect to login
        navigate('/login');
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Search by name or contact"
                    className="mr-4 p-2 border rounded"
                    onChange={handleSearch}
                />
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Phone</th>
                        <th className="py-2 px-4 border-b">Message</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">{user.phone}</td>
                            <td className="py-2 px-4 border-b">{user.message}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="text-red-500"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
