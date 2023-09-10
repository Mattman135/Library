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
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
    displayBook(book);
}



submitBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let author = inputAuthor.value;
    let title = inputTitle.value;
    let pages = inputPages.value;
    let read = inputCheckbox.checked;
    addBookToLibrary(author, title, pages, read);
})


function displayBook(book) {
    let divBook = document.createElement("div");
    divBook.classList.add("book");

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")

    p1.textContent = book.author;
    p2.textContent = book.title;
    p3.textContent = book.pages;

    if (book.read) {
        p4.textContent = "Read";
        p4.classList.add("read");
    } else {
        p4.textContent = "Not Read";
        p4.classList.add("notRead");
    }

    divBook.appendChild(p1);
    divBook.appendChild(p2);
    divBook.appendChild(p3);
    divBook.appendChild(p4);

    containerBooks.appendChild(divBook);
}

// modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

