import MotocycleModel from './motocycleModel.js';
import MotocycleView from './motocycleView.js';

export default class MotocycleController {
    constructor() {
        this.view = new MotocycleView();
        this.model = new MotocycleModel();
    }

    init = async () => {
        const data = await this.model.sheetData();
        this.view.render(data);
    }
}