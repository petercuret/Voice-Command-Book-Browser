import { getBooks } from '../api/books';
import Book from '../models/book';
import BookSingle from '../components/book/book-single';
import BookCarousel from '../components/BookCarousel/book-carousel';
import SearchTimestamp from '../components/search/search-timestamp';

window.addEventListener('load', () => {
  window.addEventListener('search', async function (event : CustomEvent) {
    const { searchQuery }  = event.detail;
    search(searchQuery);
  }, false);

  async function search(searchQuery : string) {
    removeBooksFromDom();
    removeSearchTimestampFromDom();

    if(searchQuery) {    
      addSpinnerToDom();
      await addBooksToDom(searchQuery);      
      removeSpinnerFromDom();
      resetCarousel();
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

    addSearchTimestampToDom(books);
  }

  function addSearchTimestampToDom(books: Book[]){
    if(!document.querySelector('search-timestamp')) {
      const searchTimeStamp = <SearchTimestamp>document.createElement('search-timestamp');
      searchTimeStamp.numberOfSearchResults = books.length;
      const placeholder = document.querySelector('search-timestamp-placeholder');
      placeholder.appendChild(searchTimeStamp);
    }
  }

  function removeSearchTimestampFromDom() {
    const searchTimeStamp = document.querySelector('search-timestamp');
    if(searchTimeStamp) {
      searchTimeStamp.remove();
    }
  }  

  function addSpinnerToDom(){
    if(!document.querySelector('spinner-loading')) {
      const spinner = document.createElement('spinner-loading');
      const main = document.querySelector('main');
      main.appendChild(spinner);
    }
  }

  function removeSpinnerFromDom() {
    const spinner = document.querySelector('spinner-loading');
    if(spinner) {
      spinner.remove();
    }
  }

  function resetCarousel() {
    const carousal = <BookCarousel>document.querySelector('book-carousel');
    carousal.resetCarouselInterval()
  }
});