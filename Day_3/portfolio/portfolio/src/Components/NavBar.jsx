import React from 'react';
import {NavLink, } from "react-router";

const NavBar = () => {
  return (
    <div className='w-full h-auto flex justify-between bg-red-400 p-3'>
      {/* logo or name */}
      <div className='text-xl gap-2 '>
        Swapnil
      </div>

      {/* navs/menus  */}
      <div className='text-xl flex gap-2 '>
        <NavLink to="path" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>

        <NavLink to="path" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        
        <NavLink to="path" className={({ isActive }) => isActive ? 'active' : ''}>
          Projects
        </NavLink>

        <NavLink to="path" className={ `
          ({ isActive }) => isActive ? 'active' : ''}`}>
          Get in tuoch
        </NavLink>

      </div>
    </div>
  )
}

export default NavBar