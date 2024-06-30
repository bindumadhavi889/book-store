import {Link} from 'react-router-dom'
const SingleBook = ({id,title,image,pageCount}) => {
  return (
    <div className='book'>
      <div>
        <img src={image}/>
      </div>
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <h5 style={{color:'gray'}}>page count: {pageCount}</h5>
      </div>
      <Link to={`/product/${id}`} className='btn'>details</Link>
    </div>
  )
}
export default SingleBook