import { getBooks } from './api/books';
import Book from './models/book';
import './components/book/book-cover';
import './components/book/book-title';
import './components/book/book-author';
import BookSingle from './components/book/book-single';
import './components/book/book-single';
import './components/bookCarousel/book-carousel';
import './components/spinnerLoading/spinner-loading';
import './components/search/search-input';
import './components/search/search-timestamp';

window.addEventListener('load', async () => {
  addCarouselToDom();
});

window.addEventListener('search', async function (event : CustomEvent) {
  const { searchQuery }  = event.detail;
  if(searchQuery) {
    removeBooksFromDom();
    addSpinnerToDom();
    await addBooksToDom(searchQuery);
    removeSpinnerFromDom();  
  }
  else {
    removeBooksFromDom();
  }
}, false);

function getBookComponent(book : Book) {
  const bookSingle = <BookSingle>document.createElement('book-single');
  bookSingle.dataBookTitle = book.title;
  bookSingle.dataAuthor = book.author;
  bookSingle.dataCoverID = book.coverID;
  return bookSingle
}

function addCarouselToDom() {
  const main = document.querySelector('main');
  const bookCarousel = document.createElement('book-carousel');
  main.appendChild(bookCarousel);
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