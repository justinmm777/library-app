let myLibrary = [
    {
        title:"The comic book",
        author:"ju",
        pages: 100,
        isRead: true,
    },
    {
        title:"The book",
        author:"leo",
        pages: 50,
        isRead: false,
    },
];

// selecting html elements
const form = document.querySelector("form");
const displayCards = document.querySelector(".displayCards");
const viewCard = document.querySelector("card");
const addBook = document.querySelector(".btnAdd");

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
Book.prototype.info = function() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.isRead}`;
}
Book.prototype.isRead = false;


const addBookToLibrary = function(event) {
    event.preventDefault();
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        isRead = document.getElementById("isRead").value;

    const newBookDetails = new Book(title, author, pages, isRead);
    myLibrary.push(newBookDetails);
}


const createCards = function(books, viewCard) {
    myLibrary.forEach(function(book, i) {
        const card = `<div class="card" data-index="${i}">
        <h1>${book.title}</h1>
        <h2>${book.author}</h2>
        <h2>${book.pages}</h2>
        <h2>${book.isRead}</h2>
        <div class="remove">
            <button class="btnRemove">Remove</button>
        </div>
    </div>`

    const newDiv = document.createElement("div");
    newDiv.innerHTML = card;
    displayCards.appendChild(newDiv.firstChild);
    })
    
};


// add book details to myLibrary

document.addEventListener("DOMContentLoaded", function() {
    const btnSubmit = document.querySelector(".submit")
    btnSubmit.addEventListener("click", addBookToLibrary);
    const form = document.querySelector("form");
    form.reset();
});

// hide form and show
const entryForm = document.getElementById("bookEntry");
const showForm = function() {
    entryForm.classList.toggle("toggle-on");
}
addBook.addEventListener("click", showForm());

createCards(myLibrary);



console.log(myLibrary);
