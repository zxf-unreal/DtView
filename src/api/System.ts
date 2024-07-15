import { Monitor } from "../utils/Monitor";

//画面质量
export enum QualityType {
  Low = 0,
  Middle = 1,
  High = 2,
  VeryHigh = 3,
}
//窗口设置
export enum WindowsType {
  /**
   * 全屏
   */
  Fullscreen,
  /**
   *无边框全屏
   */
  WindowedFullscreen,
  /**
   * 窗口模式
   */
  Windowed,
}

export class System {

  /**
   *
   * @param serviceUrl 服务地址
   * @param tokenKey 服务端token名
   * @param tokenValue 服务端token值
   */
  Login(serviceUrl: string, tokenKey: string, tokenValue: string) {
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
  PauseGame(pause: boolean = true) {
    return Monitor.Instance.Request("sys_pause", "系统暂停", { pause });
  }
  /**
   *
   * @param quality 画面质量
   */
  SetQuality(quality: QualityType = QualityType.VeryHigh) {
    return Monitor.Instance.Request("sys_quality", "系统质量设置", { quality });
  }
  /**
   * 设置窗口大小尺寸
   * @param sizeX 窗口水平尺寸
   * @param sizeY 窗口垂直尺寸
   * @param type 窗口类型
   */
  SetWindow(sizeX: number, sizeY: number, type: WindowsType = WindowsType.Fullscreen) {
    return Monitor.Instance.Request("sys_window", "窗口大小设置", { type, sizeX, sizeY });
  }
  /**
   * 复制内容
   * @param content 复制的内容
   */
  CopyContent(content: string) {
    return Monitor.Instance.Request("sys_copyContent", "复制信息", { content });
  }
}
