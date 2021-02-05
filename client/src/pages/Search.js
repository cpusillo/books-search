import React from 'react'
import { Container, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { List, ListItem } from "../components/List/List"
import "./Search.css"
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
    handleFormSubmit = event => {
        event.preventDefault(); // prevent the form from wiping out the value on submit
        this.getBook();
    }

    getBook = () => {
        const title = this.state.searchTerm.replace(/ /g,"%20").toLowerCase()
        console.log(title); // make sure the title looks right
        // pass the scrubbed title value into our API method getBook as a param.
        API.getBook(title)
        // then we will set our state so we can use the books data in the List component.
        .then(res => {
            this.setState({
            books: res.data.items
        })}).catch(err => console.log(err)); // catch any errors and display to console.
    }

    render(){
    return (
        <>
            <Container>
                <Card>
                    <Card.Header className="header-img">
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

            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                        <strong>
                        {book.volumeInfo.title}
                        </strong>
                        <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}/>
                        <a href={book.volumeInfo.previewLink}>Click for more</a>
                        {book.volumeInfo.authors}
                        {book.volumeInfo.description}
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
                
                </Card>
            </Container>
        </>
    )
    }
}
export default Search