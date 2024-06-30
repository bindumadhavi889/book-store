
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import BooksList from '../components/BooksList'
const url =  'https://www.googleapis.com/books/v1/volumes?q=all'
 export const loader = async () => {
  const response = await axios.get(url)
  return {books:response.data.items}
}
const Landing = () => {
  const { books } = useLoaderData()
  return (
    <>
    <BooksList books={books}/>
    </>
  )
}
export default Landing