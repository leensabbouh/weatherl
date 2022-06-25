import React from 'react'
import "../css/login.css"
import {auth,provider } from "./firebase"
import {useStateValue} from "./StateProvider"
import { actionType } from './Reducer'
export default function Login() {
  const [{},dispatch]=useStateValue()
  const signIn=()=>{
    auth.signInWithPopup(provider).then(result=>
      {
       dispatch({
         type:actionType.SET_USER,
         user:result.user,
       
       })
    }).catch(error=>console.log(error.message))
  }
  return (
    <div className='login_wrapper'>
       <div className='login'>
          <img alt="img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' />
          <h2>facebook</h2>
          <button onClick={signIn}>Login</button>
       </div>
    </div>
  )
}
