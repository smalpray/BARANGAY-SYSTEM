import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import AddPositionSection from "./sections/add-position-section";
import ActionSection from "./sections/action-section";
import SearchPosiSection from "./sections/search-position-section";
import TableSection1 from "./sections/table-section";
import store from "@/app/store/store";
import { get_positions_thunk } from "@/app/redux/position-thunk";

// Button Component

// Input Component (optional for reuse)
const Input = ({
    name,
    label,
    value,
    onChange,
    iconRight,
    className = "",
    ...props
}) => {
    return (
        <div className="relative">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-blue-700 mb-1"
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
                {...props}
            />
            {iconRight && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500">
                    {iconRight}
                </div>
            )}
        </div>
    );
};

function PositionManagementTable() {
    const [positions, setPositions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setPositions([
            { id: 1, name: "SK KAGAWAD", limit: 7 },
            { id: 2, name: "CHAIRMAN", limit: 1 },
            { id: 3, name: "SECRETARY", limit: 1 },
            { id: 4, name: "KAGAWAD", limit: 7 },
            { id: 5, name: "JO", limit: 2 },
        ]);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchTerm}`);
    };

    const handleEdit = (id) => {
        alert(`Edit Position with ID: ${id}`);
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this position?")) {
            setPositions((prev) => prev.filter((pos) => pos.id !== id));
        }
    };

    const filteredPositions = positions.filter((pos) =>
        pos.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useEffect(() => {
        store.dispatch(get_positions_thunk());
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className=" space-y-6">
                {/* Header */}
                <AddPositionSection />

                {/* Search */}

                <SearchPosiSection />
                {/* Table */}
                <TableSection1 />
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Layout>
            <PositionManagementTable />
        </Layout>
    );
}
