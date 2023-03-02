import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../../../core/models/category.model';
import { CategoriesService } from '../../../../core/services/categories.service';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  img: string;
  isNew=true;
  @Input() set category(data:Category){
    if(data){
      this.isNew = false;
      this.form.patchValue(data)
    }
  }
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();

  categoryId: string;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    /*   this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
      if (this.categoryId) {
        this.getCategory();
      }
    }); */
    
  }

  ngOnChanges(){
  /*   if(this.category){
      this.form.patchValue(this.category)
    } */
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  save() {
    if (this.form.valid) {
      if (!this.isNew) {
        this.update.emit(this.form.value);
        //   this.updateCategory();
      } else {
        this.create.emit(this.form.value);
        //    this.createCategory();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
}
