// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// const API_Url = "http://192.168.1.38/wordpress_api/products.php";

// const ApiService = {
  
//  getProducts : async() => {
//   try {
//     const response = await axios.get(API_Url);
//     const data = response.data;
//     console.log(data);
//     return data ;
//   } catch (error) {
//     console.log("Error While Fetching Data From Api");
//     throw error;
//   }
// }
// }

// export default ApiService

import axios from 'axios';
const API_Url = "http://192.168.1.38/wordpress_api/products.php";

const ApiService = {
  getProducts: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters).toString();
      const response = await axios.get(`${API_Url}?${params}`);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error While Fetching Data From Api");
      throw error;
    }
  }
};

export default ApiService;
