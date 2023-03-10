import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { RiTyphoonFill, RiCloseLine } from 'react-icons/ri'
import { useAuth, useLoginMutation } from '@/hooks'
import { siteName } from '@/constants/config'
import { FormControl } from '@/components'

const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [showError, setShowError] = useState(false)
  const { login } = useAuth()
  const { mutate, isLoading } = useLoginMutation({
    onSuccess: data => {
      login(data)
      navigate('/')
    },
    onError: data => {
      setErrorMessage(data.message)
      setShowError(true)
    }
  })

  const handleHideError = () => {
    setErrorMessage('')
    setShowError(false)
  }

  const initialVales = {
    identity: '',
    password: ''
  }

  const validationSchema = Yup.object({
    identity: Yup.string().required('Please enter username or email'),
    password: Yup.string()
      .min(6, 'Please enter at least 6 digits password')
      .required()
  })

  const handleSubmit = async values => {
    mutate(values)
  }

  return (
    <div className='w-screen h-full min-h-screen flex justify-center items-center'>
      <div className='w-full md:w-[480px] -mt-20'>
        <div className='w-full flex justify-center items-center gap-4 pb-6'>
          <h2 className='flex justify-center items-center font-apple text-2xl text-gray-800 font-semibold'>
            {siteName}
          </h2>
          <div className='flex justify-center items-center text-xl text-gray-500'>
            Manage Login
          </div>
        </div>
        <div className='w-full p-6'>
          <div className='login-messages'>
            {showError && (
              <div className='flex justify-between items-center h-10 bg-red-200 rounded-sm'>
                <div className='flex-1 flex justify-start items-center h-full text-sm text-red-500'>
                  {errorMessage}
                </div>
                <div
                  className='flex justify-center items-center w-8 h-full text-md text-gray-500 cursor-pointer hover:text-gray-800'
                  onClick={handleHideError}
                >
                  <RiCloseLine />
                </div>
              </div>
            )}
          </div>
          <Formik
            initialValues={initialVales}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form className='flex flex-col gap-4'>
                <FormControl
                  control='input'
                  type='input'
                  name='identity'
                  placeholder='Username or Email'
                />
                <FormControl
                  control='input'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <FormControl control='button' text='Login' />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
