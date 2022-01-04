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
const createCards = function() {
    myLibrary.forEach((book, i) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="card" data-attribute=${i}>
            <h1>${book.title}</h1>
            <h2>${book.author}</h2>
            <h2>${book.pages}</h2>
            <div class="btn">
                <button id="readBtn" class="${book.isRead}">${book.isRead}</button>
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
        isRead = document.getElementById("isRead").checked;
        if(isRead) {
            isRead = "Read";
        } else {
            isRead = "Not-Read"
        }
     
    const newBookDetails = new Book(title, author, pages, isRead);
    myLibrary.push(newBookDetails);
    // console.log(myLibrary);

    // Clear form
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;

    createCards(); 
   
    // Toggle read status
    const btnRead = document.querySelectorAll("#readBtn");

    btnRead.forEach((btn, i) => {
        btn.addEventListener("click", function(e) {
            const button = (e.currentTarget);
            let readStatus = (myLibrary[i].isRead);
            if (readStatus === "Not-Read") {
                myLibrary[i].isRead = "Read";
            } else {
               myLibrary[i].isRead = "Not-Read";
            }
            button.textContent = myLibrary[i].isRead;
            button.classList.remove(myLibrary[i].isRead);

            const btnToggle = function(b) {
                if (b.className == "Not-Read") {
                    b.className = "Read"
                } else {
                    b.className = "Not-Read"
                }
            }
            btnToggle(button);
    })
    });
    
    // Remove books
    const btnRemove = document.querySelectorAll(".btnRemove");
       btnRemove.forEach((btn, i) => {
           btn.addEventListener("click", (e) => {
               (e.target.parentElement.parentElement.parentElement).remove();
               myLibrary.splice(i, 1);
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
    form.addEventListener('submit', function(e) {
        displayCards.innerHTML = "";
        addBookToLibrary(e);
        hideEntryForm();
    })
});

// show entry form
addBook.addEventListener("click", showEntryForm);