

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useCategorie() {

    function getRecentProducts() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      }
    
      let response=useQuery({
        queryKey: ['recentProducts'],
          queryFn: getRecentProducts,
        select:(data)=> data.data.categories
      })
    
    
  return response
}
