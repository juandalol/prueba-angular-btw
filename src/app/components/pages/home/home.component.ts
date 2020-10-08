import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  whishList: any[] = [];

  constructor(private whishSvc: WishListService) { }

  ngOnInit(): void {
    this.whishList = this.whishSvc.getWishList();
    console.log(this.whishList);
  }

  deleteWhish(id: number){
    console.log(id);
    
    this.whishList = this.whishList.filter(whish => whish.id !== id );
  }

}
