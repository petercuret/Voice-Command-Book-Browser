import BookCover from './book-cover';
import BookTitle from './book-title';
import BookAuthor from './book-author';

class BookSingle extends HTMLElement {
  dataBookTitle: string;
  dataAuthor: string;
  dataCoverID: number;
  static elementTitle: string = 'book-single';

  getElementStyling() {
    const style = `
      <style>
        ${BookSingle.elementTitle} {
          display: flex;
          flex-direction: column;
          padding: 1rem;         
        }
      </style>`;
    return style
  }
  getBookCoverElement(dataCoverID: number, dataBookTitle: string) {
    const bookCoverElement = <BookCover>document.createElement(BookCover.elementTitle);
    bookCoverElement.dataCoverID = dataCoverID;
    bookCoverElement.dataBookTitle = dataBookTitle;
    return bookCoverElement
  }

  getTitleElement(dataBookTitle: string) {
    const bookTitleElement = <BookTitle>document.createElement(BookTitle.elementTitle);
    bookTitleElement.dataBookTitle = dataBookTitle;
    return bookTitleElement;
  }

  getAuthorElement(dataAuthor: string) {
    const authorElement = <BookAuthor>document.createElement(BookAuthor.elementTitle);
    authorElement.dataAuthor = dataAuthor;
    return authorElement;
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
    `;
    const elements: Element[] = [
      this.getBookCoverElement(this.dataCoverID, this.dataBookTitle),
      this.getTitleElement(this.dataBookTitle),
      this.getAuthorElement(this.dataAuthor)
    ]

    elements.forEach(element => this.appendChild(element));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(BookSingle.elementTitle, BookSingle);
export default BookSingle;