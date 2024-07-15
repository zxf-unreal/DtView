import { Monitor } from "../utils/Monitor";


/**天空类型 */
export enum SkyBoxType {
  /**体积云 */
  VolumetricClounds,
  /**静态云 */
  StaticClouds,
  /**二维动态云 */
  DynamicClounds2D,
  /**无云 */
  SkyAtmosphere,
  /**体积极光（夜晚效果） */
  VolumetricAurota,
}

/**白天夜晚 */
export enum DayNightType {
  Day,
  Night,
}


/**
 * 天气类型
 */
export enum WeatherType {
  /**
   * 纯净天空
   */
  ClearSky,
  /**
   * 多云天气
   */
  CloudyWeather,
  /**
   * 大雾天气
   */
  BigFog,
  /**
   * 阴天
   */
  OvercastSky,
  /**
   * 少量云
   */
  SmallCloud,
  /**
   * 雨天
   */
  Rain,
  /**
   * 太阳雨
   */
  SunRain,
  /**
   * 雷阵雨
   */
  Thundershower,
  /**
   * 沙尘天气
   */
  DustWeather,
  /**
   * 沙尘爆
   */
  DustBlast,
  /**
   * 雪天
   */
  Snow,
  /**
   * 太阳雪
   */
  DayTimeSnow,
  /**
   * 暴风雪
   */
  Snowstorm,
}

export class Weather {
  /**
   * 设置一天的时间
   */
  SetTime(timeOfDay: number) {
    return Monitor.Instance.Request("weather_time", "设置一天的时间", { timeOfDay });
  }
  /**
   * 设置黎明和夜晚的时间
   */
  SetDusk(dawnTime: number = 600, duskTime: number = 1600, nightBrightness: number = 2) {
    return Monitor.Instance.Request("weather_dusk", "设置黎明和夜晚的时间", { dawnTime, duskTime, nightBrightness });
  }
  /**
   * 设置天气
   */
  SetWeather(weather: WeatherType=WeatherType.CloudyWeather) {
    return Monitor.Instance.Request("weather_type", "设置天气", { weather });
  }
  /**
   * 设置太阳和月亮光颜色  设置夜晚颜色
   */
  SetColor(color: string, type: DayNightType = DayNightType.Day) {
    return Monitor.Instance.Request("weather_color", "设置太阳和月亮光颜色  设置夜晚颜色", { type, color });
  }
  /**
   * 设置太阳光角度    设置夜晚角度
   */
  SetAngle(angle: number, type: DayNightType = DayNightType.Day) {
    return Monitor.Instance.Request("weather_angle", " 设置太阳光角度    设置夜晚角度", { type, angle });
  }
  /**
   * 设置太阳光强度  设置夜晚强度
   */
  SetIntensity(intensity: number, type: DayNightType = DayNightType.Day) {
    return Monitor.Instance.Request("weather_intensity", "设置一天的时间", { type, intensity });
  }
}
