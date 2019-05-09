class BookCarousel extends HTMLElement {
  static elementTitle: string = 'book-carousel';
  intervalID: any;

  getElementStyling() {
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

  isInViewport(element: Element) {
    const rectangle: DOMRect = <DOMRect>element.getBoundingClientRect();
    const viewportWidth: number = window.innerWidth;
    const rightSideX = (rectangle.x + rectangle.width) - 1;
    return rightSideX < (viewportWidth);
  }

  scrollToBook(book: Element) {
    book.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
  }

  getBookElements() {
    return Array.from(this.querySelector('section').children);
  }

  scrollToFirstBook() {
    const books = this.getBookElements();

    if (books && books.length > 0) {
      const firstBook = books[0];
      this.scrollToBook(firstBook);
    }
  }

  // TODO: Scroll can probably be implemented a bit nicer, revisit if there's time
  scroll() {
    const books = this.getBookElements();

    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      if (!this.isInViewport(book)) {
        this.scrollToBook(book);
        return;
      }
    };

    // The loop wasn't broken, it means we've reached the last book
    this.scrollToFirstBook();
  }

  addScrollInterval() {
    this.intervalID = setInterval(() => {
      // Scroll if the page is visible (tab is active)
      if (!document.hidden) {
        this.scroll();
      }
    }, 5000);
  }

  connectedCallback() {
    this.render();
    this.addScrollInterval();
  }

  resetCarouselInterval() {
    clearInterval(this.intervalID);
    this.addScrollInterval();
  }
}

customElements.define(BookCarousel.elementTitle, BookCarousel);
export default BookCarousel;