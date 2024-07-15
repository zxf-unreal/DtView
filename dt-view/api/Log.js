import { Event } from "../utils/Event";
//日志类型
export var LogType;
(function (LogType) {
    /**
     * 成功信息
     */
    LogType["Success"] = "success";
    /**
     * 警告信息
     */
    LogType["Warning"] = "warning";
    /**
     *临时信息
     */
    LogType["Temp"] = "temp";
    /**
     * 错误信息
     */
    LogType["Error"] = "error";
})(LogType || (LogType = {}));
//日志模式
export var LogModel;
(function (LogModel) {
    /**
     * 打印模式
     */
    LogModel["Print"] = "log_print";
    /**
     * 日志模式
     */
    LogModel["Log"] = "log_log";
})(LogModel || (LogModel = {}));
export class Log {
    /**
     * 绑定屏幕打印
     * @param func 函数
     * @param ctx 上下文
     */
    Bind(model, func, ctx) {
        Event.Instance.Bind(model, func, ctx);
    }
    /**
     * 解绑屏幕打印
     */
    UnBind(model, func) {
        Event.Instance.UnBind(model, func);
    }
}
