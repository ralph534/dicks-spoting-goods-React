import React, {useState} from 'react'
import IMG1 from '../Dicks-Sporting-Goods-logo(WHITE).png'
import './Signup.css'
import { auth } from "../firebase";
import { useDispatch } from 'react-redux';

function Signup() {


    const {name, setName} = useState('');
    const [email, setEmail] = useState('');
    const {password, setPassword} = useState('');
    const {showpassword, setShowpassword} = useState(false);
    const dispatch = useDispatch();

    
    const login = (e) => {
      e.preventDefault();

    }

    const register = () =>{
        if(!name){
          return alert("Please enter full name !!")
        }
        auth.createUserWithEmailAndPassword(email, password).then(userAuth =>{
          userAuth.user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name
            }));
          });
        })
    }




  return (
    <div className="signup">
        <div className="signup-top">
            <img src={IMG1} alt="" />
        </div>
        <div className="signup_form">
            <p>Sign Up For ScoreCard</p>
            <form>
                    <input value={name} onChane ={(e) => setName(e.target.value)} placeHolder="Full Name ( required )" type="text"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeHolder="Email Address" type="text"/>
                    <input value={password} placeholder="Create Password" type={showpassword ? "text" : "password"}/>
            </form>
            <p className="terms_condition">By clicking the Create Account button below, I am agreeing to the DICK'S Terms of Use, Privacy Policy, and ScoreCard Terms and Conditions, and also confirming that my information above is correct.</p>
            <button onClick={register}>Join Now!</button>
        </div>
    </div>
  )
}

export default Signup