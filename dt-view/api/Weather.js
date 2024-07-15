import { Monitor } from "../utils/Monitor";
/**天空类型 */
export var SkyBoxType;
(function (SkyBoxType) {
    /**体积云 */
    SkyBoxType[SkyBoxType["VolumetricClounds"] = 0] = "VolumetricClounds";
    /**静态云 */
    SkyBoxType[SkyBoxType["StaticClouds"] = 1] = "StaticClouds";
    /**二维动态云 */
    SkyBoxType[SkyBoxType["DynamicClounds2D"] = 2] = "DynamicClounds2D";
    /**无云 */
    SkyBoxType[SkyBoxType["SkyAtmosphere"] = 3] = "SkyAtmosphere";
    /**体积极光（夜晚效果） */
    SkyBoxType[SkyBoxType["VolumetricAurota"] = 4] = "VolumetricAurota";
})(SkyBoxType || (SkyBoxType = {}));
/**白天夜晚 */
export var DayNightType;
(function (DayNightType) {
    DayNightType[DayNightType["Day"] = 0] = "Day";
    DayNightType[DayNightType["Night"] = 1] = "Night";
})(DayNightType || (DayNightType = {}));
/**
 * 天气类型
 */
export var WeatherType;
(function (WeatherType) {
    /**
     * 纯净天空
     */
    WeatherType[WeatherType["ClearSky"] = 0] = "ClearSky";
    /**
     * 多云天气
     */
    WeatherType[WeatherType["CloudyWeather"] = 1] = "CloudyWeather";
    /**
     * 大雾天气
     */
    WeatherType[WeatherType["BigFog"] = 2] = "BigFog";
    /**
     * 阴天
     */
    WeatherType[WeatherType["OvercastSky"] = 3] = "OvercastSky";
    /**
     * 少量云
     */
    WeatherType[WeatherType["SmallCloud"] = 4] = "SmallCloud";
    /**
     * 雨天
     */
    WeatherType[WeatherType["Rain"] = 5] = "Rain";
    /**
     * 太阳雨
     */
    WeatherType[WeatherType["SunRain"] = 6] = "SunRain";
    /**
     * 雷阵雨
     */
    WeatherType[WeatherType["Thundershower"] = 7] = "Thundershower";
    /**
     * 沙尘天气
     */
    WeatherType[WeatherType["DustWeather"] = 8] = "DustWeather";
    /**
     * 沙尘爆
     */
    WeatherType[WeatherType["DustBlast"] = 9] = "DustBlast";
    /**
     * 雪天
     */
    WeatherType[WeatherType["Snow"] = 10] = "Snow";
    /**
     * 太阳雪
     */
    WeatherType[WeatherType["DayTimeSnow"] = 11] = "DayTimeSnow";
    /**
     * 暴风雪
     */
    WeatherType[WeatherType["Snowstorm"] = 12] = "Snowstorm";
})(WeatherType || (WeatherType = {}));
export class Weather {
    /**
     * 设置一天的时间
     */
    SetTime(timeOfDay) {
        return Monitor.Instance.Request("weather_time", "设置一天的时间", { timeOfDay });
    }
    /**
     * 设置黎明和夜晚的时间
     */
    SetDusk(dawnTime = 600, duskTime = 1600, nightBrightness = 2) {
        return Monitor.Instance.Request("weather_dusk", "设置黎明和夜晚的时间", { dawnTime, duskTime, nightBrightness });
    }
    /**
     * 设置天气
     */
    SetWeather(weather = WeatherType.CloudyWeather) {
        return Monitor.Instance.Request("weather_type", "设置天气", { weather });
    }
    /**
     * 设置太阳和月亮光颜色  设置夜晚颜色
     */
    SetColor(color, type = DayNightType.Day) {
        return Monitor.Instance.Request("weather_color", "设置太阳和月亮光颜色  设置夜晚颜色", { type, color });
    }
    /**
     * 设置太阳光角度    设置夜晚角度
     */
    SetAngle(angle, type = DayNightType.Day) {
        return Monitor.Instance.Request("weather_angle", " 设置太阳光角度    设置夜晚角度", { type, angle });
    }
    /**
     * 设置太阳光强度  设置夜晚强度
     */
    SetIntensity(intensity, type = DayNightType.Day) {
        return Monitor.Instance.Request("weather_intensity", "设置一天的时间", { type, intensity });
    }
}
