import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatButton,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  displayedColumns: string[] = ['id', 'name', 'action'];
  result={};
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) !paginator: MatPaginator | undefined;
  categoryService=inject(ServiceService)
constructor(){
this.dataSource=new MatTableDataSource([] as any);
}
ngOnInit(){
  this.categoryService.showData().subscribe((result: any) => {
    this.dataSource.data = result;
  //  console.log(result);
    
  });
}

ngAfterViewInit() {
  if (this.paginator) {
    this.dataSource.paginator = this.paginator;
  }
}
deleteCategries(id:string) {
  this.categoryService.deleteById(id).subscribe((result: any) => {
    this.ngOnInit();
  });
}
  }


