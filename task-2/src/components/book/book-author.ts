class BookAuthor extends HTMLElement {
  dataAuthor: string;
  
  render() {
    this.innerHTML = `<h2>${this.dataAuthor}</h2>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('book-author', BookAuthor);