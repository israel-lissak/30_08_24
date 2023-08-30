import React from 'react';
import Book from './Book';

interface Props {
  Book_shelf: {
    bookName: string;
    img: string;
    descerption: string;
    titleSize: 'medium'
  }[];
}

function Book_shelf(props: Props) {
  const { Book_shelf } = props;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
      {Book_shelf.map((book) => (
        <Book Book={book} />
      ))}
    </div>
  );
}

export default Book_shelf;


 /* <Book bookName='book 1' img='https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' descerption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.'/>
      
<Book bookName='book 2' img='https://images.pexels.com/photos/1730560/pexels-photo-1730560.jpeg?auto=compress&cs=tinysrgb&w=600' descerption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.'/>

<Book bookName='book 3' img='https://images.pexels.com/photos/1793042/pexels-photo-1793042.jpeg?auto=compress&cs=tinysrgb&w=600' descerption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.'/>

<Book bookName='book 4' img='https://images.pexels.com/photos/6373309/pexels-photo-6373309.jpeg?auto=compress&cs=tinysrgb&w=600' descerption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta voluptates nemo? Voluptas ipsum magni eligendi incidunt doloribus blanditiis labore alias nulla nesciunt praesentium. Fugiat facere repellendus blanditiis? Architecto, eos.'/> */