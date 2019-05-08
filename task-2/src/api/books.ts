import Book from '../models/book';
const BOOKS_API_URL = 'http://openlibrary.org/search.json?title=';

interface BookJSON {
  has_fulltext: boolean,
  title: string,
  author_name: string,
  cover_i: number 
}

async function fetchBooksFromAPI(searchQuery : string) {
  const endpoint = `${BOOKS_API_URL}${searchQuery}`;
  const results = await fetch(endpoint);
  // TODO: Add error handling here
  const resultsJSON = await results.json();
  return resultsJSON.docs;
}

function filterFullText(booksJSON : BookJSON[]) {
  return booksJSON.filter(bookJSON => bookJSON.has_fulltext);
}

function mapBooksJSONToModel(booksJSON : BookJSON[]) {
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


