import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints ,} from '@angular/cdk/layout';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';
import { parseHostBindings } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio'; 
  @HostBinding('class.pc') pcMode = false;
 
  
  constructor(private breakpointObserver: BreakpointObserver) { 
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) =>{
      for (let breakpoint of Object.keys(result.breakpoints)) {
        if (result.breakpoints[breakpoint]) {
          if(breakpoint = Breakpoints.HandsetPortrait) {
            this.pcMode = false;
          }
          if(breakpoint = Breakpoints.WebLandscape) {
            this.pcMode = true;
          }
        }
      }
      }
    })
  }
}
