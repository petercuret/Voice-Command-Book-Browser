class BookCarousel extends HTMLElement {
  static elementTitle : string = 'book-carousel';

  getElementStyling()  {
    const style = `
      <style>
        ${BookCarousel.elementTitle} {
          display: flex;
          padding: 1rem;
          overflow-x: scroll;
        }
      </style>`;      
    return style
  }

  render() {
    this.innerHTML = `
    ${this.getElementStyling()}
    <section></sction>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(BookCarousel.elementTitle, BookCarousel);
export default BookCarousel;