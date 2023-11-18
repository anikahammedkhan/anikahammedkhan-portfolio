import React, { useState } from 'react'
import Image from 'next/image'
import Logo from './../../Assets/images/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const menu = (
    <>
      <li className='flex justify-center'>
        <Link
          className={`link nav-link ${pathname === '/' ? 'active' : ''}`}
          href='/'
        >
          Home
        </Link>
      </li>
      <li className='flex justify-center'>
        <Link
          className={`link nav-link ${
            pathname === '/projects' ? 'active' : ''
          }`}
          href='/projects'
        >
          Projects
        </Link>
      </li>
      <li className='flex justify-center'>
        <Link
          className={`link nav-link ${pathname === '/about' ? ' active' : ''}`}
          href='/about'
        >
          About
        </Link>
      </li>
      <li className='flex justify-center'>
        <Link
          className={`link nav-link ${pathname === '/contact' ? 'active' : ''}`}
          href='/contact'
        >
          Contact
        </Link>
      </li>
      <li className='flex justify-center'>
        <Link
          className={`link nav-link ${pathname === '/blogs' ? 'active' : ''}`}
          href='/blogs'
        >
          Blogs
        </Link>
      </li>
    </>
  )

  return (
    <div className='drawer lg:h-[80px] sticky top-0 bg-white z-[99]'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col bg-[#eeebeb]'>
        <div className='max-w-[1440px] mx-auto navbar relative flex justify-between px-5'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='logo'
              className='xl:w-[300px] lg:w-[200px] md:w-[250px] w-[150px]'
            />
          </Link>
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='flex-none hidden lg:block'>
            <ul className='flex gap-5 w-full text-[16px] font-semibold z-20 text-white hover:text-white'>
              {menu}
            </ul>
          </div>
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='flex flex-col pt-10 w-[200px] min-h-full bg-[#002366] text-white font-semibold'>
          <Link href='/'>
            <Image src={Logo} alt='logo' className='w-[180px] ps-10' />
          </Link>
          {menu}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
