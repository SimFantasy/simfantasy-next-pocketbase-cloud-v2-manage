import { useNavigate, useParams } from 'react-router-dom'
import { TitleBar } from '@/components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormControl } from '@/components'
import { useCreateMutation, useUpdateMutation, useDetailQuery } from '@/hooks'

const Editor = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { mutate: createMutate } = useCreateMutation('categories')
  const { mutate: updateMutate } = useUpdateMutation('categories', id)
  const { data: detailData, isLoading: detailIsLoading } = useDetailQuery(
    'categories',
    {
      enabled: !!id
    }
  )

  if (id && detailIsLoading) return <>Loading...</>

  const initialValues = {
    name: id ? detailData?.name : '',
    slug: id ? detailData?.slug : ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('This is required!'),
    slug: Yup.string().required('This is required!')
  })

  const onSubmit = (values, onSubmitProps) => {
    if (id) {
      updateMutate(values, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate(`/category`)
        }
      })
    } else {
      createMutate(values, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate('/category')
        }
      })
    }
  }
  return (
    <div className='page-main'>
      <TitleBar title={id ? 'Edit Category' : 'Create Category'} />
      <div className='page-container p-0 flex flex-col gap-4'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='flex flex-col divide-y gap-4'>
              <div className='flex flex-col gap-4 p-6'>
                <FormControl
                  control='input'
                  type='text'
                  label='Name'
                  name='name'
                />
                <FormControl
                  control='input'
                  type='text'
                  label='Slug'
                  name='slug'
                />
              </div>
              <div className='p-6 flex justify-end items-center'>
                <FormControl control='button' text={id ? 'Save' : 'Submit'} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Editor
