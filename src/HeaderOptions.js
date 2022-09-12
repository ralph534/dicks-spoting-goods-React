import React from 'react'
import './HeaderOption.css'

function HeaderOptions({title}) {
  return (
    <div>
        <p className="header-title">{title}</p>
    </div>
  )
}

export default HeaderOptions