import { Event } from "./Event";
import { Singleton } from "./Singleton";
ue.interface.ueToWeb = (result) => {
    if (typeof result == "string")
        result = JSON.parse(result);
    Event.Instance.Broadcast(result.code, result);
};
export class Monitor extends Singleton {
    constructor() {
        super();
    }
    static get Instance() {
        return super.GetInstance();
    }
    uuidv4() {
        var d = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }
    Invoke(funName, data = "", time = 1) {
        return new Promise((resolve) => {
            const uuid = this.uuidv4();
            ue.interface[uuid] = (res) => {
                resolve(res);
            };
            ue.interface.broadcast(funName, JSON.stringify(data), uuid);
            setTimeout(() => {
                delete ue.interface[uuid];
            }, 1e3 * Math.max(1, time || 0));
        });
    }
    Request(code, msg, data = {}) {
        return this.Invoke("webToUe", JSON.stringify({
            code: code,
            msg: msg,
            data,
        })).then((res) => {
            let result = JSON.parse(res);
            return result;
        });
    }
}
