import Book from '../models/book';
const BOOKS_API_URL = 'http://openlibrary.org/search.json?title=harry';

async function fetchBooksFromAPI() {
  const results = await fetch(BOOKS_API_URL);
  const resultsJSON = await results.json();
  return resultsJSON.docs;
}

function filterFullText(booksJSON) {
  return booksJSON.filter(bookJSON => bookJSON.has_fulltext);
}

function mapBooksJSONToModel(booksJSON) {
  const books = booksJSON.map(result => new Book(result.title, result.author_name, result.cover_i))
  return books;
}

async function getBooks() {
  const booksJSON = await fetchBooksFromAPI();
  const filteredBooksJSON = filterFullText(booksJSON);
  const books = mapBooksJSONToModel(filteredBooksJSON);
  return books;
}

export { getBooks };


