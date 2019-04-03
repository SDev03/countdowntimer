import { Injectable } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Injectable()
export class TimerService {

  testPlayerTimer: any;
  subscription: any;
  pauser: any;

  constructor() { }
  public start(seconds, callback) {
    this.testPlayerTimer =  new TimerObservable(seconds, callback);
    this.subscription = this.testPlayerTimer.subscribe(callback);
  }

  public startWithRepeat(interval, repeat, callback) {
    this.testPlayerTimer =  new TimerObservable(interval, repeat, callback);
    this.subscription = this.testPlayerTimer.subscribe(callback);
  }

  public stop(callback) {
    this.subscription.unsubscribe(); /// unsubscribing
  }

}
