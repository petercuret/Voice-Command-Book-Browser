
class SearchBar extends HTMLElement {
  static elementTitle: string = 'search-bar';

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <form autocomplete="off">
        <span class="input-container">
          <search-input></search-input>
          <voice-toggle-button></voice-toggle-button>
        </span>
      </form>      
    `;
  }

  getElementStyling() {
    const style = `
      <style>
          ${SearchBar.elementTitle} {
            text-align: center;
          }

          ${SearchBar.elementTitle} .input-container {            
            position: relative;
            display: inline-block;
            width: calc(100% - 4.5rem);
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
}

customElements.define(SearchBar.elementTitle, SearchBar);
export default SearchBar;