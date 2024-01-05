import React, {useState} from 'react'
import IMG1 from '../Dicks-Sporting-Goods-logo(WHITE).png'
import './Signup.css'

function Signup() {

    const [name, setName] = useState('');

  return (
    <div>
        <div className="signup-top">
            <img src={IMG1} alt="" />
        </div>
        <div className="signup_form">
            <h3>Sign Up For ScoreCard</h3>
            <form>
                <label>Enter Email address:
                    <input value={name} type="text"/>
                </label>
            </form>
        </div>
    </div>
  )
}

export default Signup