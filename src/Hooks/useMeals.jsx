import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useMeals() {

    function getMeals() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      }
    
      let response=useQuery({
        queryKey: ['recentMeals'],
          queryFn: getMeals,
        select:(data)=> data.data.meals
      })
    
    
  return response
}