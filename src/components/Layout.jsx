import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import cx from 'clsx'
import { Header, SideBar } from '@/components'

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='w-screen h-full min-h-screen flex justify-between items-stretch relative'>
      <SideBar isVisible={isVisible} />
      <section
        className={cx(
          'flex-1 flex flex-col',
          {
            'layout-container': isVisible === false
          },
          {
            'w-full': isVisible === true
          }
        )}
      >
        <Header isVisible={isVisible} setIsVisible={setIsVisible} />
        <main className='flex-1 w-full h-full content-area'>
          <Outlet />
        </main>
      </section>
    </div>
  )
}

export default Layout
