import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor() { }

  root():string {
    return `/admin`
  }

  editTask(data:any){
    const basePath = this.root();
    const page = 'task';
    const subPath = 'edit';
    return `${basePath}/${page}/${subPath}/${data}`
  }
}
