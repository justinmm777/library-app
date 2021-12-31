let myLibrary = [
    {
        title:"The comic book",
        author:"Justin",
        pages: 100,
        isRead: "Read",
    },
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
const createCards = function() {
    myLibrary.forEach((book, i) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="card" data-attribute=${i}>
            <h1>${book.title}</h1>
            <h2>${book.author}</h2>
            <h2>${book.pages}</h2>
            <h2>${book.isRead}</h2>
            <div class="read">
                <button class="btnRead">${book.isRead}</button>
            </div>
            <div class="remove">
                <button class="btnRemove">Remove</button>
            </div>
            
        </div>`
        displayCards.appendChild(newDiv);
        
    });
};

// User Interface
const addBookToLibrary = function(event) {
    event.preventDefault();
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        bookIsRead = document.getElementById("isRead").checked;
        if(bookIsRead) {
            isRead = "Read";
        } else {
            isRead = "Not Read"
        }
     
    const newBookDetails = new Book(title, author, pages, isRead);
    myLibrary.push(newBookDetails);
    console.log(myLibrary);

    // Clear form
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;

    createCards(); 

    // Remove books
    const btnRemove = document.querySelectorAll(".btnRemove");
       btnRemove.forEach((btn) => {
           btn.addEventListener("click", (e) => {
               (e.target.parentElement.parentElement).remove();
           })
       })
}

// Show and hide form functions
const hideEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "none";
}

const showEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "block";
}
// add book details to myLibrary and display them on DOM
document.addEventListener("DOMContentLoaded", function(e) {
    hideEntryForm();
    btnSubmit.addEventListener("click", function() {
        displayCards.innerHTML = "";
    })
    btnSubmit.addEventListener("click", addBookToLibrary);
    btnSubmit.addEventListener("click", hideEntryForm);
    
});

// show entry form
addBook.addEventListener("click", showEntryForm);



