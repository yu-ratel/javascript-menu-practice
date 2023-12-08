import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import Coachs from './domain/Coachs.js';

class App {
	#coachs;
  
	async play() {
		OutputView.startGuide();

		await this.requestCoachNames();
		await this.requestInedibleMenus();

		this.#coachs.menuRecommendation();

		OutputView.result(this.#coachs.result());
		OutputView.endGuide();
	}

	async requestCoachNames() {
		try {
			this.#coachs = new Coachs(await InputView.coachNames());
		} catch(error) {
			OutputView.printMessage(error);
			return this.requestCoachNames();
		}
	}

	async requestInedibleMenus() {
		for (let i = 0; i < this.#coachs.getCoachs().length; i += 1) {
			this.#coachs.addInedibleMenus(await InputView.inedibleMenus(this.#coachs.getCoachs()[i].name), i);
		}
	}
}

export default App;
