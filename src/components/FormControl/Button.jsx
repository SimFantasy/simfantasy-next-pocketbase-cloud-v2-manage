import cx from 'clsx'
import React from 'react'

const Button = ({ text, className, ...rest }) => {
  return (
    <button
      type='submit'
      className={cx(
        'px-4 py-2 flex justify-center items-center bg-gray-800 hover:bg-gray-500 text-gray-100 rounded cursor-pointer',
        className
      )}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
