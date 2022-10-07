import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'fileupload',
  pathMatch: 'full'
},
{
  path:'',
  component: FileuploadComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
