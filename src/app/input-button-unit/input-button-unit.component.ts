import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import '@angular/compiler';


@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title = '';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  submitValue(newTitle: string){
    this.submit.emit(newTitle);
    this.title = null;    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
