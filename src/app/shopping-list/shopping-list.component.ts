import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10),
    new Ingredient('Cucumbers',7)
  ];

  constructor () {

  }
  ngOnInit(): void {

  }
}
