import Header from '../Header'
import Logout from '../LogoutButton'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Home Route</h1>
      <Logout />
    </div>
  </>
)

export default Home
