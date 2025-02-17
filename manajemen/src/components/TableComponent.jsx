import React, { useEffect, useRef } from "react";
import { DataTable } from "simple-datatables";
import { products } from "../data/data"; 

const TableComponent = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      const dataTable = new DataTable(tableRef.current, {
        searchable: false,
        perPageSelect: false,
        paging: false,
      });
    }
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-lg rounded-lg">
      <table
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        ref={tableRef}
      >
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">
              picture
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="bg-white dark:bg-gray-800"
            >
              <td className="px-6 py-4">
                <img className='w-10 h-10 rounded-full' src={product.image} alt="gambar" />
              </td>
              <td
                
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.name}
              </td>
              
              <td className="px-6 py-4">{product.color}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.price}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;