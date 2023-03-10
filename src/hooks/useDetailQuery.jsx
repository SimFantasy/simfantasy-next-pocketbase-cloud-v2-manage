import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useDetailQuery = (collection, config) => {
  const { id } = useParams()
  return useQuery(
    ['detail', collection, id],
    () =>
      fantasyApi.Base.view(collection, id, {
        expand: 'category'
      }),
    config
  )
}

export default useDetailQuery
