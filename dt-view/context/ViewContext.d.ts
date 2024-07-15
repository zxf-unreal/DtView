import { Log } from "../api/Log";
import { System } from "../api/System";
import { Monitor } from "../utils/Monitor";
import { Event } from "../utils/Event";
import { Storage } from "../api/Storage";
declare class ViewContext {
    DtMonitor: Monitor;
    DtEvent: Event;
    DtSystem: System;
    DtLog: Log;
    DtStorage: Storage;
    constructor();
}
declare const DtView: ViewContext;
export { DtView, ViewContext };
//# sourceMappingURL=ViewContext.d.ts.map