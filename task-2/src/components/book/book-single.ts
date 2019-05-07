import BookCover from './book-cover';

class BookSingle extends HTMLElement {
  dataBookTitle: string;
  dataAuthor: string;
  dataCoverID: number;

  getBookCoverElement(dataCoverID : number, dataBookTitle : string) {
    const bookCoverElement = <BookCover>document.createElement('book-cover');
    bookCoverElement.dataCoverID = dataCoverID;
    bookCoverElement.dataBookTitle = dataBookTitle;
    return bookCoverElement
  }

  getTitleElement(dataBookTitle : string) {
    const bookTitleElement = <BookTitle>document.createElement('book-title');
    bookTitleElement.dataBookTitle = dataBookTitle;
    return bookTitleElement;
  }

  getAuthorElement(dataAuthor : string) {
    const authorElement = <BookAuthor>document.createElement('book-author');
    authorElement.dataAuthor = dataAuthor;
    return authorElement;
  }

  render() {
    this.innerHTML = '';
    const elements: Element[] = [
      this.getTitleElement(this.dataBookTitle),
      this.getAuthorElement(this.dataAuthor),
      this.getBookCoverElement(this.dataCoverID, this.dataBookTitle)
    ]

    elements.forEach(element => this.appendChild(element));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('book-single', BookSingle);
export default BookSingle;