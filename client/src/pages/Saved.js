import React from 'react'
import { Container, Card} from 'react-bootstrap'
import "./Styles.css"
import SavedBooks from "../components/SavedBooks/SavedBooks"
import API from "../utils/API"

class Saved extends React.Component {
    state = {
        books: []
    }

    // when the component mounts run the getSavedBooks method automagically.
    componentDidMount = () => {
        this.getSavedBooks();
    }

    // method for finding all saved books from the db
    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res => {this.setState({books: res.data})
        }).catch(err => console.log(err))
    }

    // method for deleting a book from the db
    deleteBook = bookData => {
        // pass in bound param id from front end to db.
        API.deleteBook(bookData.id)
        // after the book is deleted reload the page
          .then(window.location.reload(false))
          .catch(err => console.log(err)); // display errors to the console, if any
      }


    render(){
        return(
            <Container>
                <Card>
                        <Card.Header>
                            <h3 className="text-center">Your saved books</h3>
                        </Card.Header>
                        </Card>
                        {this.state.books.length ? (
                            <SavedBooks
                                books={this.state.books}
                                deleteBook={this.deleteBook}
                            />
                            ) : (
                            <div>
                                <hr/>
                            <p>Nothing here! Go back to search and save some books!</p>
                            </div>
                         )}
            </Container>
        )
    }
}
export default Saved