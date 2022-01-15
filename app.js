let myLibrary = [
    // {
    //     title:"The comic book",
    //     author:"Justin",
    //     pages: 100,
    //     isRead: "Read",
    // },
];

// selecting html elements
const form = document.querySelector("form");
const displayCards = document.querySelector(".displayCards");
const viewCard = document.querySelector("card");
const addBook = document.querySelector(".btnAdd");
const btnSubmit = document.querySelector(".btnSubmit");

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// function that loops through the array and displays each book on the page
const createCards = function(books) {
    myLibrary.forEach((book, i) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="card" data-attribute=${i}>
            <h2>Title: ${book.title}</h2>
            <h3>Author: ${book.author}</h3>
            <h3>Pages: ${book.pages}</h3>
            <div class="btn">
                <button id="readBtn" class="${book.isRead}">${book.isRead}</button>
                <div class="remove">
                <button class="btnRemove">Remove</button>
                </div>
            </div>
        </div>`
        displayCards.appendChild(newDiv);
    });
};

// Add book to library
const addBookToLibrary = function(event) {
    event.preventDefault();
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        isRead = document.getElementById("isRead").checked;
     
    const newBookDetails = new Book(title, author, pages, isRead);
    myLibrary.push(newBookDetails);
}

// Clear form
const clearForm = () => {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;
}

// Remove books
const removeBook = (book) => {
    if (book.title === title) {
        (e.target.parentElement.parentElement.parentElement.parentElement).remove();
        myLibrary.splice(i, 1);
    }
}

// Toggle read status
   


// Show and hide form functions
const hideEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "none";
}

const showEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "block";
}

// User Interface  & event listener
// add book details to myLibrary and display them on DOM
document.addEventListener("DOMContentLoaded", function(e) {
    hideEntryForm();
});

// show entry form
addBook.addEventListener("click", showEntryForm);

// Submit form event listener
form.addEventListener('submit', function(e) {
    displayCards.innerHTML = "";
    addBookToLibrary(e);
    hideEntryForm();
    createCards();
})

// Remove book form dom
const removeBtn = document.querySelector('.btnRemove');
removeBtn.addEventListener('click', (e) => {
    console.log(e.currentTarget);
})


// Create cards
createCards();


