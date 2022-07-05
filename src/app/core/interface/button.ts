import { EventEmitter } from "@angular/core";

export interface button {
    type: string
    btnClass: string,
    btnText: string,
    eventName:any,
    returnObj:any
}

export type btn = button;