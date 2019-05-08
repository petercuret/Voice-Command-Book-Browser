import debounce from '../../utils/debounce';

class SearchInput extends HTMLElement {
  static elementTitle : string = 'search-input';

  getElementStyling()  {
    const style = `
      <style>
        ${SearchInput.elementTitle} input {
          font-size: 18px;
          padding: 1rem;
          box-sizing: border-box;
          width: 100%;            
          display: block;    
        }
      </style>`;      
    return style
  }
  
  searchFunction = debounce((event) => {
    const searchQuery = event.target.value;
    var searchEvent = new CustomEvent("search", { detail: { searchQuery } });
    window.dispatchEvent(searchEvent);
  }, 300, false);

  bindInputEvent() {
    this.querySelector('input').oninput = this.searchFunction;
  }

  connectedCallback() {
    this.render();
    this.bindInputEvent();
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <input type="text" id="search" name="search">
    `;
  }
}

customElements.define(SearchInput.elementTitle, SearchInput);
export default SearchInput;