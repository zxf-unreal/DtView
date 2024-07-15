export declare enum QualityType {
    Low = 0,
    Middle = 1,
    High = 2,
    VeryHigh = 3
}
export declare enum WindowsType {
    /**
     * 全屏
     */
    Fullscreen = 0,
    /**
     *无边框全屏
     */
    WindowedFullscreen = 1,
    /**
     * 窗口模式
     */
    Windowed = 2
}
export declare class System {
    /**
     *
     * @param serviceUrl 服务地址
     * @param tokenKey 服务端token名
     * @param tokenValue 服务端token值
     */
    Login(serviceUrl: string, tokenKey: string, tokenValue: string): Promise<any>;
    /**
     * 系统退出
     */
    QuitGame(): Promise<any>;
    /**
     *
     * @param pause 暂停
     */
    PauseGame(pause?: boolean): Promise<any>;
    /**
     *
     * @param quality 画面质量
     */
    SetQuality(quality?: QualityType): Promise<any>;
    /**
     * 设置窗口大小尺寸
     * @param sizeX 窗口水平尺寸
     * @param sizeY 窗口垂直尺寸
     * @param type 窗口类型
     */
    SetWindow(sizeX: number, sizeY: number, type?: WindowsType): Promise<any>;
    /**
     * 复制内容
     * @param content 复制的内容
     */
    CopyContent(content: string): Promise<any>;
}
//# sourceMappingURL=System.d.ts.map