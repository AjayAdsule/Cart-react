/* eslint-disable react/prop-types */
import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({rate}) => {
  return (
    <React.Fragment>
      {[...Array(5)].map((_,index)=>{
        <span>{rate>index ? (<AiFillStar fontSize={'15px'}/>):(<AiOutlineStar fontSize={'15px'}/>)}</span>
      })}
     
    </React.Fragment>
  )
}

export default Rating
