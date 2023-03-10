import { useMutation } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useDeleteMutation = (collection, config) => {
  return useMutation(id => fantasyApi.Base.delete(collection, id), config)
}

export default useDeleteMutation
