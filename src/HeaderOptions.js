import React from 'react'
import './HeaderOption.css'

function HeaderOptions({title}) {
  return (
    <div>
      <ul>
        <li className="header-title">{title}</li>
      </ul>
    </div>
  )
}

export default HeaderOptions