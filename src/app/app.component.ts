import { Component, OnInit } from '@angular/core';
import { WishListService } from './services/wish-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prueba-angular-btw';


  constructor(private whishSvc:WishListService){
  }

  ngOnInit(): void{

  }

}
