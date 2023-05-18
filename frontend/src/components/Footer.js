import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='Footer0'>
        <h1>Book Recommendation System</h1>
      </div>
      <div className='Footer1'>
        <div> Connect With Us at </div>
        <div class='contact-info'>
          <p>
            <div href='number'>+91 000000000</div>
          </p>
          <p>
            {/* <img src='./../../IMAGES/Contact us imgs/email.png' height='40px' /> */}
            <div href='mail' style={{ textDecoration: 'none' }}>
              {' '}
              jhanvigarg523@gmail.com
            </div>
          </p>
          <p>
            {/* <img src='./../../IMAGES/Contact us imgs/clock.png' height='40px' />{' '} */}
            9:00 am to 6:00 pm
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
