import { Singleton } from "./Singleton";

declare const ue: any;
/**
 * 事件接口
 */
interface IItem {
  func: Function;
  ctx: unknown;
}

export class Event extends Singleton {
  eventDic = new Map<string, Array<IItem>>();
  private constructor() {
    super();
    console.log("构造event类");
  }
  static get Instance() {
    return super.GetInstance<Event>();
  }

  //ueToweb
  /**
   *特别注意了：如果你绑定的是匿名函数或者箭头函数，无法解绑
   * @param event 事件名称
   * @param func  函数
   * @param ctx 参数
   */
  Bind(event: string, func: Function, ctx: unknown) {
    if (this.eventDic.has(event)) {
      if (!this.eventDic.get(event)) this.eventDic.get(event)?.push({ func, ctx });
    } else {
      this.eventDic.set(event, [{ func, ctx }]);
    }
  }
  /**
   *  关闭事件
   * @param event 事件
   * @param func  函数
   */

  UnBind(event: string, func: Function) {
    if (this.eventDic.has(event)) {
      const index = this.eventDic.get(event)?.findIndex((i) => func === i.func);
      if (index != undefined) index > -1 && this.eventDic.get(event)?.splice(index, 1);
    }
  }
  /**
   * 执行事件
   * @param event
   * @param params
   */
  Broadcast(event: string, ...params: unknown[]) {
    if (this.eventDic.has(event)) {
      this.eventDic.get(event)?.forEach(({ func, ctx }) => {
        ctx ? func.apply(ctx, params) : func(...params);
      });
    }
  }
}
