import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { GwFileUploadModule } from 'gw-file-upload';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FileuploadComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    GwFileUploadModule,
    SharedModule
  ]
})
export class FileUploadModule { }
