import React, { useState } from 'react';
import Layout from '../../layout';

import { 
  Package, 
  FileText, 
  Users, 
  AlertTriangle, 
  TrendingDown, 
  Clock, 
  Wrench,
  History,
  Download,
  BarChart3
} from 'lucide-react';

export default function Page() {
  return (
    <Layout>
      <BarangayInventory />
    </Layout>
  );
}

const BarangayInventory = () => {
  // Sample data - in a real app, this would come from a database
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Folding Chairs', category: 'Furniture', stock: 5, minStock: 10, borrowed: 15, damaged: 2, location: 'Storage Room A' },
    { id: 2, name: 'Sound System', category: 'Equipment', stock: 2, minStock: 1, borrowed: 1, damaged: 0, location: 'Office' },
    { id: 3, name: 'Tables', category: 'Furniture', stock: 3, minStock: 5, borrowed: 12, damaged: 1, location: 'Storage Room B' },
    { id: 4, name: 'Microphones', category: 'Equipment', stock: 1, minStock: 2, borrowed: 4, damaged: 1, location: 'Office' },
    { id: 5, name: 'Generators', category: 'Equipment', stock: 2, minStock: 1, borrowed: 0, damaged: 0, location: 'Garage' },
    { id: 6, name: 'Tents', category: 'Event Supplies', stock: 0, minStock: 3, borrowed: 8, damaged: 2, location: 'Storage Room C' }
  ]);

  const [borrowHistory, setBorrowHistory] = useState([
    { id: 1, itemId: 1, itemName: 'Folding Chairs', borrower: 'Juan Dela Cruz', contact: '09123456789', borrowDate: '2024-07-15', returnDate: '2024-07-20', status: 'returned', quantity: 10 },
    { id: 2, itemId: 2, itemName: 'Sound System', borrower: 'Maria Santos', contact: '09234567890', borrowDate: '2024-07-18', returnDate: '2024-07-25', status: 'overdue', quantity: 1 },
    { id: 3, itemId: 1, itemName: 'Folding Chairs', borrower: 'Pedro Reyes', contact: '09345678901', borrowDate: '2024-07-20', returnDate: '2024-07-27', status: 'returned', quantity: 5 },
    { id: 4, itemId: 3, itemName: 'Tables', borrower: 'Ana Garcia', contact: '09456789012', borrowDate: '2024-07-22', returnDate: '2024-07-29', status: 'borrowed', quantity: 8 },
    { id: 5, itemId: 4, itemName: 'Microphones', borrower: 'Carlos Lopez', contact: '09567890123', borrowDate: '2024-07-10', returnDate: '2024-07-17', status: 'overdue', quantity: 2 },
    { id: 6, itemId: 6, itemName: 'Tents', borrower: 'Rosa Mendoza', contact: '09678901234', borrowDate: '2024-07-25', returnDate: '2024-08-01', status: 'borrowed', quantity: 3 }
  ]);

  const [activeTab, setActiveTab] = useState('reports');
  const [selectedReport, setSelectedReport] = useState('most-borrowed');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');

  // Calculate report data
  const getMostBorrowedItems = () => {
    return inventory
      .map(item => ({
        ...item,
        totalBorrowed: borrowHistory
          .filter(borrow => borrow.itemId === item.id)
          .reduce((sum, borrow) => sum + borrow.quantity, 0)
      }))
      .sort((a, b) => b.totalBorrowed - a.totalBorrowed)
      .slice(0, 10);
  };

  const getLowStockItems = () => {
    return inventory.filter(item => item.stock <= item.minStock);
  };

  const getOverdueReturns = () => {
    const today = new Date();
    return borrowHistory.filter(borrow => {
      const returnDate = new Date(borrow.returnDate);
      return borrow.status === 'overdue' || (borrow.status === 'borrowed' && returnDate < today);
    });
  };

  const getDamagedItems = () => {
    return inventory.filter(item => item.damaged > 0);
  };

  const getBorrowHistoryByResident = () => {
    const grouped = borrowHistory.reduce((acc, borrow) => {
      if (!acc[borrow.borrower]) {
        acc[borrow.borrower] = [];
      }
      acc[borrow.borrower].push(borrow);
      return acc;
    }, {});
    return grouped;
  };

  // Export functions
  const exportToPDF = (reportData, reportTitle) => {
    // In a real implementation, you'd use a library like jsPDF
    alert(`Exporting ${reportTitle} to PDF... (Feature would be implemented with jsPDF library)`);
  };

  const exportToExcel = (reportData, reportTitle) => {
    // In a real implementation, you'd use a library like xlsx
    const csvContent = convertToCSV(reportData, reportTitle);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${reportTitle}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCSV = (data, reportTitle) => {
    if (!data.length) return '';
    
    let csv = `${reportTitle}\n\n`;
    const headers = Object.keys(data[0]);
    csv += headers.join(',') + '\n';
    
    data.forEach(row => {
      csv += headers.map(header => `"${row[header] || ''}"`).join(',') + '\n';
    });
    
    return csv;
  };

  const renderReport = () => {
    switch (selectedReport) {
      case 'most-borrowed':
        const mostBorrowed = getMostBorrowedItems();
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Most Borrowed Items
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToPDF(mostBorrowed, 'Most Borrowed Items')}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> PDF
                </button>
                <button
                  onClick={() => exportToExcel(mostBorrowed, 'Most Borrowed Items')}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> Excel
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Times Borrowed</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Current Stock</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Currently Borrowed</th>
                  </tr>
                </thead>
                <tbody>
                  {mostBorrowed.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">{item.totalBorrowed}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.borrowed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'low-stock':
        const lowStock = getLowStockItems();
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Low Stock Items
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToPDF(lowStock, 'Low Stock Items')}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> PDF
                </button>
                <button
                  onClick={() => exportToExcel(lowStock, 'Low Stock Items')}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> Excel
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Current Stock</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Minimum Stock</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {lowStock.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className={`font-semibold ${item.stock === 0 ? 'text-red-600' : 'text-orange-600'}`}>
                          {item.stock}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{item.minStock}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.stock === 0 ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                        }`}>
                          {item.stock === 0 ? 'Out of Stock' : 'Low Stock'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'overdue':
        const overdue = getOverdueReturns();
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" />
                Overdue Returns
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToPDF(overdue, 'Overdue Returns')}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> PDF
                </button>
                <button
                  onClick={() => exportToExcel(overdue, 'Overdue Returns')}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> Excel
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Borrower</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Contact</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Due Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Days Overdue</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {overdue.map(borrow => {
                    const dueDate = new Date(borrow.returnDate);
                    const today = new Date();
                    const daysOverdue = Math.ceil((today - dueDate) / (1000 * 60 * 60 * 24));
                    
                    return (
                      <tr key={borrow.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{borrow.itemName}</td>
                        <td className="border border-gray-300 px-4 py-2">{borrow.borrower}</td>
                        <td className="border border-gray-300 px-4 py-2">{borrow.contact}</td>
                        <td className="border border-gray-300 px-4 py-2">{borrow.returnDate}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="text-red-600 font-semibold">{daysOverdue} days</span>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{borrow.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'damaged':
        const damaged = getDamagedItems();
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Wrench className="w-5 h-5 text-yellow-500" />
                Items Marked as Damaged
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToPDF(damaged, 'Damaged Items')}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> PDF
                </button>
                <button
                  onClick={() => exportToExcel(damaged, 'Damaged Items')}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> Excel
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Damaged Quantity</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Working Stock</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {damaged.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span className="text-yellow-600 font-semibold">{item.damaged}</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'borrow-history':
        const historyByResident = getBorrowHistoryByResident();
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <History className="w-5 h-5 text-blue-500" />
                Borrow History by Resident
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => exportToPDF(borrowHistory, 'Borrow History by Resident')}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> PDF
                </button>
                <button
                  onClick={() => exportToExcel(borrowHistory, 'Borrow History by Resident')}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" /> Excel
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {Object.entries(historyByResident).map(([resident, history]) => (
                <div key={resident} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {resident}
                    <span className="text-sm text-gray-500">({history.length} transactions)</span>
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-2 py-1 text-left">Item</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Borrow Date</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Return Date</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Quantity</th>
                          <th className="border border-gray-300 px-2 py-1 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.map(borrow => (
                          <tr key={borrow.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-2 py-1">{borrow.itemName}</td>
                            <td className="border border-gray-300 px-2 py-1">{borrow.borrowDate}</td>
                            <td className="border border-gray-300 px-2 py-1">{borrow.returnDate}</td>
                            <td className="border border-gray-300 px-2 py-1">{borrow.quantity}</td>
                            <td className="border border-gray-300 px-2 py-1">
                              <span className={`px-2 py-1 rounded text-xs ${
                                borrow.status === 'returned' ? 'bg-green-100 text-green-800' :
                                borrow.status === 'overdue' ? 'bg-red-100 text-red-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {borrow.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="">
      <header className="">
        
      </header>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Reports
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedReport('most-borrowed')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedReport === 'most-borrowed'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <BarChart3 className="w-4 h-4 inline mr-1" />
                    Most Borrowed
                  </button>
                  <button
                    onClick={() => setSelectedReport('low-stock')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedReport === 'low-stock'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    Low Stock
                  </button>
                  <button
                    onClick={() => setSelectedReport('overdue')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedReport === 'overdue'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Clock className="w-4 h-4 inline mr-1" />
                    Overdue Returns
                  </button>
                  <button
                    onClick={() => setSelectedReport('damaged')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedReport === 'damaged'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Wrench className="w-4 h-4 inline mr-1" />
                    Damaged Items
                  </button>
                  <button
                    onClick={() => setSelectedReport('borrow-history')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedReport === 'borrow-history'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <History className="w-4 h-4 inline mr-1" />
                    Borrow History
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                {renderReport()}
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 text-sm font-medium">Total Items</p>
                      <p className="text-2xl font-bold text-blue-800">{inventory.length}</p>
                    </div>
                    <Package className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-600 text-sm font-medium">Low Stock Items</p>
                      <p className="text-2xl font-bold text-orange-800">{getLowStockItems().length}</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-600 text-sm font-medium">Overdue Returns</p>
                      <p className="text-2xl font-bold text-red-800">{getOverdueReturns().length}</p>
                    </div>
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-600 text-sm font-medium">Damaged Items</p>
                      <p className="text-2xl font-bold text-yellow-800">{getDamagedItems().length}</p>
                    </div>
                    <Wrench className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};