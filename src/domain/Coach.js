class Coach {
  #name;

  #inedibleMenus;

  constructor(name) {
    this.#name = name;
  }

  inedibleMenus(menus) {
    this.#inedibleMenus = menus.split(',');
  }

  getCoach() {
    return { name: this.#name, inedibleMenus: this.#inedibleMenus };
  }
}

export default Coach;
