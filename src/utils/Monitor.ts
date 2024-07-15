import { Event } from "./Event";
import { Singleton } from "./Singleton";
export declare const ue: any; //ue类
interface UeResult {
  code: string;
  msg: string;
  data: any;
}

ue.interface.ueToWeb = (result: any) => {
  if (typeof result == "string") result = JSON.parse(result);
  Event.Instance.Broadcast(result.code, result);
};

export class Monitor extends Singleton {
  private constructor() {
    super();
  }

  static get Instance() {
    return super.GetInstance<Monitor>();
  }

  private uuidv4() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }


  Invoke(funName: String, data: String = "", time = 1) {
    return new Promise<UeResult>((resolve) => {
      const uuid = this.uuidv4();
      ue.interface[uuid] = (res: UeResult | PromiseLike<UeResult>) => {
        resolve(res);
      };
      ue.interface.broadcast(funName, JSON.stringify(data), uuid);
      setTimeout(() => {
        delete ue.interface[uuid];
      }, 1e3 * Math.max(1, time || 0));
    });
  }

  Request(code: string, msg: string, data: Object = {}) {
    return this.Invoke(
      "webToUe",
      JSON.stringify({
        code: code,
        msg: msg,
        data,
      })
    ).then((res: any) => {
      let result = JSON.parse(res);
      return result;
    });
  }
}
