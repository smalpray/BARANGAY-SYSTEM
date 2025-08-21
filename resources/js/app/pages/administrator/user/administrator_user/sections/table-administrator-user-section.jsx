import { Edit, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

export default function TableAdministratorUserSection() {
    const users = [
        {
            id: 1,
            name: 'Wacky D. Hojilla',
            username: 'wackyhojilla',
            password: 'wacky12345',
            image: '🧑‍💼'
        },
        {
            id: 2,
            name: 'Secretary S. Secretary',
            username: 'secretary123',
            password: 'secretary123',
            image: '👩‍💼'
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <table className="w-full">
                <thead className="bg-blue-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900">Image</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900 cursor-pointer hover:bg-blue-100 transition-colors">
                            Name ↕️
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900 cursor-pointer hover:bg-blue-100 transition-colors">
                            Username ↕️
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900 cursor-pointer hover:bg-blue-100 transition-colors">
                            Password ↕️
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user, index) => (
                        <tr key={user.id} className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="px-6 py-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                                    {user.image}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-gray-900 font-medium">{user.name}</td>
                            <td className="px-6 py-4 text-gray-700">{user.username}</td>
                            <td className="px-6 py-4 text-gray-700">{user.password}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                                        <Edit size={16} />
                                    </button>
                                    <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
