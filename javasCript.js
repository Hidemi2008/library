const myLibrary = [];

function Book(author,title,pages,read) {
  // the constructor...
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function(){
  this.read = !this.read
}

function toggleRead (index){
  myLibrary[index].toggleRead()
  render()
}

function render(){

  let libraryBook = document.querySelector("#library");
  libraryBook.innerHTML = ""
  for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i]

    if(book.read === true){
      book.read = "Yes"
    }else{
      book.read = "Not"
    }

    let divBook = document.createElement("div")
    divBook.setAttribute("class","newBook")
    divBook.innerHTML = `
    <h3>${book.title}</h3>
    <h5>by ${book.author}</h5>
    <h6>Do you read this book? ${book.read}</h6>
    <h6>Num of pages is ${book.pages}</h6>
    <button id="removeBnt">Remove</button>

    `
    libraryBook.appendChild(divBook)
  }
}

function removeBook(index){
  myLibrary.splice(index,1)
  render()
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value
  let author = document.querySelector("#author").value
  let pages = document.querySelector("#pages").value
  let read = document.querySelector("#read").checked
  let newBook = new Book(author,title,pages,read)
  myLibrary.push(newBook)
  render()
}


let newBookNum = 0
let newBookbtn = document.querySelector("#b-content")

newBookbtn.addEventListener("click", () => {
  let newBookForm = document.querySelector("#form-of-new-book")
  newBookForm.style.display = "flex";

  if(newBookNum > 0){
    newBookForm.style.display = "none"
    return newBookNum = 0
  }
  return newBookNum++
})

document.querySelector("#bnt-submit").addEventListener("click", (event) => {
  event.preventDefault()
  addBookToLibrary()
})