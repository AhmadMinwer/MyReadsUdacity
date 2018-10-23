import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {
    
    state = {
        query: '',
        searchResult:[],
    }

    

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))

        BooksAPI.search(query)
        .then((searchResult) => {
            searchResult
            ? this.setState(() => ({searchResult}))
            : []
        }) 
    }


    searchForIDs(id){
        for( let j=0; j< this.props.books.length;j++){
            if(id===this.props.books[j].id){
                return this.props.books[j]
            }
        }
        return false
    }


    getShowingBooks(){
        let array =[]
        for(let i=0; i< this.state.searchResult.length ;i++){
            
            if(this.searchForIDs(this.state.searchResult[i].id)){
                array.push(this.searchForIDs(this.state.searchResult[i].id))
            }else{
                array.push(this.state.searchResult[i])
            }
        }
        return array
        
    }

    

   



    render() {
        const { query } = this.state
        
      
        const showingBooks = query === ''
            ? []
            : this.getShowingBooks()
            


        // const showingBooks = query === ''
        // ? []
        // : this.state.Books.filter((c) => (
            
        //     c.title.toLowerCase().includes(query.toLowerCase()) || c.authors.toString().toLowerCase().includes(query.toLowerCase())
        // ))


        return (

            <div className="search-books">
            
                
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>

                    <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                                        
                    <ol className="books-grid">
                    { 
                        // I have to right some code here to wait untill all data is
                        //fetched, otherwise if the internet conection was slow my code will show no Books found and after the data is fetched 
                        // my code will rerendering and show the books, but I'm not sure how i can do it :(
                        <BookShelf books={showingBooks} 
                                 changeShelf= {this.props.changeShelf}
                                 query={query}/> }
                    </ol>
                </div>
            </div>
        )
    }
}




export default SearchBook