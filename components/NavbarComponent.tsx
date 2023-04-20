import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NavbarComponent = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center">
          <h1 className='text-black text-lg font-semibold'>Travel Partner</h1>
      </Link>
      </div>
    </nav>
  )
}
export default NavbarComponent