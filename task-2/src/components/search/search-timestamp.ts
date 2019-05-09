import { getElapsedTimeInUserLanguage } from '../../utils/internationalisation';

class SearchTimestamp extends HTMLElement {
  elapsedTime: number = 0;
  numberOfSearchResults: number;
  static elementTitle: string = 'search-timestamp';

  connectedCallback() {
    this.addRenderTimeout();
    this.render();
  }

  addRenderTimeout() {
    window.setInterval(() => {
      this.elapsedTime += 1;
      this.render();
    }, 1000);
  }

  resetElapsedTime() {
    this.elapsedTime = 0;
  }

  getElementStyling() {
    const style = `
      <style>
      ${SearchTimestamp.elementTitle} {
        display: flex;
        margin: 4rem 0 0 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
        ${SearchTimestamp.elementTitle} p {
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 12px;
          color: #929292;
          text-transform: uppercase;
          margin: .25rem 0 0 0;
        }

        ${SearchTimestamp.elementTitle} h1 {
          font-family: 'Roboto', sans-serif;
          font-size: 24px;
          font-weight: 300;
          line-height: 24px;
          color: #292929;
          margin: 0;
        }        
      </style>`;
    return style
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
      <h1>Found ${this.numberOfSearchResults} books</h1>
      <p>${getElapsedTimeInUserLanguage(this.elapsedTime)}</p>
  `;
  }
}

customElements.define(SearchTimestamp.elementTitle, SearchTimestamp);
export default SearchTimestamp;