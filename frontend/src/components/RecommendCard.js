import React, { useState } from 'react'
import './card.css'

const RecommendCard = props => {
 
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.image_url}></img>
      </div>
      <div className='card-text'>
        <div style={{ fontSize: '25px' ,color:'red',fontWeight:'bolder'}}>{props.title}</div>
        <div style={{ fontSize: '22px' }}>{props.author}</div>
       
      </div>
    </div>
  )
}
export default RecommendCard

