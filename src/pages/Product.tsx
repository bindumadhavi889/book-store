
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Review from '../components/Review';
const bookUrl = 'https://www.googleapis.com/books/v1/volumes/'
export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${bookUrl}${id}`);
  return { id, data };
};
const Product = () => {
  const {id,data} = useLoaderData()
  console.log(id)
  const book = data.volumeInfo
  return (
      <div className='product-div'>
      <div>
        <img src={book.imageLinks.thumbnail} alt='image' className='img'/>
      </div>
      <div style={{lineHeight:'3rem'}}>
        <h1 style={{color:'gray'}}><span style={{color:'black'}}>Title : </span> {book.title}</h1>
        <h2 style={{color:'gray'}}><span style={{color:'black'}}>SubTitle : </span> {book.subtitle}</h2>
        <h3 style={{color:'gray'}}><span style={{color:'black'}}>Author : </span> {book.authors}</h3>
        <h3 style={{color:'gray'}}><span style={{color:'black'}}>Publisher : </span> {book.publisher}</h3>
        <h3 style={{color:'gray',lineHeight:'1.7rem'}}><span style={{color:'black'}}>Description : </span> {book.description}</h3>
        <h3 style={{color:'gray'}}><span style={{color:'black'}}>Page Count : </span> {book.pageCount}</h3>
        <h3>Review this book</h3>
        <Review/>
      </div>
    </div>

  )
}
export default Product