import React from 'react'
import TrendingOption from './TrendingOption'
import NavOption from './NavOption'
import './NavBar.css'

function NavBar() {
  return (
    <div className="nav">
        <div className="nav-trends">
            <h3>Trending Searches</h3>
           <TrendingOption title="New Savings"/>
           <TrendingOption title="Sneaker Releases"/>
           <TrendingOption title="NFL"/>
           <TrendingOption title="The North Face"/>
           <TrendingOption title="Soccer"/>
           <TrendingOption title="Flannels"/>
           <TrendingOption title="Yeti"/>
        </div>

        <div className="nav-bottom">
            <NavOption title="Sports"/>
            <NavOption title="Women"/>
            <NavOption title="Men"/>
            <NavOption title="Kids"/>
            <NavOption title="Exercise and Wellness"/>
            <NavOption title="Outdoor"/>
            <NavOption title="Fan Shop"/>
            <NavOption title="Accessories"/>
            <NavOption title="Top Brands"/>
            <NavOption title="Sales"/>
        </div>
    </div>
  )
}

export default NavBar