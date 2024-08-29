// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = props => {
  console.log(props)
  return (
    <div style={{width: '100%'}}>
      <Header />
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
          alt="not found"
          className="image"
        />
        <h1 className="heading">Lost Your Way?</h1>
        <p className="content">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  )
}

export default NotFound
