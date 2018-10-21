import React from 'react'
import BookShow from './BookShow'


class BookShelf extends  React.Component {

    render(){
      
        const  Books  = this.props.books
        const Title = this.props.title


          return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{Title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

              {Books.map((Book) => (
                <li key={Book.id}>
                  <BookShow bookDetails= {Book}
                            changeShelf= {this.props.changeShelf} />
                </li>
              ))}

              </ol>
            </div>
          </div>
          )
    }
}


export default BookShelf