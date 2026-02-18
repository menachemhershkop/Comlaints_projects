import React from 'react'
import { Link } from 'react-router'

function Layout({children}) {
  return (
    <div>
      <nav className='navbar'>
        <button>
        <Link to='/'>Home</Link></button>
        <button>
        <Link to='/submit'>Submit Complaint</Link></button>
        <button>
        <Link to='/admin/login'>Admin</Link></button>
      </nav>

      <main className='container'>{children}</main>
    </div>
  )
}

export default Layout
