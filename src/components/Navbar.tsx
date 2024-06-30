import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>books</h1>
        <Link to='/'>
          <h3>Home</h3>
        </Link>
        <Link to='about'>
          <h3>About</h3></Link>
      <NavLink to='login'>
        <h3>Sign In</h3></NavLink>
      <NavLink to='register'>
        <h3>Register</h3></NavLink>
    </nav>
  )
}
export default Navbar