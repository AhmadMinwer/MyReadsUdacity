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
              
              {(() => {   
                  // i didn't need another state :p ,here is my lazy way
                  if(Books.length>0){
                    return( Books.map((Book) => (
                                <li key={Book.id}>
                                <BookShow bookDetails= {Book}
                                            changeShelf= {this.props.changeShelf} />
                                </li>
                            ))
                    )
                  }else if(Books.length<=0 && this.props.query && this.props.query.length >0){
                       return ( <div>Books not found!</div>)
                  }
                    
                })()}

              </ol>
            </div>
          </div>
          )
    }
}


export default BookShelf