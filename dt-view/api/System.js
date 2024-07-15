import { Monitor } from "../utils/Monitor";
//画面质量
export var QualityType;
(function (QualityType) {
    QualityType[QualityType["Low"] = 0] = "Low";
    QualityType[QualityType["Middle"] = 1] = "Middle";
    QualityType[QualityType["High"] = 2] = "High";
    QualityType[QualityType["VeryHigh"] = 3] = "VeryHigh";
})(QualityType || (QualityType = {}));
//窗口设置
export var WindowsType;
(function (WindowsType) {
    /**
     * 全屏
     */
    WindowsType[WindowsType["Fullscreen"] = 0] = "Fullscreen";
    /**
     *无边框全屏
     */
    WindowsType[WindowsType["WindowedFullscreen"] = 1] = "WindowedFullscreen";
    /**
     * 窗口模式
     */
    WindowsType[WindowsType["Windowed"] = 2] = "Windowed";
})(WindowsType || (WindowsType = {}));
export class System {
    /**
     *
     * @param serviceUrl 服务地址
     * @param tokenKey 服务端token名
     * @param tokenValue 服务端token值
     */
    Login(serviceUrl, tokenKey, tokenValue) {
        return Monitor.Instance.Request("sys_login", "系统登录", { serviceUrl, tokenKey, tokenValue });
    }
    /**
     * 系统退出
     */
    QuitGame() {
        return Monitor.Instance.Request("sys_quit", "系统退出");
    }
    /**
     *
     * @param pause 暂停
     */
    PauseGame(pause = true) {
        return Monitor.Instance.Request("sys_pause", "系统暂停", { pause });
    }
    /**
     *
     * @param quality 画面质量
     */
    SetQuality(quality = QualityType.VeryHigh) {
        return Monitor.Instance.Request("sys_quality", "系统质量设置", { quality });
    }
    /**
     * 设置窗口大小尺寸
     * @param sizeX 窗口水平尺寸
     * @param sizeY 窗口垂直尺寸
     * @param type 窗口类型
     */
    SetWindow(sizeX, sizeY, type = WindowsType.Fullscreen) {
        return Monitor.Instance.Request("sys_window", "窗口大小设置", { type, sizeX, sizeY });
    }
    /**
     * 复制内容
     * @param content 复制的内容
     */
    CopyContent(content) {
        return Monitor.Instance.Request("sys_copyContent", "复制信息", { content });
    }
}
