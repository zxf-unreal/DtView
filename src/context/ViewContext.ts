import { Log } from "../api/Log";
import { System } from "../api/System";
import { Monitor } from "../utils/Monitor";
import { Event } from "../utils/Event";
import { Storage } from "../api/Storage";


class ViewContext {
  DtMonitor: Monitor;
  DtEvent: Event;
  DtSystem: System;
  DtLog:Log;
  DtStorage:Storage;

  constructor() {
    this.DtMonitor = Monitor.GetInstance();
    this.DtEvent = Event.GetInstance();
    this.DtSystem = new System();
    this.DtLog = new Log();
    this.DtStorage = new Storage();
    console.log("初始化dt上下文");
  }
}

const DtView = new ViewContext();
export { DtView, ViewContext };
