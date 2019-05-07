import { getBookCoverURL } from '../../api/bookCovers';

class BookCover extends HTMLElement {
  dataCoverID: number;
  dataBookTitle: string;
  
  render() {
    const bookCoverURL = getBookCoverURL(this.dataCoverID, 'M');
    
    this.innerHTML = `
      <figure>
        <img src="${bookCoverURL}" alt="Cover for ${this.dataBookTitle}">
      </figure>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('book-cover', BookCover);
export default BookCover;