import React, { Component } from 'react';
import SavedBooksCard from "../SavedBooksCard/SavedBooksCard"

class SavedBooks extends Component {
    render() {
        return (
            // map through all of the passed in books to send to each friend card individually
            this.props.books.map((book) => (
            <SavedBooksCard
            id={book._id}
            title={book.title}
            description={book.description}
            authors={book.authors}
            link={book.link}
            image={book.image}
            deleteBook={this.props.deleteBook}
            key={book._id}
            />
        ))
        )
                           
    }
}

export default SavedBooks

