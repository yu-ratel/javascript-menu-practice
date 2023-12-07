import { Random } from '@woowacourse/mission-utils';
import random from '../util/random.js';

class Menu {
  SAMPLE = {
    일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
    한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
    중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
    아시안:
      '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
    양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
  };

  #weekday = ['구분', '월요일', '화요일', '수요일', '목요일', '금요일'];

  #categorys = ['카테고리'];

  constructor() {
    this.addCategorys();
  }

  randomNumbers() {
    const numbers = [];
    
    while (numbers.length < 5) {
      const randomNumber = Random.pickNumberInRange(1, 5);

      numbers.push(randomNumber);

      if (numbers.filter((number) => number === randomNumber).length > 2) {
        numbers.pop();
      }
    } 
    
    return numbers;
  }

  randomMenus(inedibleMenus) {
    const menus = [];

    while (menus.length < 5) {
      const target = this.#categorys[menus.length + 1];
      const randomMenu = random.shuffle(this.SAMPLE[target].split(','))[0].trim();
      
      if (menus.includes(randomMenu) || inedibleMenus.includes(randomMenu)) {
        continue;
      }

      else menus.push(randomMenu);
    }

    return menus;
  }

  addCategorys() {
    this.randomNumbers().forEach((number) => this.#categorys.push(Object.keys(this.SAMPLE)[number - 1]));
  }

  getWeekdayMenu() {
    return [this.#weekday, this.#categorys];
  }

}

export default Menu;