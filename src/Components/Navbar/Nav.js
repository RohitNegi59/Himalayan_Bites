import React from 'react'

const Nav = () => {
  return (
    <div className='Navbar'>
        <div className='Rightnav'>
           <ul className='list'>
            <li><a href='/home'><h1 className='navitem'>Home</h1></a>
            </li>
            <li><h1 className='navitem'>About</h1>
            </li>
            <li><h1 className='navitem'>Contact</h1>
            </li>
           </ul>
        </div>
        <div className='Leftnav'>
            <a href='/cart'  className='cart'><img src="cart.svg" alt="My SVG" width="40" height="40"/></a>
            {/* <div className='log'><a href='/login'><h1 className='navitem'>Log in</h1></a></div> */}
            <div ><a href='/profile'><h1 className='navitem'>Profile</h1></a></div>
            
        </div>
    </div>
  )
}

export default Nav