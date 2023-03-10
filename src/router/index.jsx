import { createBrowserRouter } from 'react-router-dom'
import { AuthCheck } from '@/components'

import { Layout } from '@/components'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Post from '@/pages/post'
import PostEditor from '@/pages/post/editor'
import PostDetail from '@/pages/post/detail'
import Category from '@/pages/category'
import CategoryEditor from '@/pages/category/editor'
import Author from '@/pages/author'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthCheck>
        <Layout />
      </AuthCheck>
    ),
    children: [
      // {
      //   index: true,
      //   element: (
      //     <AuthCheck>
      //       <Dashboard />
      //     </AuthCheck>
      //   )
      // },
      // {
      //   path: 'dashboard',
      //   element: (
      //     <AuthCheck>
      //       <Dashboard />
      //     </AuthCheck>
      //   )
      // },
      {
        index: true,
        element: (
          <AuthCheck>
            <Post />
          </AuthCheck>
        )
      },
      {
        path: 'post',
        element: (
          <AuthCheck>
            <Post />
          </AuthCheck>
        )
      },
      {
        path: 'post/create',
        element: (
          <AuthCheck>
            <PostEditor />
          </AuthCheck>
        )
      },
      {
        path: 'post/edit/:id',
        element: (
          <AuthCheck>
            <PostEditor />
          </AuthCheck>
        )
      },
      {
        path: 'post/:id',
        element: (
          <AuthCheck>
            <PostDetail />
          </AuthCheck>
        )
      },
      {
        path: 'category',
        element: (
          <AuthCheck>
            <Category />
          </AuthCheck>
        )
      },
      {
        path: 'category/create',
        element: (
          <AuthCheck>
            <CategoryEditor />
          </AuthCheck>
        )
      },
      {
        path: 'category/edit/:id',
        element: (
          <AuthCheck>
            <CategoryEditor />
          </AuthCheck>
        )
      },
      {
        path: 'author',
        element: (
          <AuthCheck>
            <Author />
          </AuthCheck>
        )
      }
    ]
  },
  { path: '/login', element: <Login /> }
])

export default router
