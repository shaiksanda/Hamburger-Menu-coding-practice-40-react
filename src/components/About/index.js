// Write your code here
import Header from '../Header'

const About = props => {
  console.log(props)
  return (
    <div>
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
      </div>
    </div>
  )
}

export default About
