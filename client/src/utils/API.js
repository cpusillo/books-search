import axios from "axios"

const api = process.env.REACT_APP_GOOGLE_BOOKS_API;
// spaces example in api search query the%20joy%20luck%20club

export default {
        // using google api, search for the user input.
        getBook(title){
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${api}`);
         },
        saveBook(bookData){
                return axios.post("/api/books", bookData);
        },
        getSavedBooks(){
                return axios.get("/api/books");
        },
        deleteBook(){
                return axios.delete("/api/books/" + id);
        }
}
