import { useMutation } from '@tanstack/react-query'
import fantasyApi from '@/service/apis'

const useLoginMutation = config => {
  return useMutation(fantasyApi.Auth.login, config)
}

export default useLoginMutation
