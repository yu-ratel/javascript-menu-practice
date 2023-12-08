import Coach from './Coach.js';
import Menu from './Menu.js';

class Coachs {
  #coachs;

  #state = [];

  constructor(coachs) {
    this.#validate(coachs);
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
    return (this.menu.getWeekdayMenu().concat(this.#state)).map((arr) => arr.join(' | '));
  }

  getCoachs() {
    return this.#coachs;
  }

  #validate(coachs) {
    this.#validateType(coachs);
    const coachsParser = coachs.split(',').map((name) => name.trim());
    this.#validateLength(coachsParser);
    this.#validateDuplicate(coachsParser);
  }

  #validateLength(coachs) {
    if (coachs.length < 2 || coachs.length > 5) {
      throw ('[ERROR] 코치의 수는 최소 2명, 최대 5명까지 가능합니다, 다시 입력해주세요.');
    }
  }

  #validateDuplicate(coachs) {
    if (new Set(coachs).size !== coachs.length) {
      throw ('[ERROR] 코치의 이름은 중복이 불가능합니다, 다시 입력해주세요.');
    }
  }

  #validateType(coachs) {
    if (coachs.indexOf(',') === -1
    || coachs.indexOf(',') === coachs.length - 1) {
      throw ('쉼표(,)를 구분자로 입력해야 합니다, 다시 입력해주세요.');
    }
  }

}

export default Coachs;
