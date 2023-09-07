const myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.info = function() {
    return `${this.author}, ${this.title}, ${this.pages}`;
  }
}


// skapa två böcker. addera dom till myLibrary. Loopa igenom myLibrary och addera dom till DOM med info() visat i diven
// add two books. add to myLibrary. Loop through and display in the DOM 
const container_books = document.querySelector(".container_books");

const book1 = new Book("Allesandro Barisso", "Silke", 120);
const book2 = new Book("JRR Tolkien", "The Hobbit", 295);

myLibrary.push(book1);
myLibrary.push(book2);

for (let i = 0; i < myLibrary.length; i++) {

    let book = document.createElement("div");
    
    container_books.appendChild(book);

    let author = document.createElement("p");
    let title = document.createElement("p");
    let pages = document.createElement("p");

    book.appendChild(author);
    book.appendChild(title);
    book.appendChild(pages);

    author.innerHTML += `Author: ${myLibrary[i].author}`;
    title.innerHTML += `Title: ${myLibrary[i].title}`;
    pages.innerHTML += `Pages: ${myLibrary[i].pages}`;  
}

// 
function addBookToLibrary() {
  // do stuff here
}