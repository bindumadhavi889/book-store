import SingleBook from "./SingleBook"

const BooksList = ({books}) => {
  const formattedBooks = books.map((book)=>{
    const title = book.volumeInfo.title
    const image = book.volumeInfo.imageLinks.thumbnail
    const {id}=book
    const pageCount = book.volumeInfo.pageCount
    return {id,title,image,pageCount}
  })
  return (
    <div className='books'>
      {formattedBooks.map((book)=>{
        return (
          <SingleBook key={book.id} {...book} />
        )
      })}
    </div>
  )
}
export default BooksList