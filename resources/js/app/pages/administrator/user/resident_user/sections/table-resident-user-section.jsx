import React from "react";
import { Edit } from "lucide-react"; // ✅ change if you want to use another icon lib

export default function TableResidentUserSection() {
    const DefaultUserIcon = () => (
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );

    const users = [
        {
            id: 1,
            residentNumber: "23934/24033864",
            name: "Pa P. Pa",
            username: "wacky123456",
            password: "wacky123",
            image: null,
        },
        {
            id: 2,
            residentNumber: "1648321043900",
            name: "Christine F. Maquilang",
            username: "1648321043900",
            password: "04262025131430138",
            image: null,
        },
        {
            id: 3,
            residentNumber: "30891782437227",
            name: "Aj S. Jan",
            username: "jan123123",
            password: "janjan123",
            image: null,
        },
        {
            id: 4,
            residentNumber: "3375642249394S",
            name: "Wacky D. Hojilla",
            username: "wacky123",
            password: "wacky123",
            image: "/api/placeholder/40/40",
        },
        {
            id: 5,
            residentNumber: "225326332918091",
            name: "Wacky D. Hojilla",
            username: "wacky12345",
            password: "wacky123",
            image: "/api/placeholder/40/40",
        },
        {
            id: 6,
            residentNumber: "1135321697712l",
            name: "Ayesha M. Dela",
            username: "yesha123",
            password: "wacky123",
            image: null,
        },
        {
            id: 7,
            residentNumber: "34978040768599",
            name: "Jancen P. Bacarro",
            username: "jancen123",
            password: "wacky123",
            image: "/api/placeholder/40/40",
        },
        {
            id: 8,
            residentNumber: "233704052111567",
            name: "Asdasd A. Asdasd",
            username: "wawaki123",
            password: "wacky123",
            image: null,
        },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-blue-500 border-gray-200 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Image
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Resident Number
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Username
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Password
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                        <tr
                            key={user.id}
                            className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                        >
                            <td className="px-6 py-4">
                                {user.image ? (
                                    <img
                                        src={user.image}
                                        alt="User"
                                        className="w-10 h-10 rounded-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display =
                                                "none";
                                            e.currentTarget.insertAdjacentElement(
                                                "afterend",
                                                DefaultUserIcon().props.children
                                            );
                                        }}
                                    />
                                ) : (
                                    <DefaultUserIcon />
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {user.residentNumber}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {user.username}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {user.password}
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                                    <Edit size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
