import {
  RiMenuUnfoldLine,
  RiMenuFoldLine,
  RiShutDownLine
} from 'react-icons/ri'
import { useAuth } from '@/hooks'
import { avatarImage } from '@/utils'

const Header = ({ isVisible, setIsVisible }) => {
  const { authUser, logout } = useAuth()

  const handleToggleSidebar = () => {
    setIsVisible(!isVisible)
  }

  const handleLogout = () => {
    logout()
  }
  return (
    <div className='w-full h-14 px-4 flex justify-between items-center border-b border-gray-200'>
      <button
        className='w-10 h-10 flex justify-center items-center text-gray-500 rounded hover:text-gray-800 hover:bg-gray-200'
        onClick={handleToggleSidebar}
      >
        {isVisible ? (
          <RiMenuUnfoldLine size={24} />
        ) : (
          <RiMenuFoldLine size={24} />
        )}
      </button>
      <div className='flex justify-end items-center gap-2'>
        <div className='flex justify-end items-center gap-2'>
          <img src={authUser?.avatar} className='w-8 h-8 rounded-full' />
          <div className='text-gray-800'>{authUser?.email}</div>
        </div>
        <div
          className='flex justify-center items-center w-10 h-12 text-gray-500 hover:text-gray-800 cursor-pointer'
          onClick={handleLogout}
        >
          <RiShutDownLine size={16} />
        </div>
      </div>
    </div>
  )
}

export default Header
