class SpinnerLoading extends HTMLElement {
  static elementTitle : string = 'spinner-loading';

  getElementStyling()  {
    const style = `
      <style>
        @keyframes spinner {
          to {transform: rotate(360deg);}
        }
        
        ${SpinnerLoading.elementTitle}:before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          margin-top: -30px;
          margin-left: -30px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #06e0a5;
          animation: spinner .6s ease infinite;
        }
      </style>`;      
    return style
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(SpinnerLoading.elementTitle, SpinnerLoading);