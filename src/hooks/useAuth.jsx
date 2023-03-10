import { useSnapshot, proxy } from 'valtio'
import fantasyApi from '@/service/apis'

const getAuthUser = async () => {
  const localToken = localStorage.getItem('fantasy_token')
  const pbToken = fantasyApi.Auth.token()
  if (!localToken || localToken !== JSON.stringify(pbToken)) return null
  const authorId = fantasyApi.Auth.modelId()
  const author = await fantasyApi.Base.view('users', authorId)
  return await fantasyApi.Base.view('users', authorId)
}

// const state = proxyWithComputed(
//   { authUser: getAuthUser() },
//   { isAuth: snap => (snap.authUser && fantasyApi.Auth.isValid() ? true : false) }
// )

const state = proxy({
  authUser: getAuthUser(),
  get isAuth() {
    return state.authUser && fantasyApi.Auth.isValid() ? true : false
  }
})

const actions = {
  login: user => {
    localStorage.setItem('fantasy_token', JSON.stringify(user.token))
    state.authUser = user.record
  },
  logout: async () => {
    localStorage.removeItem('fantasy_token')
    state.authUser = null
    fantasyApi.Auth.logout()
  }
}

const useAuth = () => {
  const snap = useSnapshot(state)
  return {
    ...snap,
    ...actions
  }
}

export default useAuth
