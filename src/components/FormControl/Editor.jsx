import { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import MDEditor from '@uiw/react-md-editor'

const Editor = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      {label && <label htmlFor={name}>{label}</label>}
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => (
          <MDEditor
            className='form-editor min-h-[400px]'
            {...rest}
            {...field}
            name={name}
            id={name}
            value={field.value}
            onChange={value => form.setFieldValue(name, value)}
            onBlur={event => form.setFieldTouched(name, true)}
            preview='edit'
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        render={msg => <div className='form-error'>{msg}</div>}
      />
    </div>
  )
}

export default memo(Editor)
