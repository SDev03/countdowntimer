import { Component, OnInit } from '@angular/core';
import { TimerService } from './services/timer.service';

@Component({ /// today is wednesday tomorrow is thursday
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
/// edit something here
  /// comment something here
  title = 'app';

  constructor(private ts3: TimerService, private ts5: TimerService) { }

  ngOnInit() {
    this.ts5.startWithRepeat(5000, 5000, this.fiveSecondTick.bind(this));
    // this.ts3.startWithRepeat(3000, 3000, this.threeSecondTick.bind(this));
    this.ts3.start(3000, this.threeSecondTick.bind(this));
  }
// add new comment from husnul
  // new comment (2) (3) (4)
  // trys
  fiveSecondTick() {
    console.log('app.component.fiveSecondTick!');  ///fivetick
    this.ts3.start(3000, this.threeSecondTick.bind(this));
  }

  threeSecondTick() {
    this.ts3.stop(this.threeSecondTick.bind(this));
    console.log('app.component.threeSecondTick!');  ///tick
  }     //ticktock
}
////////// Add something here
