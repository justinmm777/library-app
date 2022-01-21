const books = JSON.parse(localStorage.getItem('books') || '[]');


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

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

// Clear form
const clearForm = () => {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;
}
// Getting user input and add book
const userInput = () => {
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        isRead = document.getElementById("isRead").checked;
     
    const newBook = new Book(title, author, pages, isRead);

    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));

    clearForm();
    createBook(newBook);
}



// function to create cards
const createBook = (book) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="card">
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
}



// Show and hide form
const hideEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "none";
}

const showEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "block";
}

// remove book from local storage
const removeBook = (index) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
}

// Show books on the page
const displayBooks = (books) => {
    books.forEach((book) => {
        createBook(book);
    })
}



// User Interface  & event listener
// add book details to myLibrary and display them on DOM
document.addEventListener("DOMContentLoaded", function(e) {
    hideEntryForm();
    displayBooks(books);


        // show entry form
    addBook.addEventListener("click", showEntryForm);

    // Submit form event listener
    form.addEventListener('submit', function(e) {
        // e.preventDefault();
        hideEntryForm();
        userInput();
    })


    // Remove book form dom
    const removeBtn = document.querySelectorAll('.btnRemove');
    
    removeBtn.forEach((btn, i) => {
        btn.addEventListener('click', (e, i) => {
            (e.currentTarget.parentElement.parentElement.parentElement.parentElement).remove();
            removeBook(i);
        });
    })
    
        
        
    
    
    
        // Toggle read status
    
        const btnRead = document.getElementById('readBtn');
    

});






