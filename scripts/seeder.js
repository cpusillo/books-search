  
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["Amy Tan"],
    description: "Encompassing two generations and a rich blend of Chinese and American history, the story of four struggling, strong women also reveals their daughter's memories and feelings.",
    image: "http://books.google.com/books/content?id=2mgnEzzaJrIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.com/books/about/The_Joy_Luck_Club.html?hl=&id=2mgnEzzaJrIC",
    title: "The Joy Luck Club",
}

db.Book.collection.insertOne(bookSeed)
    .then(data => {
        console.log("Seeder ran successfully");
    })
    .catch(err => {
        console.error(err);
    });