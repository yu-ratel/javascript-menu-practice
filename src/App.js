import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import Coachs from './domain/Coachs';

class App {
  async play() {
		OutputView.startGuide();
		const coachs = new Coachs(await InputView.coachNames());

		for (let i = 0; i < coachs.getCoachs().length; i += 1) {
			coachs.addInedibleMenus(await InputView.inedibleMenus(coachs.getCoachs()[i].name), i);
		}

		coachs.menuRecommendation();

		OutputView.result(coachs.result());
		OutputView.endGuide();
	}
}

export default App;
