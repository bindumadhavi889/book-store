
import SubmitBtn from "../components/SubmitBtn"
import {Link} from 'react-router-dom'
import {auth} from '../firebase.js'
import {createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { toast } from "react-toastify"
const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user)
      setName('')
      setEmail('')
      setPassword('')
      toast.success('signed up successfully')
    })
    .catch((error) => {
      console.log(error)
      toast.error('error')
    });
  }

  return (
    <div className='container'>
    <div className='login'>
      <form onSubmit={signUp}>
        <h1 style={{textAlign:'center',marginBottom:'1rem'}}>Register</h1>
        <div className='input-div'>
          <label htmlFor="name">name</label>
          <input type='name' name='name' value={name}  id='name' className='input' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='input-div'>
          <label htmlFor="file">file</label>
          <input type='file' name='file' id='file' className='input'/>
        </div>
        <div className='input-div'>
          <label htmlFor="email">email</label>
          <input type='email' name='identifier' value={email}  id='email' className='input' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='input-div'>
          <label htmlFor="password">password</label>
          <input type='password' name='password' value={password} className='input' onChange={(e)=>setPassword(e.target.value)}/>
          
        </div>
        <SubmitBtn text='register'/>
        <p style={{textAlign:'center'}}>Already a member yet?
          <Link to='/login'>Login</Link>
        </p>
      </form>
      <button className='back'>
          <Link to='/'>back home</Link>
          </button>
    </div>
  </div>
  )
}
export default Register