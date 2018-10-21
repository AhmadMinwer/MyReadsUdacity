import React from 'react'

class BookShow extends  React.Component {

    render(){
      const  Book  = this.props.bookDetails
      
      
        
      return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Book.imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select value={Book.shelf} onChange={(e) =>this.props.changeShelf(Book, e)} >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{Book.title}</div>
            <div className="book-authors">{Book.authors.toString()}</div>
          </div>
        )
    }

} 



export default BookShow