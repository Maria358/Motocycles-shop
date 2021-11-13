import { serverUrl } from "../common/config.js";

export default class MessengerModel {
    sendMsg = (msg) => {
        const fullrl = `${serverUrl}/${msg}`;

        fetch(`${fullrl}`, { mode: 'no-cors' });
    };
}
