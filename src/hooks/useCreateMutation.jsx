import { useMutation } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useCreateMutation = (collection, config) => {
  return useMutation(
    variables => fantasyApi.Base.create(collection, variables),
    config
  )
}

export default useCreateMutation
