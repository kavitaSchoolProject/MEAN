import {Component, inject} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import { ServiceService } from '../../../service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,RouterLink],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  categoryService=inject(ServiceService)
  router=inject(Router)
  categoryForm = new FormControl('', [Validators.required]);
  name!:string
  route =inject(ActivatedRoute)
  id!:string
  Isedit=false
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    if(this.id){
      this.Isedit=true;
    this.categoryService.showDataByid(this.id).subscribe((result:any)=>{
      console.log(result);
      this.name=result.name
    })
  }
}
  addCategories(){
   console.log(this.name);
   this.categoryService.addCategory(this.name).subscribe((result:any)=>{
    console.log(result);
    alert("Category Added")
    this.router.navigate(['admin/categories/'])
   })
  
  }
  updateCategories(){
    console.log(this.name);
    this.categoryService.updateCategory(this.id,this.name).subscribe((result:any)=>{
     console.log(result);
     alert("Category Updated")
     this.router.navigate(['admin/categories/'])
    })
 
  }
 
}
