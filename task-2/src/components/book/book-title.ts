class BookTitle extends HTMLElement {
  dataBookTitle: string;
  
  render() {
    this.innerHTML = `<h1>${this.dataBookTitle}</h1>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('book-title', BookTitle);