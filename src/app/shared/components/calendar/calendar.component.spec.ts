import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarOptions, DateSelectArg, EventApi } from '@fullcalendar/angular';

import { CalendarComponent } from './calendar.component';
import { INITIAL_EVENTS } from './event-utils';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let handleDate: DateSelectArg;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleCalendarToggle', () => {
    component.handleCalendarToggle()
    expect(component).toBeTruthy();
  });

  it('should call handleWeekendsToggle', () => {
    component.handleWeekendsToggle();
    expect(component).toBeTruthy;
  });

  it('should call handleDateSelect', () => {
    component.handleDateSelect(handleDate);
    expect(component).toBeTruthy;
  });

  it('should call handleEventClick', () => {
    let info: any = {
      "el": {
        "l": {},
        "__zone_symbol__keydownfalse": [
          {
            "type": "eventTask",
            "state": "scheduled",
            "source": "HTMLAnchorElement.addEventListener:keydown",
            "zone": "angular",
            "runCount": 0
          }
        ],
        "fcSeg": {
          "row": 3,
          "firstCol": 2,
          "lastCol": 2,
          "isStart": true,
          "isEnd": true,
          "eventRange": {
            "def": {
              "title": "All-day event",
              "groupId": "",
              "publicId": "0",
              "url": "",
              "recurringDef": null,
              "defId": "11",
              "sourceId": "9",
              "allDay": true,
              "hasEnd": false,
              "ui": {
                "display": null,
                "constraints": [],
                "overlap": null,
                "allows": [],
                "backgroundColor": "",
                "borderColor": "",
                "textColor": "",
                "classNames": []
              },
              "extendedProps": {}
            },
            "ui": {
              "display": "auto",
              "startEditable": true,
              "durationEditable": true,
              "constraints": [],
              "overlap": null,
              "allows": [],
              "backgroundColor": "",
              "borderColor": "",
              "textColor": "",
              "classNames": []
            },
            "instance": {
              "instanceId": "12",
              "defId": "11",
              "range": {
                "start": "2022-08-23T00:00:00.000Z",
                "end": "2022-08-24T00:00:00.000Z"
              },
              "forcedStartTzo": null,
              "forcedEndTzo": null
            },
            "range": {
              "start": "2022-08-23T00:00:00.000Z",
              "end": "2022-08-24T00:00:00.000Z"
            },
            "isStart": true,
            "isEnd": true
          }
        },
        "__zone_symbol__mouseleavefalse": null,
        "__zone_symbol__ON_PROPERTYmouseleave": null
      },
      "event": {
        "title": "All-day event",
        "start": "2022-08-23",
        "id": "0"
      },
      "jsEvent": {
        "isTrusted": true
      },
      "view": {
        "type": "dayGridMonth",
        "dateEnv": {
          "timeZone": "local",
          "canComputeOffset": true,
          "calendarSystem": {},
          "locale": {
            "codeArg": "en",
            "codes": [
              "en"
            ],
            "week": {
              "dow": 0,
              "doy": 4
            },
            "simpleNumberFormat": {},
            "options": {
              "direction": "ltr",
              "buttonText": {
                "prev": "prev",
                "next": "next",
                "prevYear": "prev year",
                "nextYear": "next year",
                "year": "year",
                "today": "today",
                "month": "month",
                "week": "week",
                "day": "day",
                "list": "list"
              },
              "weekText": "W",
              "weekTextLong": "Week",
              "closeHint": "Close",
              "timeHint": "Time",
              "eventHint": "Event",
              "allDayText": "all-day",
              "moreLinkText": "more",
              "noEventsText": "No events to display",
              "buttonHints": {
                "prev": "Previous $0",
                "next": "Next $0"
              },
              "viewHint": "$0 view",
              "navLinkHint": "Go to $0"
            }
          },
          "weekDow": 0,
          "weekDoy": 4,
          "weekText": "W",
          "weekTextLong": "Week",
          "cmdFormatter": null,
          "defaultSeparator": " - "
        }
      }
    }
    component.handleEventClick(info);
    expect(info.event).toBeFalsy()
    expect(component).toBeTruthy;
  });

  it('should call handleEvents', () => {
    let eventapi: [] = [];
    component.handleEvents(eventapi);
    expect(component).toBeTruthy;
  });

});