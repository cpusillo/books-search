import React, {Component} from 'react';
import {Card, Col, Row, Button} from "react-bootstrap";
import {FaReadme, FaTrashAlt} from "react-icons/fa"

class SavedBooksCard extends Component {
    // pass the entire this.props object into our deleteBook() method for deletion
    deleteBook = () => {
        this.props.deleteBook(this.props)
    }
        render(){
            // deconstruct our props for easier usage.
            const {book} = this.props
        return (
    
               <Card >
                    <Card.Header>
                    <h3>{this.props.title}</h3>
                        <p className="lead">{this.props.authors}</p>
                    </Card.Header>
                        <Card.Body>
                                <Row>
                                    <Col>
                                        <img className="img-fluid" alt="cover image" src={this.props.image}/>
                                                <br/>
                                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" >
                                        <Button variant="danger" className="px-2 mt-2"><FaReadme/></Button>
                                            </a>
                                        <Button variant="danger" className="px-2 ml-1 mt-2" onClick={this.deleteBook}><FaTrashAlt/></Button>
                                    </Col>
                                    <Col>
                                        <p>
                                        {this.props.description}
                                        </p>

                                    </Col>
                                </Row>           
                            </Card.Body>
                </Card>   
        ) 
}
}


export default SavedBooksCard;