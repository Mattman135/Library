const inputAuthor = document.getElementById("inputAuthor");
const inputTitle = document.getElementById("inputTitle");
const inputPages = document.getElementById("inputPages");
const inputCheckbox = document.getElementById("checkbox");

const submitBookForm = document.getElementById("submitBookForm");
const containerBooks = document.getElementById("container_books")

var myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
    displayBooks();
}

submitBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let author = inputAuthor.value;
    let title = inputTitle.value;
    let pages = inputPages.value;
    let read = inputCheckbox.checked;
    addBookToLibrary(author, title, pages, read);
})

function displayBooks() {
    removeAllChildNodes(containerBooks);
    for (let i = 0; i < myLibrary.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `${myLibrary[i].author}, ${myLibrary[i].title}, ${myLibrary[i].pages} ,i=${i}`;
        div.dataset.index = i;
        div.setAttribute("class", "book");

        // remove button
        let btnRemove = document.createElement("button");
        btnRemove.innerHTML = "Remove";

        btnRemove.addEventListener("click", (e) => {
            myLibrary = removeBook(i);
            console.log(i);
            displayBooks();
        })

        div.appendChild(btnRemove);

        // read or not button
        let readBtn = document.createElement("button");
        
        let read = myLibrary[i].read;

        if (read) {
            readBtn.innerHTML = "Read";
            readBtn.setAttribute("class", "read");
        } else {
            readBtn.innerHTML = "Not read";
            readBtn.setAttribute("class", "notRead");
        }

        readBtn.addEventListener("click", (e) => {
            if (readBtn.innerHTML === "Read") { // if this is read it means read property is true
                console.log(readBtn.innerHTML);
                console.log(e);
                readBtn.innerHTML = "Not read";
                readBtn.setAttribute("class", "notRead");
            } else if (readBtn.innerHTML === "Not read") {
                readBtn.innerHTML = "Read";
                readBtn.setAttribute("class", "read");
            }
        })

        div.appendChild(readBtn);

        containerBooks.appendChild(div);
    }
}

function removeBook(index) {
    let ret = [];
    for (let i = 0; i < myLibrary.length; i++) {
        if (i !== index) {
            ret.push(myLibrary[i]);
        }
    }
    return ret;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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

