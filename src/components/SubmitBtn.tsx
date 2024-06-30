const SubmitBtn = ({text}) => {
  return (
    <div style={{margin:'1.5rem',placeItems:'center'}}>
      <button className='submit' type='submit'>
        {text?text:'submit'}
      </button>
    </div>
  )
}
export default SubmitBtn