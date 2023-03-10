import { useState } from 'react'
import { TitleBar, CategoryTable } from '@/components'
import { useCategoriesQuery, useDeleteMutation } from '@/hooks'
import fantasyApi from '@/service/apis'

const Category = () => {
  const [isError, setIsError] = useState(false)

  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    refetch
  } = useCategoriesQuery({
    sort: '-created'
  })

  const { mutate } = useDeleteMutation('categories')

  if (categoryIsLoading) return <>loading...</>

  const handleDelete = async id => {
    const posts = await fantasyApi.fetchCategoryPosts(id)
    if (parseInt(posts.totalItems) === 0) {
      mutate(id, {
        onSuccess: () => {
          refetch()
        }
      })
    } else {
      setIsError(true)
    }
  }
  return (
    <div className='page-main'>
      <TitleBar
        title='Category'
        buttonText='Add Category'
        route='/category/create'
      />
      <div className='page-container flex flex-col gap-4'>
        {isError && (
          <div className='w-full px-4 py-2 bg-red-100 border border-red-200 rounded text-red-500'>
            Has posts under the this category, which cannot be deleted~
          </div>
        )}
        <CategoryTable data={categoryData} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default Category
