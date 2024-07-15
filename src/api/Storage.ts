import { Monitor } from "../utils/Monitor";

//存储模式
export enum StorageModel {
  /**
   * 本地
   */
  Local = 0,
  /**
   * 临时
   */
  Temp = 1,
}

export class Storage {
  /**
   *
   * @param key 取名
   * @param type 类型
   * @returns
   */
  Read(key: string, type: StorageModel = StorageModel.Temp) {
    return Monitor.Instance.Request("storage_read", "读取数据", { type, section: "web", key });
  }
  /**
   * @param key 存储
   * @param value value值
   * @param type 类型
   * @param force  是否强制写入
   * @returns
   */
  Write(key: string, value: string, type: StorageModel = StorageModel.Local, force: boolean = true) {
    return Monitor.Instance.Request("storage_write", "写入数据", { section: "web", type, force, key, value });
  }
}
