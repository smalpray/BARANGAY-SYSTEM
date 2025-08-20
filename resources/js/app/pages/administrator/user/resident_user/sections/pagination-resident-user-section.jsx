import React, { useState } from "react";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"; // ✅ Import icons

export default function PaginationResidentUserSection() {
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

    // ✅ Declare states before using them
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const totalRows = users.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const startRow = (currentPage - 1) * rowsPerPage + 1;
    const endRow = Math.min(currentPage * rowsPerPage, totalRows);

    return (
        <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">Rows per page:</span>
                <select
                    value={rowsPerPage}
                    onChange={(e) => {
                        setRowsPerPage(Number(e.target.value));
                        setCurrentPage(1); // ✅ Reset to first page when rows change
                    }}
                    className="border border-gray-300 rounded px-7 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">
                    {startRow} - {endRow} of {totalRows}
                </span>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronsLeft size={16} />
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                        {currentPage}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight size={16} />
                    </button>
                    <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronsRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
