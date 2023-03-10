import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import qs from 'qs'
import fantasyApi from '@/service/apis'
import { querySerialize } from '@/utils'

const useListQuery = (collection, page, perPage, options, queryOptions) => {
  const searchQuery = useLocation().search.slice(1)
  const searchParams = qs.parse(searchQuery)

  const querys = []

  if (searchParams.category) {
    const category = `category = '${searchParams.category}'`
    querys.push({ category })
  }
  if (searchParams.keyword) {
    const title = `title ~ '${searchParams.keyword}' || content ~ '${searchParams.keyword}'`
    querys.push({ title })
  }
  const filter = querySerialize(querys)

  return useQuery(
    ['list', page, filter, options],
    () =>
      fantasyApi.Base.list(collection, page, perPage, {
        sort: '-created',
        filter,
        ...options
      }),
    {
      keepPreviousData: true,
      ...queryOptions
    }
  )
}

export default useListQuery
