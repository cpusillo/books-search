import axios from "axios"

const api = process.env.REACT_APP_GOOGLE_BOOKS_API;
// spaces example in api search query the%20joy%20luck%20club

export default {
    getBook(title){
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${api}`);
    }}
