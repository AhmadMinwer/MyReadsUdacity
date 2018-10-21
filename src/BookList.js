import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
    render() {

        const Books = this.props.books

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            books={Books.filter(Book => Book.shelf === "currentlyReading")}
                            title="Currently Reading"
                            changeShelf = {this.props.changeShelf}
                        />
                        <BookShelf
                            books={Books.filter(Book => Book.shelf === "wantToRead")}
                            title="Want to Read"
                            changeShelf = {this.props.changeShelf}
                        />
                        <BookShelf
                            books={Books.filter(Book => Book.shelf === "read")}
                            title="Read"
                            changeShelf = {this.props.changeShelf}
                        />

                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>

                </div>
            </div>
        )
    }


}


export default BookList