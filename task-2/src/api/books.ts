import Book from '../models/book';
const BOOKS_API_URL = 'http://openlibrary.org/search.json?title=';

async function fetchBooksFromAPI(searchQuery : string) {
  const endpoint = `${BOOKS_API_URL}${searchQuery}`;
  const results = await fetch(endpoint);
  console.log(endpoint);
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

async function getBooks(searchQuery : string) {
  const booksJSON = await fetchBooksFromAPI(searchQuery);
  const filteredBooksJSON = filterFullText(booksJSON);
  const books = mapBooksJSONToModel(filteredBooksJSON);
  return books;
}

export { getBooks };


