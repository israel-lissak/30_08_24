import React from 'react'
import Title from './Title'

interface Props {
    Book: {
        bookName: string
        img: string
        descerption: string 
        titleSize: 'medium'
    }
}

function Book(props: Props) {
  return (
    <div style={{width:'500px' , border:'1px black solid', borderRadius:'15px', margin:'10px'}}>
        <Title title={props.Book.bookName} size={props.Book.titleSize}></Title>
        <img src={props.Book.img} width={'250px'}/>
        <p>{props.Book.descerption}</p>
    </div>
  )
}

export default Book