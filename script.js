const inputAuthor = document.getElementById("inputAuthor");
const inputTitle = document.getElementById("inputTitle");
const inputPages = document.getElementById("inputPages");
const inputCheckbox = document.getElementById("checkbox");

const submitBookForm = document.getElementById("submitBookForm");
const containerBooks = document.getElementById("container_books")

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    myLibrary.push(new Book(author, title, pages, read));
    displayBooks(author, title, pages, read);
}

function displayBooks(author, title, pages, read) {
    for (let i = 0; i < myLibrary.length; i++) {
        let div = document.createElement("div");
        div.classList.add("books");
        div.textContent = `${author} , ${title}, ${pages}`;
        containerBooks.appendChild(div);
    }
}

submitBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let author = inputAuthor.value;
    let title = inputTitle.value;
    let pages = inputPages.value;
    let read = inputCheckbox.checked;
    addBookToLibrary(author, title, pages, read);
})
