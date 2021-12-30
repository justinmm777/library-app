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


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.isRead}`;
}

// User Interface
const addBookToLibrary = function(event) {
    event.preventDefault();
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        isRead = document.getElementById("isRead").value;
        if (isRead =="on") {
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


// Show and hide form functions
const hideEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "none";
}

const showEntryForm = () => {
    const entryForm = document.getElementById("bookEntry");
    entryForm.style.display = "block";
}
// add book details to myLibrary
document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();
    hideEntryForm();
    const btnSubmit = document.querySelector(".btnSubmit")
    btnSubmit.addEventListener("click", addBookToLibrary);
    btnSubmit.addEventListener("click", hideEntryForm);
});

// show entry form
const addBook = document.querySelector(".btnAdd");
addBook.addEventListener("click", showEntryForm);

createCards(myLibrary);