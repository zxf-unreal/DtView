import { Singleton } from "./Singleton";
/**
 * 事件接口
 */
interface IItem {
    func: Function;
    ctx: unknown;
}
export declare class Event extends Singleton {
    eventDic: Map<string, IItem[]>;
    private constructor();
    static get Instance(): Event;
    /**
     *特别注意了：如果你绑定的是匿名函数或者箭头函数，无法解绑
     * @param event 事件名称
     * @param func  函数
     * @param ctx 参数
     */
    Bind(event: string, func: Function, ctx: unknown): void;
    /**
     *  关闭事件
     * @param event 事件
     * @param func  函数
     */
    UnBind(event: string, func: Function): void;
    /**
     * 执行事件
     * @param event
     * @param params
     */
    Broadcast(event: string, ...params: unknown[]): void;
}
export {};
//# sourceMappingURL=Event.d.ts.map