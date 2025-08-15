import React, { useState } from 'react';
import Layout from '../../layout';
import { Edit2, X, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from 'lucide-react';
import SearchSection from './sections/search-section';
import TableSection from './sections/table-section';
import PaginationSection from './sections/pagination-section';

const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);

 

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Header */}
      <SearchSection />
      {/* Table */}
      
<TableSection/>
      {/* Pagination */}
      

      <PaginationSection/>
    </div>
  );
};

export default function Page() {
  return (
    <Layout>
      <DataTable />
    </Layout>
  );
}
