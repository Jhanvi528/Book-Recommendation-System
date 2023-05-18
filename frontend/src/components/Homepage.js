import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SERVER_URL } from '../config'
import Card from './Card'
import './homepage.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Homepage = () => {
  const [popular, setPopular] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(SERVER_URL)
        setPopular(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='head-tag'>Top 50 popular books</div>
      <div className='all-div-outer'>
        
        {popular.map(pop => (
          <Card data={pop} key={pop['Book-Title']} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage
