import { Console } from '@woowacourse/mission-utils';

const InputView = {
  coachNames() {
    return this.userInputRead('코치의 이름을 입력해 주세요. (, 로 구분)\n');
  },

  async userInputRead(userInput) {
    const input = await Console.readLineAsync(userInput);
    return input;
  },
}

export default InputView;
