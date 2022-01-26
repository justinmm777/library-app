let books = JSON.parse(localStorage.getItem('books') || '[]');


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

// Book.prototype.toggleRead = function() {
//     this.isRead = !this.isRead;
// }
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
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

        if (isRead) {
            isRead = "Read";
        } else {
            isRead = "Not-Read"
        }
     
    const newBook = new Book(title, author, pages, isRead);

    books.push(newBook);
    saveBooks();

    clearForm();
    createBook(newBook);
}



// function to create cards
const createBook = (book) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="card"><h2>${book.title}</h2>
        <h3>Author: ${book.author}</h3>
        <h3>Pages: ${book.pages}</h3>
        <div class="btn">
            <button id="" class="readBtn ${book.isRead}">${book.isRead}</button>
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



// Show books on the page
const displayBooks = (books) => {
    books.forEach((book) => {
        createBook(book);
    })
}

// Remove book
const removeBook = function(title) {
    let index = books.findIndex(book => book.title === title);
    books.splice(index, 1);
}

// Toggle read
const toggleRead = function(title) {
    const book = books.find(book => book.title === title);
    console.log(book);
    // book.isRead = !book.isRead;
    if(book.isRead === "Read") {
        book.isRead = "Not-Read"
    } else {
        book.isRead = "Read"
    }
    saveBooks();
}

// remove btn classlist toggle
const readBtnClassToggle = function(btn) {
    if(btn.classList.contains('Read')){
        btn.classList.add('Not-Read')
        btn.classList.remove('Read')
    } else {
        btn.classList.remove('Not-Read')
        btn.classList.add('Read')
    }
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
        removeBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let title = (e.currentTarget.parentElement.parentElement.parentElement.firstChild.innerHTML);
                removeBook(title);
                (e.currentTarget.parentElement.parentElement.parentElement.parentElement).remove();
                saveBooks();
        })
    });

     // Toggle read status
    const btnRead = document.querySelectorAll('.readBtn');

    btnRead.forEach((btn) => {
       btn.addEventListener('click', (e) => {
        let title = (e.currentTarget.parentElement.parentElement.firstChild.innerHTML);
        console.log(title)
        
        if(btn.textContent === 'Read') {
            btn.textContent = 'Not-Read'
        } else {
            btn.textContent = 'Read'
        }

        toggleRead(title);
        readBtnClassToggle(btn);
           
       })
    });

});






