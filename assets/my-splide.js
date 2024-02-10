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
      perPage: 4,
      perMove: 1,
      breakpoints: {
        1200: {
          perPage: 3,
        },
        750: {
          perPage: 2,
        },
        575: {
          perPage: 1,
        },
      },
    });
    splide.mount();
  }
}

customElements.define("my-splide", MySplide);
