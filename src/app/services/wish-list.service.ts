import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor() { }

  getWishList(){
    return [
      {
        "id": 1,
        "whish": "eu,",
        "description": "sed turpis nec mauris"
      },
      {
        "id": 2,
        "whish": "et,",
        "description": "ridiculus mus. Aenean eget"
      },
      {
        "id": 3,
        "whish": "sed,",
        "description": "tellus"
      },
      {
        "id": 4,
        "whish": "lectus",
        "description": "gravida non, sollicitudin a, malesuada id, erat. Etiam"
      },
      {
        "id": 5,
        "whish": "Proin",
        "description": "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi."
      },
      {
        "id": 6,
        "whish": "adipiscing.",
        "description": "commodo auctor velit."
      },
      {
        "id": 7,
        "whish": "orci,",
        "description": "tellus lorem eu metus. In lorem. Donec elementum, lorem"
      },
      {
        "id": 8,
        "whish": "ac",
        "description": "arcu vel quam dignissim pharetra. Nam ac"
      },
      {
        "id": 9,
        "whish": "tempor,",
        "description": "vulputate, lacus. Cras interdum."
      },
      {
        "id": 10,
        "whish": "erat.",
        "description": "nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod"
      },      
    ]
  }
}
