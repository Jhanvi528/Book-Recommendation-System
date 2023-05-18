import React, { useState } from 'react'
import './card.css'

const Card = props => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.data.img}></img>
      </div>
      <div className='card-text'>
        <div style={{ fontSize: '25px' ,color:'red',fontWeight:'bolder'}}>{props.data.book_title}</div>
        <div style={{ fontSize: '22px' }}>{props.data.book_author}</div>
        <div style={{ fontSize: '18px' }}>Voters: {props.data.num_ratings}</div>
        <div style={{ fontSize: '18px' }}>
          Rating: {props.data.avg_ratings.toFixed(2)}
        </div>
      </div>
    </div>
  )
}
export default Card
