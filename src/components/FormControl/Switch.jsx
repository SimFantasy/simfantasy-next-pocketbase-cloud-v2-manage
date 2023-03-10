import { memo } from 'react'
import { Field, ErrorMessage } from 'formik'
import cx from 'clsx'

const Switch = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field, form, meta }) => {
          const handleClick = () => {
            form.setFieldValue(name, !field.values)
          }
          return (
            <div className='flex justify-start items-center h-10'>
              <div
                className={cx(
                  'flex justify-start items-center p-1 w-12 h-8 rounded-full transition-all duration-300 ease-linear',
                  {
                    'bg-gray-800': field.value,
                    'bg-gray-200': !field.value
                  }
                )}
              >
                <input
                  id={name}
                  type='checkbox'
                  {...field}
                  {...rest}
                  checked={field.value}
                  hidden
                  onClick={handleClick}
                />
                <label
                  htmlFor={name}
                  className={cx(
                    'w-6 h-6 rounded-full bg-gray-100 cursor-pointer transition-transform duration-300 ease-linear',
                    {
                      'translate-x-[16px]': field.value,
                      'translate-x-0': !field.value
                    }
                  )}
                ></label>
              </div>
            </div>
          )
        }}
      </Field>
      <ErrorMessage
        name={name}
        render={msg => <div className='form-error'>{msg}</div>}
      />
    </div>
  )
}

export default memo(Switch)
