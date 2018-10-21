import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook'
import BookList from './BookList'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */


    Books: []

  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((Books) => {
        this.setState(() => ({
          Books
        }))
      })
  }


  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    }

    
    handleChange = (Book,event) => {
      let  index =0;
      for( index=0; index<this.state.Books.length; index++){
        if(Book.id === this.state.Books[index].id)
          break;
      }

      

      let newBooks = this.state.Books;
      newBooks[index].shelf = event.target.value
      this.setState({Books: newBooks});

      BooksAPI.update(Book,event.target.value);


    }

  // changeShelf= (Book) =>{
    
  //   for(let index=0; index<Books.size(); index++){
  //     if(Book.id == Books[index].id)
  //       break;
  //   }
    
  //   this.setState({...this.state.Books[index], shelf: 'someothername'});
  // };

  render() {
    return (
      <div className="app">
        <Route 
          exact path='/search' 
          render={() =>  ( 
          <SearchBook 
            books={this.state.Books}
            changeShelf = {this.handleChange} />
        )} />

        <Route 
          exact path='/' 
          render={() =>  (
          <BookList 
            books={this.state.Books}
            changeShelf = {this.handleChange} />
        )} />

      </div>
    )
  }
}

export default BooksApp
