import image from '../assets/about.svg'
const About = () => {
  return (
    <div className='about'>
      <h2 style={{textAlign:'center'}}>About</h2>
      <div className='about-flex'>
        <p style={{lineHeight:'2rem',width:'50rem',fontSize:'20px',fontFamily:'bold'}}>
        We give you direct access to buy a book on our book store, and allow you to review on our products. It also gives you the option to expand your book's reading availability on a global scale, making it more accessible for readers around the world. It also allow you to read books on our store.
        </p>
        <img src={image} alt='about' className='img'/>
      </div>   
    </div>
  )
}
export default About