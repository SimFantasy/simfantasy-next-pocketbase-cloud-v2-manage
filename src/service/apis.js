import axios from 'axios'
import { pb, pocketbaseApiUrl, authorId } from '@/constants/config'

const Auth = {
  login: async user =>
    await pb.collection('users').authWithPassword(user.identity, user.password),
  logout: async () => await pb.authStore.clear(),
  isValid: () => pb.authStore.isValid,
  token: () => pb.authStore.token,
  modelId: () => pb.authStore.model.id
}

const Base = {
  all: async (collection, config) =>
    await pb.collection(collection).getFullList(100, config),
  list: async (collection, page, perPage, config) =>
    await pb.collection(collection).getList(page, perPage, config),
  view: async (collection, id, config) =>
    await pb.collection(collection).getOne(id, config),
  create: async (collection, data) =>
    await pb.collection(collection).create(data),
  update: async (collection, id, data) =>
    await pb.collection(collection).update(id, data),
  delete: async (collection, id) => await pb.collection(collection).delete(id)
}

const fetchCategoryPosts = async id => {
  const response = await axios({
    url: `${pocketbaseApiUrl}/api/collections/posts/records`,
    params: {
      filter: `category = '${id}'`
    }
  })
  return response.data
}

const uploadAvatar = async formData => {
  const response = await axios({
    method: 'PATCH',
    url: `${pocketbaseApiUrl}/api/collections/users/records/${authorId}`,
    data: {
      avatar: formData
    }
  })
  return response.data
}

export default {
  Auth,
  Base,
  fetchCategoryPosts,
  uploadAvatar
}
