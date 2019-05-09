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

  const results = await fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  })
  .then(response => response.json())
  .catch((error) => {
    console.error('Something went wrong while fetching data', error);
  });

  return results.docs;
}

function mapBooksJSONToModel(booksJSON : BookJSON[]) {
  const books = booksJSON.map(result => new Book(result.title, result.author_name, result.cover_i))
  return books;
}

async function getBooks(searchQuery : string) {
  const booksJSON = await fetchBooksFromAPI(searchQuery);
  const books = mapBooksJSONToModel(booksJSON);
  return books;
}

export { getBooks };


