import { getBooks } from './api/books';
import Book from './models/book';
import './components/book/book-cover';
import './components/book/book-title';
import './components/book/book-author';
import BookSingle from './components/book/book-single';
import './components/book/book-single';
import './components/bookCarousel/book-carousel';
import './components/spinnerLoading/spinner-loading';

window.addEventListener('load', async () => {
  addCarouselToDom();
  await addBooksToDom();
  removeSpinnerFromDom();
});

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

async function addBooksToDom() {
  const books = await getBooks();
  const main = document.querySelector('book-carousel');
  
  books.forEach((book : Book) => {
    const bookComponent = getBookComponent(book);
    main.appendChild(bookComponent);
  });
}
function removeSpinnerFromDom() {
  const spinner = document.querySelector('spinner-loading');
  spinner.remove();
}