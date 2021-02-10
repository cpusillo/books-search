import React, { Component } from 'react'
import ResultsCard from "../ResultsCard/ResultsCard";

class ResultList extends Component {


    render() {
        return (
            // map over our this.props.books object to d
            this.props.books.map((book) => (
            <ResultsCard 
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                link={book.volumeInfo.previewLink}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://img.icons8.com/plasticine/2x/no-image.png"}
                description={book.volumeInfo.description}
                saveBook={this.props.saveBook}
            />
        ))
        )
                           
    }
}

export default ResultList


