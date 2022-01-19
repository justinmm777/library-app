let myLibrary = [
    {
        title:"The comic book",
        author:"Justin",
        pages: 100,
        isRead: "Read",
    },
];

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

Book.prototype.toggleRead = () => {
    this.isRead = !this.isRead;
}

// Getting user input
const userInput = (event) => {
    event.preventDefault();
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        isRead = document.getElementById("isRead").checked;
     
    const newBook = new Book(title, author, pages, isRead);
    return newBook;
}

// Clear form
const clearForm = () => {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;
}

const updateLibrary = (book) => {
    myLibrary.push(book);
}


// function to create cards
const displayBooks = () => {
    myLibrary.forEach((book, i) => {
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
    });
}

// Local Storage
const storeBooks = (book) => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

const getBooks = () => {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
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

// Remove book from Dom
const removeBook = (event) => {
    event.target.parent

}

// User Interface  & event listener
// add book details to myLibrary and display them on DOM
document.addEventListener("DOMContentLoaded", function(e) {
    hideEntryForm();
    getBooks();
    displayBooks();

        // show entry form
    addBook.addEventListener("click", showEntryForm);

    // Submit form event listener
    form.addEventListener('submit', function(e) {
        displayCards.innerHTML = "";
        updateLibrary(newBook);
        hideEntryForm();

        // Remove book form dom
        const removeBtn = document.querySelectorAll('.btnRemove');

        removeBtn.forEach((btn, i) => {
            btn.addEventListener('click', e => {
                (e.currentTarget.parentElement.parentElement.parentElement.parentElement).remove();
                myLibrary.splice(i, 1);
        })
        });

    })

    // Toggle read status
    const toggleRead = (book) => {
        this.isRead = !this.isRead;
        storeBooks(book)
    }

    const btnRead = document.getElementById('readBtn');
        btnRead.addEventListener('click', toggleRead());





});





