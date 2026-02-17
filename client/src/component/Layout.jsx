import React from 'react'
import { Link } from 'react-router'

function Layout({children}) {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/submit'>Submit Complaint</Link>
        <Link to='/admin/login'>Admin</Link>
      </nav>

      <main className='container'>{children}</main>
    </div>
  )
}

export default Layout
