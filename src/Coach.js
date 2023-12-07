class Coach {
  #name;

  #inedibleMenus = [];

  #weekdayLunchs = [];

  constructor(name) {
    this.#name = name;
  }

  inedibleMenus(menus) {
    this.#inedibleMenus.push(menus.split(','));
  }

  getCoach() {
    return { name: this.#name, inedibleMenus: this.#inedibleMenus };
  }
}

export default Coach;
