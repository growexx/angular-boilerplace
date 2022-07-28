import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { AppConstant } from 'src/app/core/constants/app.constant';
@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

    imageError!: string;
    isImageSaved!: boolean;
    cardImageBase64!: string;
    @Input() imgFile: any;
    @ViewChild('fileInput') fileInput: ElementRef | any;
    @Output() imageChange: EventEmitter<any> = new EventEmitter();
    image: any;
    fileName: any;


    constructor(public appConstant: AppConstant) { }

    ngOnInit(): void {
    }

    fileChangeEvent(fileInput: any): any {
        this.imageError = '';
        fileInput = fileInput;
        console.log(fileInput)
        this.fileName = fileInput.target.files[0].name
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes

            if (fileInput.target.files[0].size > this.appConstant.maxSize) {
                this.imageError =
                    'Maximum size allowed is ' + this.appConstant.maxSize / 1000 + 'Mb';

                return false;
            }

            if (!_.includes(this.appConstant.allowedTypes, fileInput.target.files[0].type)) {
                this.appConstant.imageError;
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.image = new Image();
                this.image.src = e.target.result;
                this.image.onload = (rs: any): any => {

                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    fileInput = this.cardImageBase64;
                    this.imgFile = fileInput;
                    this.isImageSaved = true;
                    this.imageChange.emit({
                        data: this.imgFile
                    });
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }

    removeImage() {
        this.cardImageBase64 = '';
        this.isImageSaved = false;
    }
}
