import { CategoryService } from './../services/category.service';
import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService: CategoryService) {
    this.model = {
      name: '',
      urlhandle: ''
    };

  }
 
  onFormSubmit() {
    this.addCategorySubscription =  this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) =>{
        console.log('This was Successful!');
      }
    }) ;

  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }       

}
