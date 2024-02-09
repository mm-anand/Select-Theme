<script src="{{ 'splide-min.js' |  asset_url }}" defer></script>;
<link rel="stylesheet" href="{{ 'splide-min.css' | asset_url }}"></link>;

class MySplide extends HTMLElement {
  constructor() {
    super();
    this.element = this.querySelector(".splide");
    this.initializeSlider();
  }

  initializeSlider() {
    var splide = new Splide(this.element, {
      arrow: true,
      pagination: false,
      gap: "1.5rem",
    });
    splide.mount();
  }
}

customElements.define("my-splide", MySplide);
