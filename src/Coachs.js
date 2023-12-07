import Coach from './Coach.js';

class Coachs {
  #coachs;

  constructor(coachs) {
    this.#coachs = this.addCoachs(coachs);
  }

  addCoachs(coachs) {
    return coachs.split(',').map((coach) => new Coach(coach).getCoach());
  }
  
  addInedibleMenus(menus, index) {
    return this.#coachs[index].inedibleMenus = menus.split(',');
  }

  getCoachs() {
    return this.#coachs;
  }
}

export default Coachs;
