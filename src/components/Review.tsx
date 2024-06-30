import { useState } from "react"
import SubmitBtn from "./SubmitBtn"
import { toast } from "react-toastify"

const Review = () => {
  const [review,setReview] = useState('')
  const submit = (e) => {
    e.preventDefault()
    setReview('')
    toast.success('reviwed successfully')
  }
  return (
    <form onSubmit={submit}>
      <input type="text" className='review' value={review} onChange={(e)=>setReview(e.target.value)}/>
      <SubmitBtn text='submit review'/>
    </form>
      
  )
}
export default Review