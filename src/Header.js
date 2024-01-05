import React from 'react'
import './Header.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HeaderOptions from './HeaderOptions'
import IMG from './Dicks-Sporting-Goods-Symbol.png'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {MdShoppingCart} from 'react-icons/md'

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

        <div className="header-bottom">

           <img src={IMG} alt="" />

           <div className="header-search">
              <AiOutlineSearch className="search-icon"/>
              <input placeholder='What are you looking for?' type='text' />
           </div>
           
           <div className="find-store">
              <h3>Find A Store</h3> 
              <RiArrowDropDownLine className="arrow" size={25}/>
           </div>

            
            
            <div className="my-account">
             <div className="account-header">
                <FaUser/>
                <p className="account-title">My Account</p>
              </div>
              <p className="account-text">Sign in to Earn Points</p>
            </div>

            <div className="shopping-cart">
              <MdShoppingCart className="cart" size={22}/>
              <p>Cart</p>
            </div>

        </div>
    </div>
  )
}

export default Header