import React from 'react'
import { Container, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { List, ListItem } from "../components/List/List"
import Results  from  "../components/Results/Results"
import "./Search.css"
import API from "../utils/API"

class Saved extends React.Component {
    render(){
        return(
            <Container>
                <Card>
                <Card.Header className="header-img">
                    </Card.Header>
                        <Card.Body>
                            <h3 className="text-center">Your saved books</h3>
                        </Card.Body>
                        </Card>
            </Container>
        )
    }
}
export default Saved