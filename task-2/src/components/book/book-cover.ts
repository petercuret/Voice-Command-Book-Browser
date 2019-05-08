import { getBookCoverURL } from '../../api/bookCovers';

class BookCover extends HTMLElement {
  dataCoverID: number;
  dataBookTitle: string;
  static elementTitle : string = 'book-cover';
  
  getElementStyling()  {
    const style = `
      <style>
        ${BookCover.elementTitle} figure {
          margin: .5rem 0 0 0;
        }
        ${BookCover.elementTitle} img {
          height: 25vw;
        }        
      </style>`;      
    return style
  }

  render() {
    const bookCoverURL = getBookCoverURL(this.dataCoverID);

    this.innerHTML = `
      ${this.getElementStyling()}
      <figure>
        <img src="${bookCoverURL}" alt="Cover for ${this.dataBookTitle}">
      </figure>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(BookCover.elementTitle, BookCover);
export default BookCover;