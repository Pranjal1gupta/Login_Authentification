import React from 'react'
import homeimg from '../media/signup2.png'

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="content">
          <p>Welcome</p>
          <h2>I am Pranjal Gupta mern developer</h2>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="homeimg">
            <img src={homeimg} alt="image" />
          </div>
          
        </div>

      </div>
    </div>
    </>
  )
}

export default Home