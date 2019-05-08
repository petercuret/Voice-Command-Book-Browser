import { getBooks } from './api/books';
import { getParamsFromUrl } from './utils/params';
import Book from './models/book';
import BookSingle from './components/book/book-single';
import './components/book/book-cover';
import './components/book/book-title';
import './components/book/book-author';
import './components/book/book-single';
import './components/bookCarousel/book-carousel';
import './components/spinnerLoading/spinner-loading';
import './components/search/search-bar';
import './components/search/search-label';
import './components/search/search-input';
import './components/search/search-timestamp';
import './components/voice/voice-toggle-button';

window.addEventListener('load', async () => {});

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