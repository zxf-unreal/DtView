import { Monitor } from "../utils/Monitor";
//存储模式
export var StorageModel;
(function (StorageModel) {
    /**
     * 本地
     */
    StorageModel[StorageModel["Local"] = 0] = "Local";
    /**
     * 临时
     */
    StorageModel[StorageModel["Temp"] = 1] = "Temp";
})(StorageModel || (StorageModel = {}));
export class Storage {
    /**
     *
     * @param key 取名
     * @param type 类型
     * @returns
     */
    Read(key, type = StorageModel.Temp) {
        return Monitor.Instance.Request("storage_read", "读取数据", { type, section: "web", key });
    }
    /**
     * @param key 存储
     * @param value value值
     * @param type 类型
     * @param force  是否强制写入
     * @returns
     */
    Write(key, value, type = StorageModel.Local, force = true) {
        return Monitor.Instance.Request("storage_write", "写入数据", { section: "web", type, force, key, value });
    }
}
