import { Singleton } from "./Singleton";
export declare const ue: any;
interface UeResult {
    code: string;
    msg: string;
    data: any;
}
export declare class Monitor extends Singleton {
    private constructor();
    static get Instance(): Monitor;
    private uuidv4;
    Invoke(funName: String, data?: String, time?: number): Promise<UeResult>;
    Request(code: string, msg: string, data?: Object): Promise<any>;
}
export {};
//# sourceMappingURL=Monitor.d.ts.map