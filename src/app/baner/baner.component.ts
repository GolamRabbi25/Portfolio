import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { from } from 'rxjs';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent implements OnInit {
  constructor (private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

}


