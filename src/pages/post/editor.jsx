import { useNavigate, useParams } from 'react-router-dom'
import { RiImageLine } from 'react-icons/ri'
import { TitleBar } from '@/components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormControl } from '@/components'
import {
  useCategoriesQuery,
  useCreateMutation,
  useUpdateMutation,
  useDetailQuery
} from '@/hooks'
import { slugFormat } from '@/utils'

const Editor = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: categoriesData, isLoading: categoriesIsLoading } =
    useCategoriesQuery()
  const { mutate: createMutate } = useCreateMutation('posts')
  const { mutate: updateMutate } = useUpdateMutation('posts', id)
  const { data: detailData, isLoading: detailIsLoading } = useDetailQuery(
    'posts',
    {
      enabled: !!id
    }
  )

  if (categoriesIsLoading) return <>Loading...</>
  if (id && detailIsLoading) return <>Loading...</>

  const initialValues = {
    title: id ? detailData?.title : '',
    slug: id ? detailData?.slug : '',
    coverImage: id ? detailData?.coverImage : '',
    showCoverImage: id ? detailData?.showCoverImage : '',
    isFeature: id ? detailData?.isFeature : false,
    description: id ? detailData?.description : '',
    tags: id ? detailData?.tags : '',
    content: id ? detailData?.content : '',
    category: id ? detailData?.category : ''
  }

  const categoriesOptions = categoriesData.map(item => ({
    key: item.name,
    value: item.id
  }))

  const validationSchema = Yup.object({
    title: Yup.string().required('This is required!'),
    slug: Yup.string().required('This is required!'),
    coverImage: Yup.string(),
    showCoverImage: Yup.boolean(),
    isFeature: Yup.boolean(),
    description: Yup.string(),
    tags: Yup.string(),
    content: Yup.string().required('This is required!'),
    category: Yup.string().required('This is required!')
  })

  const onSubmit = (values, onSubmitProps) => {
    const data = { ...values, slug: slugFormat(values.slug) }
    if (id) {
      updateMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate(`/post/${detailData?.id}`)
        }
      })
    } else {
      createMutate(data, {
        onSuccess: () => {
          onSubmitProps.resetForm()
          navigate('/post')
        }
      })
    }
  }

  return (
    <div className='page-main'>
      <TitleBar title={id ? 'Edit Post' : 'Create Post'} />
      <div className='page-container p-0 flex flex-col gap-4'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='flex flex-col divide-y'>
              <div className='flex justify-between items-stretch divide-x'>
                <div className='flex-1 flex flex-col gap-4 p-6'>
                  <div>
                    <FormControl
                      control='input'
                      type='text'
                      label='Title'
                      name='title'
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <FormControl
                      control='input'
                      type='text'
                      label='Slug'
                      name='slug'
                    />
                    <FormControl
                      control='input'
                      type='text'
                      label='Tags'
                      name='tags'
                      placeholder='请使用英文逗号","分隔'
                    />
                    <FormControl
                      control='select'
                      label='Category'
                      name='category'
                      options={categoriesOptions}
                    />
                    <FormControl
                      control='switch'
                      label='Is Feature'
                      name='isFeature'
                    />
                  </div>
                  <div>
                    <FormControl
                      control='textarea'
                      name='description'
                      placeholder='Description'
                    />
                  </div>
                  <div>
                    <FormControl
                      control='editor'
                      name='content'
                      placeholder='Content'
                    />
                  </div>
                </div>
                <div className='w-[20vw] py-6 flex flex-col gap-4 divide-y'>
                  <div className='px-6 w-full max-h-[480px]'>
                    {formik.values.coverImage && (
                      <img
                        src={formik.values.coverImage}
                        className='w-full object-contain object-center rounded'
                      />
                    )}
                    {!formik.values.coverImage && (
                      <div className='w-auto h-[240px] aspect-w-1 aspect-h-1 bg-gray-100 p-6 rounded flex justify-center items-center gap-2 border border-gray-200'>
                        <div className='flex flex-col items-center justify-center h-full text-gray-300'>
                          <RiImageLine size={48} className='text-gray-300' />
                          Picture Review
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col px-6'>
                    <FormControl
                      control='input'
                      type='text'
                      label='Cover Image'
                      name='coverImage'
                    />
                    <FormControl
                      control='switch'
                      label='Show Cover Image'
                      name='showCoverImage'
                    />
                  </div>
                </div>
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
