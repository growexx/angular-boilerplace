import { Component, Input, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  id!:any;
  @Input() fileData!: any;
  @Input() fileName!: any;
  @Input() tableConfig!: any;
  @Input() fileObj!: any;

  constructor(public fileService: FileService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.fileObj)
  }
  // getFilesDetails(id:any){
  //   this.fileService.viewFiles(id).subscribe((res:any)=>{
  //     console.log(res)
  //   })
  // }

}
