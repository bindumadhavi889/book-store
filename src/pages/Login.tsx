import {auth} from '../firebase.js'
import SubmitBtn from "../components/SubmitBtn"
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { toast } from 'react-toastify'
const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential) ;
        setEmail('')
        setPassword('')
        toast.success('signed in successfully')
        // ...
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return (
    <div className='container'>
      <div className='login'>
        <form onSubmit={signIn}>
          <h1 style={{textAlign:'center',marginBottom:'1rem'}}>login</h1>
          <div className='input-div'>
            <label htmlFor="email">email</label>
              <input type='email' name='identifier' value={email}  id='email' className='input' onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='input-div'>
            <label htmlFor="password">password</label>
            <input type='password' name='password' value={password} className='input' onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <SubmitBtn text='login'/>
          <p style={{textAlign:'center'}}>Not a member yet?
            <Link to='/register'>Register</Link>
          </p>
        </form>
        <button className='back'>
          <Link to='/'>back home</Link>
          </button>
      </div>
    </div>
  )
}
export default Login