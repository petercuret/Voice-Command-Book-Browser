import { getBooks } from '../api/books';
import Book from '../models/book';
import BookSingle from '../components/book/book-single';

window.addEventListener('search', async function (event : CustomEvent) {
  const { searchQuery }  = event.detail;
  search(searchQuery);
}, false);

async function search(searchQuery : string) {
  removeBooksFromDom();

  if(searchQuery) {    
    addSpinnerToDom();
    await addBooksToDom(searchQuery);
    removeSpinnerFromDom();
  }
}

function getBookComponent(book : Book) {
  const bookSingle = <BookSingle>document.createElement('book-single');
  bookSingle.dataBookTitle = book.title;
  bookSingle.dataAuthor = book.author;
  bookSingle.dataCoverID = book.coverID;
  return bookSingle
}

function removeBooksFromDom() {
  const main = document.querySelector('book-carousel section');
  main.innerHTML = '';
}

async function addBooksToDom(searchQuery : string) {
  const books = await getBooks(searchQuery);
  const main = document.querySelector('book-carousel section');
  
  books.forEach((book : Book) => {
    const bookComponent = getBookComponent(book);
    main.appendChild(bookComponent);
  });
}
function addSpinnerToDom(){
  const spinner = document.createElement('spinner-loading');
  const main = document.querySelector('main');
  main.appendChild(spinner);
}

function removeSpinnerFromDom() {
  const spinner = document.querySelector('spinner-loading');
  spinner.remove();
}