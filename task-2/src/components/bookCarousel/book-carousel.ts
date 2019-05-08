class BookCarousel extends HTMLElement {
  static elementTitle : string = 'book-carousel';

  getElementStyling()  {
    const style = `
      <style>
        ${BookCarousel.elementTitle} section {
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
    <section></section>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(BookCarousel.elementTitle, BookCarousel);
export default BookCarousel;