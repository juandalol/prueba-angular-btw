import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {

  @Input() data: any;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  DeleteWhish(id: number){
    this.delete.emit(id);
  }
}
