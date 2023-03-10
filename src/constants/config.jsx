import PocketBase from 'pocketbase'
import {
  RiApps2Line,
  RiFileList2Line,
  RiFolder2Line,
  RiUserLine
} from 'react-icons/ri'

export const siteName = 'Sim.z'
export const authorId = import.meta.env.VITE_AUTHOR_ID
export const pageLimit = 5

export const pocketbaseApiUrl = import.meta.env.VITE_POCKETBASE_API_URL
export const pb = new PocketBase(pocketbaseApiUrl)

export const sidebarNavs = [
  // {
  //   name: 'DashBoard',
  //   route: '/dashboard',
  //   icon: <RiApps2Line />
  // },
  {
    name: 'Post',
    route: '/post',
    icon: <RiFileList2Line />
  },
  {
    name: 'Category',
    route: '/category',
    icon: <RiFolder2Line />
  },
  {
    name: 'Author',
    route: '/author',
    icon: <RiUserLine />
  }
]
