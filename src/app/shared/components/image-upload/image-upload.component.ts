import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as _ from 'lodash';

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
    fileName:any;
    constructor() { }

    ngOnInit(): void {
    }

    fileChangeEvent(fileInput: any): any {
        this.imageError = '';
        fileInput = fileInput;
        console.log(fileInput)
        this.fileName = fileInput.target.files[0].name
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const maxSize = 20971520;
            const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > maxSize) {
                this.imageError =
                    'Maximum size allowed is ' + maxSize / 1000 + 'Mb';

                return false;
            }

            if (!_.includes(allowedTypes, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG | JPEG )';
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
