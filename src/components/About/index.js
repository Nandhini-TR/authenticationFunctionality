import Header from '../Header'
import Logout from '../LogoutButton'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <h1 className="about-heading">About Route</h1>
      <Logout />
    </div>
  </>
)

export default About
