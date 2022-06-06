import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.scss']
})
export class SearchedComponent implements OnInit {
@Input() movies? : any
  constructor() { }

  ngOnInit(): void {
  }

}
