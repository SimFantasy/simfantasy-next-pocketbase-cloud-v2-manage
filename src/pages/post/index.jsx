import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TitleBar, PostFilter, PostTable } from '@/components'
import { useListQuery, useCategoriesQuery, useDeleteMutation } from '@/hooks'
import { pageLimit } from '@/constants/config'

const Post = () => {
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const { data: postData, isLoading: postIsLoading } = useListQuery(
    'posts',
    page,
    pageLimit,
    {
      expand: 'category'
    }
  )

  const { data: categoryData, isLoading: categoryIsLoading } =
    useCategoriesQuery()

  const { mutate } = useDeleteMutation('posts')

  if (postIsLoading) return <>loading...</>
  if (categoryIsLoading) return <>loading...</>

  const handleDelete = id => {
    mutate(id, {
      onSuccess: () => {
        navigate('/post')
      }
    })
  }

  return (
    <div className='page-main'>
      <TitleBar title='Posts' buttonText='Add Post' route='/post/create' />
      <div className='page-container px-0 pt-0 flex flex-col gap-4'>
        <div className='w-full p-4 border-b border-gray-100'>
          <PostFilter categories={categoryData} />
        </div>

        <PostTable
          data={postData}
          page={page}
          setPage={setPage}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default Post
