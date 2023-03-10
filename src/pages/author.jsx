import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormControl } from '@/components'
import { authorId } from '@/constants/config'
import { TitleBar } from '@/components'
import { useAuthorQuery, useUpdateMutation } from '@/hooks'

const Author = () => {
  const { data, isLoading, refetch } = useAuthorQuery()
  const { mutate: updateMutate } = useUpdateMutation('users', authorId)

  if (isLoading) return <>Loading...</>
  const {
    id,
    username,
    email,
    name,
    title,
    bio,
    content,
    avatar: avatarImage
  } = data

  const initialValues = {
    name,
    title,
    bio,
    content
  }

  const validationSchema = Yup.object({
    name: Yup.string(),
    title: Yup.string(),
    bio: Yup.string(),
    content: Yup.string().required('This is required!')
  })

  const onSubmit = (values, onSubmitProps) => {
    updateMutate(values)
    onSubmitProps.resetForm()
    refetch()
  }

  return (
    <div className='page-main'>
      <TitleBar title='Author' />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => {
          console.log('formik', formik)
          return (
            <Form>
              <div className='page-container p-0 flex justify-between items-stretch divide-x'>
                <div className='w-[20vw] p-6 flex flex-col'>
                  <div className='mb-4'>
                    {formik.values.avatar && (
                      <img
                        src={formik.values.avatar}
                        alt='Avatar'
                        className='rounded-md w-full'
                      />
                    )}
                    {!formik.values.avatar && (
                      <img
                        src={avatarImage}
                        alt='Avatar'
                        className='rounded-md w-full'
                      />
                    )}
                  </div>
                  <FormControl control='input' type='text' name='avatar' />
                </div>
                <div className='flex-1 flex flex-col p-6'>
                  <div className='flex-1 flex flex-col mb-6'>
                    <div className='grid grid-cols-3 gap-4 pb-6 mb-2'>
                      <div>Id: {id}</div>
                      <div>UserName: {username}</div>
                      <div>Email: {email}</div>
                    </div>
                    <FormControl
                      control='input'
                      type='text'
                      label='Name'
                      name='name'
                    />
                    <FormControl
                      control='input'
                      type='text'
                      label='Titles'
                      name='title'
                    />
                    <FormControl control='textarea' label='Bio' name='bio' />
                    <FormControl control='editor' name='content' />
                  </div>
                  <div className='flex justify-end items-center'>
                    <FormControl control='button' text='Save' />
                  </div>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Author
