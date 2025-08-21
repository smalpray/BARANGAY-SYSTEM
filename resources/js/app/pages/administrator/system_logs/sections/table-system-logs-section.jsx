import React, { useState } from 'react'

export default function TableSystemLogsSection() {
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
        <>
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
        </>
    )
}
