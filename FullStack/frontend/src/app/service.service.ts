import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private https: HttpClient;

  constructor(httpClient: HttpClient) {
    this.https = httpClient;
  }

  //fetch api
  showData() {
    return this.https.get('http://localhost:3000/category');
  }
  showDataByid(id:string) {
    return this.https.get('http://localhost:3000/category/'+id);
  }
  //add api
  addCategory(name:string) {
    return this.https.post('http://localhost:3000/category',{
      name: name
    });
  }
  updateCategory(id:string , name:string){
    return this.https.put('http://localhost:3000/category/'+id,{
      name: name
    });
  }
  deleteById(id:string) {
    return this.https.delete('http://localhost:3000/category/'+id)
    
  
}
}
