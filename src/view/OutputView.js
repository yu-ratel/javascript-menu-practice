import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  startGuide() {
    this.printMessage('점심 메뉴 추천을 시작합니다.\n');
  },

  result(state) {
    this.printMessage('\n메뉴 추천 결과입니다.');
    state.map((_, index) => {
      this.printMessage(`[ ${state[index]}]`);
    })
  },

  endGuide() {
    this.printMessage('\n추천을 완료했습니다.');
  },

  printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
