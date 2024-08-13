import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/manage/category/category.component';
import { CategoryFormComponent } from './component/manage/category-form/category-form.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'admin/categories/add',
        component: CategoryFormComponent
    },
    {
        path:'admin/categories/:id',
        component: CategoryFormComponent
    },

];
