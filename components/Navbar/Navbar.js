import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [activePage, setActivePage] = useState(pathname)

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const menu = (
    <>
      <li
        className={`h-3/4 flex items-center justify-center relative ${
          pathname === '/' ? 'active' : ''
        }`}
        onClick={() => handlePageChange('/')}
      >
        <Link
          className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
          href='/'
        >
          Home
        </Link>
        {pathname === '/' ? (
          <span className='bg-gray-100 rounded-full absolute inset-0 -z-10'></span>
        ) : (
          <></>
        )}
      </li>
      <li
        className={`h-3/4 flex items-center justify-center relative ${
          pathname === '/projects' ? 'active' : ''
        }`}
        onClick={() => handlePageChange('/projects')}
      >
        <Link
          className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
          href='/projects'
        >
          Projects
        </Link>
        {pathname === '/projects' ? (
          <span
            className='bg-gray-100 rounded-full absolute inset-0 -z-10'
            style={{
              transform: 'none',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        ) : (
          <></>
        )}
      </li>
      <li
        className='h-3/4 flex items-center justify-center relative'
        style={{
          opacity: '1',
          transform: 'none',
        }}
      >
        <Link
          className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
          href='/about'
        >
          About
        </Link>
        {pathname === '/about' ? (
          <span
            className='bg-gray-100 rounded-full absolute inset-0 -z-10'
            style={{
              transform: 'none',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        ) : (
          <></>
        )}
      </li>
      <li
        className='h-3/4 flex items-center justify-center relative'
        style={{
          opacity: '1',
          transform: 'none',
        }}
      >
        <Link
          className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
          href='/contact'
        >
          Contact
        </Link>
        {pathname === '/contact' ? (
          <span
            className='bg-gray-100 rounded-full absolute inset-0 -z-10'
            style={{
              transform: 'none',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        ) : (
          <></>
        )}
      </li>
      <li
        className='h-3/4 flex items-center justify-center relative'
        style={{
          opacity: '1',
          transform: 'none',
        }}
      >
        <Link
          className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
          href='/blogs'
        >
          Blogs
        </Link>
        {pathname === '/blogs' ? (
          <span
            className='bg-gray-100 rounded-full absolute inset-0 -z-10'
            style={{
              transform: 'none',
              transformOrigin: '50% 50% 0px',
            }}
          ></span>
        ) : (
          <></>
        )}
      </li>
      <li
        className='h-3/4 flex items-center justify-center relative'
        style={{
          opacity: '1',
          transform: 'none',
        }}
      >
        <Link
          className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
          href='/req-project'
        >
          Request Project
        </Link>
      </li>
    </>
  )

  return (
    <div
      className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[37rem] sm:rounded-full z-[999]'
      style={{
        opacity: '1',
        transform: 'translateX(-50%) translateY(0px) translateZ(0px)',
      }}
    >
      <nav className='flex fixed left-1/2 h-12 -translate-x-1/2 -translate-y-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[38rem] sm:flex-nowrap sm:gap-5'>
          {menu}
        </ul>
      </nav>
      <style jsx>{`
        li.active span {
          transform: none !important;
          transform-origin: 50% 50% 0px;
        }
        li.active span.transition-transform {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Navbar
