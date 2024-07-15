export declare enum LogType {
    /**
     * 成功信息
     */
    Success = "success",
    /**
     * 警告信息
     */
    Warning = "warning",
    /**
     *临时信息
     */
    Temp = "temp",
    /**
     * 错误信息
     */
    Error = "error"
}
export declare enum LogModel {
    /**
     * 打印模式
     */
    Print = "log_print",
    /**
     * 日志模式
     */
    Log = "log_log"
}
export declare class Log {
    /**
     * 绑定屏幕打印
     * @param func 函数
     * @param ctx 上下文
     */
    Bind(model: LogModel, func: Function, ctx: unknown): void;
    /**
     * 解绑屏幕打印
     */
    UnBind(model: LogModel, func: Function): void;
}
//# sourceMappingURL=Log.d.ts.map