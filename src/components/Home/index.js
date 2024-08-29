// Write your code here
import Header from '../Header'
import './index.css'

const Home = props => {
  console.log(props)
  return (
    <div>
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
          alt="home"
        />
      </div>
    </div>
  )
}

export default Home
