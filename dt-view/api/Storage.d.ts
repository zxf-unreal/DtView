export declare enum StorageModel {
    /**
     * 本地
     */
    Local = 0,
    /**
     * 临时
     */
    Temp = 1
}
export declare class Storage {
    /**
     *
     * @param key 取名
     * @param type 类型
     * @returns
     */
    Read(key: string, type?: StorageModel): Promise<any>;
    /**
     * @param key 存储
     * @param value value值
     * @param type 类型
     * @param force  是否强制写入
     * @returns
     */
    Write(key: string, value: string, type?: StorageModel, force?: boolean): Promise<any>;
}
//# sourceMappingURL=Storage.d.ts.map