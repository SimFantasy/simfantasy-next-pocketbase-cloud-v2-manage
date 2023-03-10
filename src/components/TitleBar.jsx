import React from 'react'
import { Link } from 'react-router-dom'

const TitleBar = ({ title, buttonText, route }) => {
  return (
    <div className='w-full h-16 flex justify-between items-center'>
      <span className='text-xl text-gray-800 font-semibold'>{title}</span>
      {buttonText &&
        (route === 'back' ? (
          <Link
            to='/post'
            className='px-3 py-2 bg-transparent border border-gray-300 rounded text-sm text-gray-500 hover:border-gray-500 hover:text-gray-800'
          >
            {buttonText}
          </Link>
        ) : (
          <Link
            to={route}
            className='px-3 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded text-sm'
          >
            {buttonText}
          </Link>
        ))}
    </div>
  )
}

export default TitleBar
