import React from 'react'
import { Container, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import Results  from  "../components/Results/Results"
import "./Styles.css"
import API from "../utils/API"

class Search extends React.Component {

    // Build our state values
    state = {
        books: [],
        searchTerm: ""
    }

    // Set the state related to what's typed into the input box.
    handleInputChange = event => {
        const {name, value} = event.target; // pull the data out of the input box
        this.setState({
            [name]: value
        });
    };

    // Call our getBook() method when the search button is clicked/submitted.
    handleFormSubmit = () => {
        this.getBook();
    }

    // Pass our searchTerm into our API getBook() method to populate our results.
    getBook = () => {
        // scrub our title to make it work with the API link.
        const title = this.state.searchTerm.replace(/ /g,"%20").toLowerCase()
        // pass the scrubbed title value into our API method getBook as a param.
        API.getBook(title)
        // then we will set our state so we can use the books data in the List component.
        .then(res => {
            this.setState({
            books: res.data.items
        })}).catch(err => console.log(err)); // catch any errors and display to console.
    }

    saveBook = bookData => {
        // call API method save book and pass in our "bookData" values using our db structure
        API.saveBook({
            id: bookData.id,
            title: bookData.title,
            authors: bookData.authors,
            description: bookData.description,
            image: bookData.image,
            link: bookData.link
        }).catch(err => console.log(err)) // catch any errors and display to console.
    }

    render(){
    return (
        <>
            <Container>
                <Card>
                    <Card.Header>
                    <h3 className="text-center">Search for Books</h3>
                    </Card.Header>
                        <Card.Body>
                        
                            <InputGroup className="mb-3">
                                <FormControl 
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    placeholder="The Joy Luck Club"
                                    name="searchTerm"
                                />
                                <InputGroup.Append>
                                <Button 
                                variant="success"
                                onClick={this.handleFormSubmit}
                                ><FaSearch /></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                        </Card>
                    {this.state.books.length ? (
                    <Results
                        books={this.state.books}
                        saveBook={this.saveBook}
                        />
                    ) : (
                    <div>
                        <hr/>
                    <p>No results yet, try searching for a book!</p>
                    </div>
                )}
                
            </Container>
        </>
    )
    }
}
export default Search