/**天空类型 */
export declare enum SkyBoxType {
    /**体积云 */
    VolumetricClounds = 0,
    /**静态云 */
    StaticClouds = 1,
    /**二维动态云 */
    DynamicClounds2D = 2,
    /**无云 */
    SkyAtmosphere = 3,
    /**体积极光（夜晚效果） */
    VolumetricAurota = 4
}
/**白天夜晚 */
export declare enum DayNightType {
    Day = 0,
    Night = 1
}
/**
 * 天气类型
 */
export declare enum WeatherType {
    /**
     * 纯净天空
     */
    ClearSky = 0,
    /**
     * 多云天气
     */
    CloudyWeather = 1,
    /**
     * 大雾天气
     */
    BigFog = 2,
    /**
     * 阴天
     */
    OvercastSky = 3,
    /**
     * 少量云
     */
    SmallCloud = 4,
    /**
     * 雨天
     */
    Rain = 5,
    /**
     * 太阳雨
     */
    SunRain = 6,
    /**
     * 雷阵雨
     */
    Thundershower = 7,
    /**
     * 沙尘天气
     */
    DustWeather = 8,
    /**
     * 沙尘爆
     */
    DustBlast = 9,
    /**
     * 雪天
     */
    Snow = 10,
    /**
     * 太阳雪
     */
    DayTimeSnow = 11,
    /**
     * 暴风雪
     */
    Snowstorm = 12
}
export declare class Weather {
    /**
     * 设置一天的时间
     */
    SetTime(timeOfDay: number): Promise<any>;
    /**
     * 设置黎明和夜晚的时间
     */
    SetDusk(dawnTime?: number, duskTime?: number, nightBrightness?: number): Promise<any>;
    /**
     * 设置天气
     */
    SetWeather(weather?: WeatherType): Promise<any>;
    /**
     * 设置太阳和月亮光颜色  设置夜晚颜色
     */
    SetColor(color: string, type?: DayNightType): Promise<any>;
    /**
     * 设置太阳光角度    设置夜晚角度
     */
    SetAngle(angle: number, type?: DayNightType): Promise<any>;
    /**
     * 设置太阳光强度  设置夜晚强度
     */
    SetIntensity(intensity: number, type?: DayNightType): Promise<any>;
}
//# sourceMappingURL=Weather.d.ts.map