class Coachs {
  #coachs;

  constructor(coachs) {
    this.#coachs = coachs;
  }

  getCoachs() {
    return this.#coachs;
  }
}

export default Coachs;
