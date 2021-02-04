import React, { useState } from 'react'
import { Container, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import "./Search.css"
import API from "../utils/API"

export default function Search() {

    const [title, setTitle] = useState('')
    const [book,setBook] = useState('')

    function getBook(){
        API.getBook(title).then(res => console.log(res.data))
        .catch(err => console.log(err));
    }

    return (
        <>
            <Container>
            <Card>
                <Card.Header>
                    <h2 className="w-100 text-center mt-2"><FaBook class="icon"/> Google Books Search</h2>
                </Card.Header>
                <Card.Body>
                <InputGroup className="mb-3">
                <FormControl onChange={event => setTitle(event.target.value.replace(/ /g,"%20").toLowerCase())}
                placeholder="The Joy Luck Club"
                />
                <InputGroup.Append>
                <Button variant="success" onClick={() => getBook(title)}><FaSearch /></Button>
                </InputGroup.Append>
                </InputGroup>
                </Card.Body>


            </Card>

            <Card className="mt-2 p-3">
                <p>Search results populate here</p>
            </Card>
            </Container>

        </>
    )
}
