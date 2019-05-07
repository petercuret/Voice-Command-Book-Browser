const BOOKS_COVER_API_URL = 'http://covers.openlibrary.org/b/id';
type BookCoverSize = 'S'|'M'|'L';

function getBookCoverURL(bookID : number, size : BookCoverSize) {
  return `${BOOKS_COVER_API_URL}/${bookID}-${size}.jpg`;
}

export { getBookCoverURL };