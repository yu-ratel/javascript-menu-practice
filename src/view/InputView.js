import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async userInputRead(userInput) {
    const input = await Console.readLineAsync(userInput);
    return input;
  },
}

export default InputView;
