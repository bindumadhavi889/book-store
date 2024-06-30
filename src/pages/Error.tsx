import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='error'>
      <h1>there was an error...</h1>
      <h2>we failed to navigate</h2>
      <button className='back'> 
      <Link to='/'>go home</Link></button>
    </div>
  )
}
export default Error