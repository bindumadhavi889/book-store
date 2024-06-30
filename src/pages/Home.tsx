import { Outlet } from "react-router-dom"
import {Navbar} from '../components'
const Home = () => {
  return (
    <main>
      <Navbar/>
      <Outlet/>
    </main>
  )
}
export default Home