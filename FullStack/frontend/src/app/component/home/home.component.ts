import { Component } from '@angular/core';
import { CategoryComponent } from "../manage/category/category.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
