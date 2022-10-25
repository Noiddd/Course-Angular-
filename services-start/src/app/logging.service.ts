import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" }) // this provides the service at application wide
export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
