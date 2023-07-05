import React from 'react'
import "./Main.css"

export const Main = (phone) => {
  return (
    <div className='main'>
        
        <h1>{phone.iPhoneName}</h1>
        <h3>price: {phone.price}</h3>
        <h3>color: {phone.color}</h3>
    </div>
  )
}
