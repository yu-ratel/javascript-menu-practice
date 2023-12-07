import Coach from './Coach.js';
import Menu from './Menu.js';

class Coachs {
  #coachs;

  #state = [];

  constructor(coachs) {
    this.#coachs = this.addCoachs(coachs);
    this.menu = new Menu();
  }

  addCoachs(coachs) {
    return coachs.split(',').map((coach) => new Coach(coach).getCoach());
  }
  
  addInedibleMenus(menus, index) {
    return this.#coachs[index].inedibleMenus = menus.split(',');
  }

  menuRecommendation() {
    for (let i = 0; i < this.#coachs.length; i += 1) {
			const menus = this.menu.randomMenus(this.#coachs[i].inedibleMenus);
      this.#state.push([this.#coachs[i].name, ...menus]);
		}
  }

  result() {
    return (this.menu.getWeekdayMenu().concat(this.#state)).map((arr) => arr.join('| '));
  }

  getCoachs() {
    return this.#coachs;
  }

  getState() {
    return this.#state;
  }
}

export default Coachs;
