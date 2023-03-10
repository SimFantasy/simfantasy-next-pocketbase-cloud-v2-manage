import { memo } from 'react'
import { Field, ErrorMessage } from 'formik'

const Textarea = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field
        as='textarea'
        id={name}
        name={name}
        {...rest}
        className='form-textarea p-2 h-auto min-h-[100px]'
      />
      <ErrorMessage
        name={name}
        render={msg => <div className='form-error'>{msg}</div>}
      />
    </div>
  )
}

export default memo(Textarea)
