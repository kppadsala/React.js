import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useProductApi = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
      return res.data
    },
  })
}
