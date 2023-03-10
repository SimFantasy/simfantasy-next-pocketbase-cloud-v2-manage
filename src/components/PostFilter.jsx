import { useSearchParams } from 'react-router-dom'
import qs from 'qs'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormControl } from '@/components'

const PostFilter = ({ categories }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialVales = {
    keyword: '',
    category: ''
  }

  const validationSchema = Yup.object({
    keyword: Yup.string(),
    password: Yup.string()
  })

  const handleSubmit = async values => {
    const filterValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== '')
    )
    const params = qs.stringify(filterValues)

    setSearchParams(params)
  }

  const categoryOptions = categories.map(category => ({
    key: `${category.name}`,
    value: `${category.id}`
  }))
  return (
    <div className='w-full'>
      <Formik
        initialValues={initialVales}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form className='grid grid-cols-4 gap-4'>
            <FormControl
              control='input'
              type='text'
              name='keyword'
              placeholder='Title or Content Keyword'
              className='mb-0'
            />
            <FormControl
              control='select'
              name='category'
              options={categoryOptions}
              placeholder='Choose Category'
              className='mb-0'
            />
            <button
              type='submit'
              className='px-2 py-1 max-w-[90px] h-10 bg-gray-500 hover:bg-gray-400 text-white rounded'
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PostFilter
