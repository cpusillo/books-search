import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import { FaReadme, FaSave } from 'react-icons/fa';

class ResultsCard extends Component {
    // Pass in our entire props object into the saveBook() method.
    saveBook = () => {
        this.props.saveBook(this.props)
    }
    
    render(){
        // Deconstruct our props for easier use in the UI.
        const {book} = this.props
        return (
          <Card>
                <Card.Header>
                    <h3>{this.props.title}</h3>
                    <p className="lead">{this.props.authors}</p>
                </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <img className="img-fluid" alt={this.props.title} src={this.props.image}/>
                                        <br/>
                                    <a href={this.props.link} target="_blank" rel="noreferrer" >
                                    <Button variant="danger" className="px-2 mt-2"><FaReadme/></Button>
                                    </a>
                                    <Button variant="danger" className="px-2 ml-1 mt-2" onClick={this.saveBook}><FaSave/></Button>       
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

export default ResultsCard;





