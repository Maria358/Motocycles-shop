import MessengerModel from './messengerModel.js'
import Observer from '../common/observer.js'

export default class MessengeкController {
    constructor(){
        this.model = new MessengerModel();
        Observer.subscribe(Observer.events.sendMsgToTG, this.onSendMsg);
    }

    onSendMsg = msg => {
        this.model.sendMsg(msg)
    }
}