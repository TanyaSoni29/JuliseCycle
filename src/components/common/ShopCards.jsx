

// import React, { useState, useEffect } from 'react';
// import ApiService from '../../Services/apiService';
// import FeaturedProductCard from '../core/Home/FeaturedProductCard';
// import Spinner from './Spinner';
// import { MdArrowBack } from 'react-icons/md';

// const itemsPerPage = 12; 

// function ShopCards() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1); 

//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const Products = await ApiService.getProducts();
//             setProducts(Products.data.filter((item) => item.category_a === "BIKES"));
//             console.log("BIKES---", Products.data.filter((item) => item.category_a === "BIKES"))
//         } catch (error) {
//             console.error(error.message);
//         }
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);


//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

//     const totalPages = Math.ceil(products.length / itemsPerPage);
    

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     return (
//         <div>
//             {loading ? (
//                 <Spinner />
//             ) : (
//                 products.length > 0 ? (
//                     <div>
//                         <div className="flex flex-row md:flex-wrap justify-center items-center gap-2 mx-auto rounded-lg overflow-hidden mt-10">
//                             {currentItems.map((product) => (
//                                 <div key={product.id} className="flex flex-col max-w-lg rounded-md bg-white gap-2 justify-center items-center p-2">
//                                     <FeaturedProductCard product={product} />
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="pagination flex justify-center items-center mt-4">
//                             <button onClick={handlePrevPage} disabled={currentPage === 1} className={`${currentPage === 1 ? "invisible" : "vissible px-2 py-2 bg-gray-200 text-gray-800 mx-1 rounded-full" } `}>
//                                 <MdArrowBack/>
//                             </button>
//                             <span className="mx-2">{currentPage} of {totalPages}</span>
//                             <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`${currentPage === totalPages ? "invisible" : "vissible px-2 py-2 bg-gray-200 text-gray-800 mx-1 rounded-full rotate-180" } `}>
//                             <MdArrowBack/>
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <div><p>No Data Found</p></div>
//                 )
//             )}
//         </div>
//     );
// }

// export default ShopCards;

import React, { useState, useEffect } from 'react';
import ApiService from '../../Services/apiService';
import FeaturedProductCard from '../core/Home/FeaturedProductCard';
import Spinner from './Spinner';
import { MdArrowBack } from 'react-icons/md';

const itemsPerPage = 9; // Number of items per page

function ShopCards({ filters }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page

  const fetchData = async (filters) => {
    setLoading(true);
    try {
      const Products = await ApiService.getProducts(filters);
      setProducts(Products.data);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        products.length > 0 ? (
          <div>
            <div className="flex flex-row md:flex-wrap justify-center items-center gap-2 mx-auto rounded-lg overflow-hidden mt-10">
              {currentItems.map((product) => (
                <div key={product.id} className="flex flex-col max-w-lg rounded-md bg-white gap-2 justify-center items-center p-2">
                  <FeaturedProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="pagination flex justify-center items-center mt-4">
              <button onClick={handlePrevPage} disabled={currentPage === 1} className={`${currentPage === 1 ? "invisible" : "vissible px-2 py-2 bg-gray-200 text-gray-800 mx-1 rounded-full" } `}>
               <MdArrowBack/>
              </button>
              <span className="mx-2">{currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`${currentPage === totalPages ? "invisible" : "vissible px-2 py-2 bg-gray-200 text-gray-800 mx-1 rounded-full rotate-180" } `}>
              <MdArrowBack/>
              </button>
            </div>
          </div>
        ) : (
          <div><p>No Data Found</p></div>
        )
      )}
    </div>
  );
}

export default ShopCards;


