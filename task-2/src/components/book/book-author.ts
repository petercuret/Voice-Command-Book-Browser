class BookAuthor extends HTMLElement {
  dataAuthor: string;
  static elementTitle : string = 'book-author';

  getElementStyling()  {
    const style = `
      <style>
        ${BookAuthor.elementTitle} h2 {
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.3;
          color: #929292;
          margin: 0.5rem 0 0 0;
          text-transform: uppercase;      
        }
      </style>`;      
    return style
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <h2>${this.dataAuthor ? this.dataAuthor : 'Unknown Author'}</h2>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(BookAuthor.elementTitle, BookAuthor);
export default BookAuthor;