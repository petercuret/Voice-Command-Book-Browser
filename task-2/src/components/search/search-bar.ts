
class SearchBar extends HTMLElement {
  static elementTitle : string = 'search-bar';
  
  getElementStyling()  {
    const style = `
      <style>
          ${SearchBar.elementTitle} .input-container {
            position: relative;
            display: inline-block;
            width: 100%;
            max-width: 720px;
            padding-right: 4.5rem;
          }

          ${SearchBar.elementTitle} voice-toggle-button {
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      </style>`;      
    return style
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <form autocomplete="off">
        <search-label></search-label>
        <span class="input-container">
          <search-input></search-input>
          <voice-toggle-button></voice-toggle-button>
        </span>
      </form>      
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(SearchBar.elementTitle, SearchBar);
export default SearchBar;