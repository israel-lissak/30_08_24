import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Book_shelf from './Book_shelf'
import Footer from './Footer'
import Book from './Book'

interface book {
  bookName: string
    img: string
    descerption: string 
    titleSize: 'medium'

}

const book1:book = {bookName: 'book 1', img: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descerption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.', titleSize: 'medium'}

const book2:book = {bookName: 'book 2', img: 'https://images.pexels.com/photos/1730560/pexels-photo-1730560.jpeg?auto=compress&cs=tinysrgb&w=600', descerption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.', titleSize: 'medium'}

const book3:book = {bookName: 'book 3', img: 'https://images.pexels.com/photos/1793042/pexels-photo-1793042.jpeg?auto=compress&cs=tinysrgb&w=600', descerption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.', titleSize: 'medium'}

const book4:book = {bookName: 'book 4', img: 'https://images.pexels.com/photos/6373309/pexels-photo-6373309.jpeg?auto=compress&cs=tinysrgb&w=600', descerption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.', titleSize: 'medium'}



const booksArr = [book1, book2, book3, book4]

function App() {
 

  return (
    <>

      <Header/>

      <Book_shelf Book_shelf={booksArr}/>

      <Footer/>
    </>
  )
}

export default App
