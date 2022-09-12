import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions'

function Header() {
  return (
    <div className="header">
        <div className="header-top">
            <p className="left-sentence">Best Price Guarantee</p>
            <p className="right-sentence">If You Find A Lower Price, We'll Price Match It. <span>Details</span></p>
        </div>
        <div className="header-middle">
            <div className='left-options'>
              <HeaderOptions title="Pickup & Deliver" />
              <HeaderOptions title="Rental" />
              <HeaderOptions title="Services" />
            </div>
            <div className="vl"></div>
            <div className='right-options'>
              <HeaderOptions title="Track Order" />
              <HeaderOptions title="Help" />
            </div>
        </div>
    </div>
  )
}

export default Header