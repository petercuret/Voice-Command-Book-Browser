import { getElapsedTimeInUserLanguage } from '../../utils/internationalisation';

class SearchTimestamp extends HTMLElement {
  searchQuery : string = '';
  elapsedTime : number = 0;
  static elementTitle : string = 'search-timestamp';

  connectedCallback() {
    this.addRenderTimeout();
    this.addSearchEventListener();    
    this.render();
  }

  addRenderTimeout() {
    window.setInterval(() => {
      if(this.searchQuery !== '') {        
        this.elapsedTime += 1;
        this.render();
      }
    }, 1000);
  }

  addSearchEventListener() {
    window.addEventListener('search', (event : CustomEvent) => {
      this.searchEventHandler(event);
    }, false);
  }

  searchEventHandler(event : CustomEvent) {
    this.setSearchQuery(event.detail.searchQuery);
    this.resetElapsedTime();
    this.render();
  }
  
  setSearchQuery(searchQuery : string) {
    this.searchQuery = searchQuery;  
  }

  resetElapsedTime() {
    this.elapsedTime = 0;
  }

  getElementStyling()  {
    const style = `
      <style>
        ${SearchTimestamp.elementTitle} {
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 16px;
          color: #929292;
          margin: 0.5rem 0 0 0;
          text-transform: uppercase;
          display: block;
          height: 16px;
        }
      </style>`;      
    return style
  }

  render() {
    if(this.searchQuery === '') {
      this.innerHTML = `${this.getElementStyling()}`
    }
    else {
      this.innerHTML = `
        ${this.getElementStyling()}
        Searched ${getElapsedTimeInUserLanguage(this.elapsedTime)}
      `;
    }
  }
}

customElements.define(SearchTimestamp.elementTitle, SearchTimestamp);
export default SearchTimestamp;