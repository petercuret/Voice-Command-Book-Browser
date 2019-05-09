class SpinnerLoading extends HTMLElement {
  static elementTitle: string = 'spinner-loading';

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.getElementStyling()}
    `;
  }

  getElementStyling() {
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
          width: 4rem;
          height: 4rem;
          margin-top: -2rem;
          margin-left: -2rem;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #06e0a5;
          animation: spinner .6s ease infinite;
        }
      </style>`;
    return style
  }
}

customElements.define(SpinnerLoading.elementTitle, SpinnerLoading);