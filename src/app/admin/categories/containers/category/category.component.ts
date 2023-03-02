import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Category } from '../../../../core/models/category.model';
import { CategoriesService } from '../../../../core/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category:Category;
  constructor( private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      
      if (params.id) {
        this.getCategory(params.id);
      }
    });
  }

  createCategory(data) {
 //   const data = this.form.value;
    this.categoriesService.createCategory(data).subscribe((response) => {
      console.log(response);
      this.router.navigate(['./admin/categories']);
    });
  }

  private getCategory(id:string) {
    this.categoriesService.getCategory(id).subscribe((data) => {
      console.log(data);
      this.category = data;
     // this.img = data.image;
 //     this.form.patchValue(data);
    });
  }

   updateCategory(data) {
   // const data = this.form.value;

    this.categoriesService
      .updateCategory(this.category.id.toString(), data)
      .subscribe((data) => {
        this.router.navigate(['./admin/categories']);
      });
  }

}
