import React, { useState } from 'react'
import { SERVER_URL } from '../config'
import axios from 'axios'
import RecommendCard from './RecommendCard'
import { useNavigate } from 'react-router-dom'
import './recommend.css'
import Navbar from './Navbar'
import Footer from './Footer'
const Recommend = () => {
  const navigate = useNavigate()
  const [bookname, setBookname] = useState('')
  const [matchBook, setmatchBook] = useState([])

  function handleChange (e) {
    setBookname(e.target.value)
  }
  const findBooks = async () => {
    try {
      if (bookname.trim() == '') {
        navigate('/recommend')
        return
      }
      const response = await axios.post(`${SERVER_URL}/recommend`, {
        book_name: bookname.trim()
      })

      const recommended_books = JSON.parse(response.data.recommended_books)
      setmatchBook(recommended_books)
    } catch (error) {
      if (error.response.data.detail == 'Book not found') {
       alert('Book not found.Please enter any other book')
      }
      console.error(error.response.data)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='head-tag'>Recommend books</div>
      <div className='taking-input'>
        <input
          type='text'
          value={bookname}
          name='book'
          placeholder='Enter book...'
          onChange={handleChange}
        ></input>
        <input
          className='btn'
          type='button'
          value='Submit'
          onClick={findBooks}
        ></input>
      </div>
      <div className='all-div-outer'>
        {matchBook.map(pop => (
          <RecommendCard key={pop.title} {...pop} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Recommend
