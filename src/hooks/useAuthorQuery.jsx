import { useQuery } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'
import { authorId } from '@/constants/config'

const useAuthorQuery = options => {
  return useQuery(
    ['author', authorId],
    () => fantasyApi.Base.view('users', authorId),
    {
      keepPreviousData: true,
      ...options
    }
  )
}

export default useAuthorQuery
