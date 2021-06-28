class Basic extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      //mounting
      this.shadow.innerHTML = `<img src = "https://cuoifly.tuoitre.vn/820/0/ttc/r/2021/06/19/blackpink-1624076612.png">`;
    }
  
    attributeChangedCallback() {}
  
    disconnectedCallback() {}
  }
  
  customElements.define("lol-para", Basic);
  