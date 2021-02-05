import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

function Results(props){
    return(
        // map through the books so we get the entire result list
        props.books.map((book) => (
            <Card>
                <Card.Header>
                <h3>{book.volumeInfo.title}</h3>
                <p class="lead">{book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(" & ") : book.volumeInfo.authors}</p>
                </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <img className="img-fluid" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail :
                                        "https://img.icons8.com/cute-clipart/64/000000/no-image.png"}/>
                            </Col>
                            <Col>
                                <p class="lead">
                                {book.volumeInfo.description}
                                </p>
                                <a href={book.volumeInfo.previewLink} target="_blank">
                                <Button variant="danger" className="px-2">Preview</Button>
                                    </a>
                                <Button variant="danger" className="px-2 ml-1">Save Book</Button>
                            </Col>
                        </Row>           
                    </Card.Body>
            </Card>
        ))
    )
}
export default Results