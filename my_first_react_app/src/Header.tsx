import React from 'react'
import Title from './Title'


function Header() {
  return (
    <header style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
        <Title title = 'my website' size = 'large'/>
        <button style={{backgroundColor: 'gray'}}>hey :)</button>    
    </header>
  )
}

export default Header