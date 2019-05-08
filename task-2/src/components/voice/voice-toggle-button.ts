class VoiceToggleButton extends HTMLElement {
  isRecording: boolean = false;;
  static elementTitle : string = 'voice-toggle-button';
  
  connectedCallback() {
    this.render();
    this.bindToggleEvent();
  }

  bindToggleEvent() {
    this.querySelector('button').onclick = this.toggleRecording;
  }

  getElementStyling()  {
    const style = `
      <style>
        ${VoiceToggleButton.elementTitle} button {
          display: flex;
          width: 3.5rem;
          height: 3.5rem;                    
          color: #282828;
          background-color: #06e0a5;          
          display: inline-block;
          border-radius: 50%;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          border: 0;
          position: relative;
          cursor: pointer;
        }

        ${VoiceToggleButton.elementTitle} svg {
          width: 32px;
          height: 32px;

        }
      </style>`;      
    return style
  }

  emitToggleEvent() {
    var recordingEvent = new CustomEvent("recording", { detail: { isRecording: this.isRecording } });
    window.dispatchEvent(recordingEvent);
  }

  toggleRecording = () => {
    this.isRecording = !this.isRecording;
    this.render();
    this.bindToggleEvent();
    this.emitToggleEvent();
  }

  renderIsRecordingIcon() {    
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M10.8 4.9c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 .58-.1 1.13-.27 1.64l1.27 1.27c.44-.88.7-1.87.7-2.91zM4.41 2.86L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.55-.9l4.2 4.2 1.41-1.41L4.41 2.86z"/></svg>';
  }

  renderIsNotRecordingIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>';
  }

  renderRecordingIcon() {
    return this.isRecording ? this.renderIsRecordingIcon() : this.renderIsNotRecordingIcon();
  }

  render() {
    this.innerHTML = ` 
    ${this.getElementStyling()} 
    <button>
      ${this.renderRecordingIcon()}
    </button>
    `;
  }
}

customElements.define(VoiceToggleButton.elementTitle, VoiceToggleButton);
export default VoiceToggleButton;