import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderConfig } from 'gw-file-upload/lib/gw-file-upload-types';
import { FileService } from '../file.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  fileId!: any;
  fileName!: string;
  fileDataObj!: any;

  constructor(public fileService: FileService) { }

  ngOnInit(): void {
        
  }

  gwConfig: AngularFileUploaderConfig = {
    id: 112233,
    multiple: true,
    acceptFileTypes: 'image/*,.pdf,.doc',
    uploadAPI: {
      url: 'https://v2.convertapi.com/upload'
    },
    
  }


  docUpload(event:any, data?:any){
    this.fileDataObj = event.body;
    this.fileId = event.body.FileId;
    this.fileName = event.body.FileName
    this.viewFiles(this.fileId)
  }

  
  viewFiles(id:any){
    this.fileService.viewFiles(id).subscribe((res:any)=>{
    })
  }
}
