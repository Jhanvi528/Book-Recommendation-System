import React from 'react'
import './contact.css'
import Navbar from './Navbar'
import Footer from './Footer'
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div class='contact-us'>
        <u style={{ color: 'red' }}>
          <h1 style={{ color: 'red' }}> Contact Us</h1>
        </u>
        <h2>
          Please fill up the form below to send us a message. We will contact
          you very soon.
        </h2>
        <input
          type='text'
          id='inputname'
          placeholder='Name*'
          class='input-content'
          style={{ height: '30px' }}
        />
        <br />
        <div class='mail-container'>
          {' '}
          <input
            type='mail'
            id='inputmail'
            placeholder='Email*'
            class='input-content'
            style={{ height: '30px', width: '350px' }}
          />
          <input
            type='submit'
            id='verify email'
            value='Verify Email'
            class='verifymail-container'
          />
        </div>
        <br />
        <br />
        <div>
          <input
            type='text'
            id='inputaddress'
            placeholder='Address'
            class='input-content'
            style={{ height: '60px' }}
          />
          <br />
          <input
            type='number'
            id='inputphone'
            placeholder='Phone/Mobile'
            class='input-content'
            style={{ height: '30px' }}
          />
          <br />
          <input
            type='text'
            id='inputsubject'
            placeholder='Subject'
            class='input-content'
            style={{ height: '30px' }}
          />
          <br />
        </div>
      
        <div>
          <input
            type='text'
            id='inputsubject'
            placeholder='Description*'
            class='input-content'
            style={{height: '60px'}}
          />
          <br />
        
            <input type='submit'  id='submit' class='button' />
          
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
export default Contact
