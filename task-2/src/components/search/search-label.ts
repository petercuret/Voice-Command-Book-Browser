class SearchLabel extends HTMLElement {
  static elementTitle : string = 'search-label';

  getElementStyling()  {
    const style = `
      <style>
        ${SearchLabel.elementTitle} label {
          font-family: 'Roboto', sans-serif;    
          font-weight: 300;
          font-size: 32px;
          display: block;
          margin: 0 0 0.5rem 0;        
        }
      </style>`;      
    return style
  }
  
  connectedCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <label for="search">Search for books</label>
    `;
  }
}

customElements.define(SearchLabel.elementTitle, SearchLabel);
export default SearchLabel;