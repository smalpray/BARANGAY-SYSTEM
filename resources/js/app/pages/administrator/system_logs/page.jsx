import React, { useState } from 'react';
import Layout from '../layout';
import { FileText, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function Page() {
  return (
    <Layout>
      <SystemLogs />
    </Layout>
  );
}

const SystemLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const logs = [
    {
      id: 1559,
      message: 'ADMIN: Admin KIN | LOGIN',
      date: '20-8-2025 10:36 AM'
    },
    {
      id: 1558,
      message: 'ADMIN: Admin KIN | LOGIN',
      date: '19-8-2025 1:42 PM'
    },
    {
      id: 1557,
      message: 'ADMIN: Admin KIN | LOGIN',
      date: '18-8-2025 9:46 PM'
    },
    {
      id: 1556,
      message: 'OFFICIAL: asdasd asdasd | LOGIN',
      date: '13-8-2025 6:26 PM'
    },
    {
      id: 1555,
      message: 'ADMIN: Admin KIN | LOGOUT',
      date: '13-8-2025 12:26 PM'
    },
    {
      id: 1554,
      message: 'ADMIN: ADDED ADMINISTRATOR - 1840335575660706081320251826120801 | asdasd asdasd',
      date: '13-8-2025 6:26 PM'
    },
    {
      id: 1553,
      message: 'ADMIN: Admin KIN | LOGIN',
      date: '13-8-2025 5:06 PM'
    },
    {
      id: 1552,
      message: 'ADMIN: Admin KIN | LOGIN',
      date: '12-8-2025 5:29 PM'
    },
    {
      id: 1551,
      message: 'ADMIN: ADDED POSITION - 9641038397690763080620250924480341 | POSITION NAME Kawatan | POSITION LIMIT 5',
      date: '6-8-2025 9:24 AM'
    },
    {
      id: 1550,
      message: 'ADMIN: Admin KIN | LOGIN',
      date: '6-8-2025 9:21 AM'
    }
  ];

  const filteredLogs = logs.filter(log =>
    log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalEntries = filteredLogs.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalEntries);
  const currentLogs = filteredLogs.slice(startIndex, endIndex);

  const getMessageType = (message) => {
    if (message.includes('LOGIN')) return 'login';
    if (message.includes('LOGOUT')) return 'logout';
    if (message.includes('ADDED')) return 'added';
    return 'default';
  };

  const getMessageColor = (type) => {
    switch (type) {
      case 'login': return 'text-green-700 bg-green-50';
      case 'logout': return 'text-orange-700 bg-orange-50';
      case 'added': return 'text-blue-700 bg-blue-50';
      default: return 'text-gray-700 bg-gray-50';
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="">
        {/* Main Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-blue-600 text-white px-6 py-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FileText size={20} />
              SYSTEM LOGS
            </h2>
          </div>

          {/* Controls */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Rows per page:</span>
              <select 
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-5 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-700">SEARCH:</span>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search logs..."
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900 cursor-pointer hover:bg-blue-100 transition-colors w-20">
                    # ↕️
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900 cursor-pointer hover:bg-blue-100 transition-colors">
                    Message ↕️
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900 cursor-pointer hover:bg-blue-100 transition-colors w-48">
                    Date ↕️
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentLogs.map((log, index) => {
                  const messageType = getMessageType(log.message);
                  const messageColor = getMessageColor(messageType);
                  
                  return (
                    <tr key={log.id} className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        {log.id}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-sm font-medium ${messageColor}`}>
                          {log.message}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-mono text-sm">
                        {log.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronsLeft size={16} />
              </button>
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              
              {generatePageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  className={`px-3 py-1 text-sm transition-colors ${
                    page === currentPage
                      ? 'bg-blue-600 text-white rounded'
                      : page === '...'
                      ? 'text-gray-400 cursor-default'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded'
                  }`}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={16} />
              </button>
              <button 
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronsRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};