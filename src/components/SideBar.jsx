import { NavLink, Link } from 'react-router-dom'
import cx from 'clsx'
import { siteName, sidebarNavs } from '@/constants/config'

const SideBar = ({ isVisible }) => {
  return (
    <div
      className={cx(
        'fixed top-0 left-0 w-60 h-screen bg-white shadow-xl shadow-gray-200 flex flex-col transition-transform duration-300 ease-linear',
        {
          '-translate-x-full w-0 hidden': isVisible
        }
      )}
    >
      <div className='flex justify-center items-center gap-1 h-14 px-4 text-xl text-gray-800 border-b border-gray-100'>
        <span className='font-apple'>{siteName}</span>
        <span className='text-sm text-gray-600 uppercase'>blog manage</span>
      </div>
      <nav className='flex flex-col my-4 px-2 navs'>
        {sidebarNavs.map(nav => (
          <div key={nav.route} className='flex flex-col'>
            <Link
              to={nav.route}
              className='w-full h-10 px-2 flex justify-start items-center gap-2 text-gray-500 hover:text-gray-800'
            >
              {nav.icon}
              {nav.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default SideBar
