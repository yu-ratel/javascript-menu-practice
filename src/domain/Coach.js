class Coach {
  #name;

  #inedibleMenus;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  inedibleMenus(menus) {
    this.#inedibleMenus = menus.split(',');
  }

  getCoach() {
    return { name: this.#name, inedibleMenus: this.#inedibleMenus };
  }

  #validate(name) {
    this.#validateNameLength(name);
  }

  #validateNameLength(name) {
    const nameLength = name.length;
    if (nameLength < 2 || nameLength > 4) {
      throw ('[ERROR] 코치의 이름은 2글자부터 4글자까지 가능합니다');
    }
  }
}

export default Coach;
