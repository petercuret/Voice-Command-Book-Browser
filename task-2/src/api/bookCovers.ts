const BOOKS_COVER_API_URL = 'https://covers.openlibrary.org/b/id';
const BOOKS_COVER_PLACEHOLDER_URL = 'https://dummyimage.com/200x300/f5f5f5/f5f5f5.jpg';

type BookCoverSize = 'S'|'M'|'L';

function getBookCoverURL(bookID : number, size : BookCoverSize) {
  if(bookID !== undefined)
  {
    return `${BOOKS_COVER_API_URL}/${bookID}-${size}.jpg`;
  }
  return BOOKS_COVER_PLACEHOLDER_URL;
  
}

export { getBookCoverURL };