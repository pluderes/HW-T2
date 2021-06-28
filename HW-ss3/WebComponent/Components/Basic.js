class Basic extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    //mounting
    this.shadow.innerHTML = `    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
        <style>
    .center {
      height: 100%;
      margin: auto;
    }

    #cp {
      border-radius: 5px;
      margin: auto;
      margin-top: 150px;
      text-align: center;
      height: auto;
    }

    #cp:hover {
      box-shadow: 0px 0px 5px 5px rgb(48, 48, 48);
      transform: translateY(-30px);
      transition: 1s;
    }

    img {
      margin-left: -50px;
      margin-top: -135px;
    }

    i {
      color: rgb(55, 54, 54);
    }

    h3,
    h5,
    p,
    #cost {
      color: white;
      font-weight: 500;
    }

    h3 {
      font-family: fantasy;
    }

    .hr {
      border: 1px dashed whitesmoke;
    }
  </style>
  <div class="center">
    <div class="col-3" id="cp">
      <div class="divImg">
        <img src="images/tl3.png" alt="tuanloc3sao" srcset="" />
      </div>
      <hr class="hr" />
      <div class="row">
        <div class="col-1 previous" style="padding: 0">
          <a href="#"><i class="fas fa-arrow-circle-left"></i></a>
        </div>
        <div class="col-10 content">
          <h3>Teamfight Tactics</h3>
          <h5>Bellswayer - Blood Moon</h5>
        </div>
        <div class="col-1 next" style="padding: 0">
          <a href="#"><i class="fas fa-arrow-circle-right"></i></a>
        </div>
      </div>
      <p style="padding-bottom: 10px">
        Cost: <i id="cost" class="fab fa-jira"></i> 750
      </p>
    </div>
  </div>
    `;
  }

  attributeChangedCallback() {}

  disconnectedCallback() {}
}

customElements.define("basic-para", Basic);
