import { Singleton } from "./Singleton";
export class Event extends Singleton {
    constructor() {
        super();
        this.eventDic = new Map();
        console.log("构造event类");
    }
    static get Instance() {
        return super.GetInstance();
    }
    //ueToweb
    /**
     *特别注意了：如果你绑定的是匿名函数或者箭头函数，无法解绑
     * @param event 事件名称
     * @param func  函数
     * @param ctx 参数
     */
    Bind(event, func, ctx) {
        var _a;
        if (this.eventDic.has(event)) {
            if (!this.eventDic.get(event))
                (_a = this.eventDic.get(event)) === null || _a === void 0 ? void 0 : _a.push({ func, ctx });
        }
        else {
            this.eventDic.set(event, [{ func, ctx }]);
        }
    }
    /**
     *  关闭事件
     * @param event 事件
     * @param func  函数
     */
    UnBind(event, func) {
        var _a, _b;
        if (this.eventDic.has(event)) {
            const index = (_a = this.eventDic.get(event)) === null || _a === void 0 ? void 0 : _a.findIndex((i) => func === i.func);
            if (index != undefined)
                index > -1 && ((_b = this.eventDic.get(event)) === null || _b === void 0 ? void 0 : _b.splice(index, 1));
        }
    }
    /**
     * 执行事件
     * @param event
     * @param params
     */
    Broadcast(event, ...params) {
        var _a;
        if (this.eventDic.has(event)) {
            (_a = this.eventDic.get(event)) === null || _a === void 0 ? void 0 : _a.forEach(({ func, ctx }) => {
                ctx ? func.apply(ctx, params) : func(...params);
            });
        }
    }
}
