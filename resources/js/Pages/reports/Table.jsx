import React, { useState } from 'react';

const PaginationTable = () => {
  // Your data array
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // ... more data
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Pagination Table Example</h1>

      {/* Render the table with current page's data */}
      <table>
        <thead>
          {/* Table header */}
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              {/* Table rows */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationTable;
