import debounce from '../../utils/debounce';

class SearchInput extends HTMLElement {
  static elementTitle: string = 'search-input';

  connectedCallback() {
    this.render();
    this.bindInputEvent();
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <input type="text" id="search" name="search" placeholder="Search for books">
    `;
  }

  bindInputEvent() {
    this.querySelector('input').oninput = this.dispatchSearchEvent;
  }

  dispatchSearchEvent = debounce((event: InputEvent) => {
    const searchQuery = (<HTMLInputElement>event.target).value;
    const searchEvent = new CustomEvent("search", { detail: { searchQuery } });

    window.dispatchEvent(searchEvent);
  }, 300, false);

  getElementStyling() {
    const style = `
      <style>
        ${SearchInput.elementTitle} input {
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          padding: 1rem;
          box-sizing: border-box;
          width: 100%;            
          display: block;    
          border: 1px solid #d4d4d4;
          border-radius: 2rem;
          transition: box-shadow .3s ease, border-color .3s ease;
        }
        ${SearchInput.elementTitle} input:hover {
          border-color: #06e0a5;
        }

        ${SearchInput.elementTitle} input:focus {
          outline: none;
          border-color: #d4d4d4;
          box-shadow: 0 5px 20px -5px rgba(30,75,90,0.3), 0 3px 4px -2px rgba(0,0,0,0.08);
        }
      </style>`;
    return style
  }
}

customElements.define(SearchInput.elementTitle, SearchInput);
export default SearchInput;