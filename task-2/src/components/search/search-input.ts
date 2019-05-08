import debounce from '../../utils/debounce';

class SearchInput extends HTMLElement {
  static elementTitle : string = 'search-input';
  
  getElementStyling()  {
    const style = `
      <style>
        ${SearchInput.elementTitle} form {
          font-family: 'Roboto', sans-serif;    
          font-weight: 300;
          line-height: 1.3
          margin: 2rem 0 0 0;
          font-size: 32px;          
        }
      
        ${SearchInput.elementTitle} input[type=text] {
            font-size: 18px;
            padding: 1rem;
            box-sizing: border-box;
            margin: 0.5rem 0 0 0;
            width: 100%;
            max-width: 720px;   
            display: block;         
          }
        }
      </style>`;      
    return style
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <form autocomplete="off">
        <label for="search">Search for books</label>
        <input type="text" id="search" name="search">
      </form>
    `;
  }

  searchFunction = debounce((event) => {
    var searchEvent = new CustomEvent("search", { 
      detail: { searchQuery: event.target.value } 
    });
    window.dispatchEvent(searchEvent);
  }, 300, false);

  bindInputEvent() {
    this.querySelector('input').oninput = this.searchFunction;
  }

  connectedCallback() {
    this.render();
    this.bindInputEvent();
  }
}

customElements.define(SearchInput.elementTitle, SearchInput);
export default SearchInput;