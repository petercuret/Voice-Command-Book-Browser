import { getBooks } from './api/books';
import Book from './models/book';
import './components/book/book-cover';
import './components/book/book-title';
import './components/book/book-author';
import BookSingle from './components/book/book-single';
import './components/book/book-single';

window.addEventListener('load', () => {
  addBooksToDom();
});

function getBookComponent(book : Book) {
  const bookSingle = <BookSingle>document.createElement('book-single');
  bookSingle.dataBookTitle = book.title;
  bookSingle.dataAuthor = book.author;
  bookSingle.dataCoverID = book.coverID;
  return bookSingle
}

async function addBooksToDom() {
  const books = await getBooks();
  const main = document.querySelector('main');
  
  books.forEach((book : Book) => {
    const bookComponent = getBookComponent(book);
    main.appendChild(bookComponent);
  });
}