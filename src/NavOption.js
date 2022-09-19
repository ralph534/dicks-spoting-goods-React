import React from 'react'
import './NavOption.css'

function NavOption({title}) {
  return (
    <div>
        <p className="nav-option">{title}</p>
    </div>
  )
}

export default NavOption