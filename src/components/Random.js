import React from 'react'

export default function Random(props) {
  const { min, max } = props;
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return (
    <div className='random-card'><h1>Random Value Between {min} and {max} = {randomNum}</h1></div>
  )
}
