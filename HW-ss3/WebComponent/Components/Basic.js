import { styleInLine } from "./style.js";

class Basic extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this.props = {
      avatar: "",
      tft: "",
      little: "",
      price: "",
    };
  }

  connectedCallback() {
    //mounting
    const inner = `<link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      />
        ${styleInLine}
        <div class="center">
          <div class="col-3" id="cp">
            <div class="divImg">
              <img id="avatar" src="${this.props.avatar}" alt="little" srcset="" />
            </div>
            <hr class="hr" />
            <div class="row">
              <div class="col-1 previous" style="padding: 0">
                <a href="#"><i class="fas fa-arrow-circle-left"></i></a>
              </div>
              <div class="col-10 content">
                <h3 id="tft">${this.props.tft}</h3>
                <h5 id="little">${this.props.little}</h5>
              </div>
              <div class="col-1 next" style="padding: 0">
                <a href="#"><i class="fas fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <p style="padding-bottom: 10px" id="price">
              Cost: <i id="cost" class="fab fa-jira"></i> ${this.props.price}
            </p>
          </div>
        </div>
    `;
    this.shadow.innerHTML += inner;
  }

  static get observedAttributes() {
    return ["avatar", "tft", "little", "price"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      this.props[name] = newValue;
    }
    console.log(this.props);
  }

  disconnectedCallback() {
    console.log("Unmouting");
  }
}

customElements.define("basic-para", Basic);
