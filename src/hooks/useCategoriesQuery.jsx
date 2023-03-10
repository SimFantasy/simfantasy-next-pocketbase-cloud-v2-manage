import { useQuery } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useCategoriesQuery = options => {
  return useQuery(['category'], () =>
    fantasyApi.Base.all('categories', options)
  )
}

export default useCategoriesQuery
