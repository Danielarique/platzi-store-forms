import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../core/models/category.model';
import { CategoriesService } from '../../../../core/services/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  displayedColumns = ['id', 'name', 'image', 'actions'];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  deleteCategory(id:string){
    this.categoriesService.deleteCategory(id).subscribe(data=>{

    })
  }
}
