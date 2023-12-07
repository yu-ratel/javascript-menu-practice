import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  startGuide() {
    this.printMessage('점심 메뉴 추천을 시작합니다.\n');
  },

  printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
