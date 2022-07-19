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

    constructor() { }

    ngOnInit(): void {
    }

    fileChangeEvent(fileInput: any): any {
        console.log(fileInput)
        this.imageError = '';
        fileInput = fileInput;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg', 'image/jpg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';

                return false;
            }

            if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG | JPEG )';
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();  
                image.src = e.target.result;
                image.onload = (rs: any): any => {
                    // const img_height = (rs.currentTarget as HTMLElement)?.offsetHeight;
                    // const img_width = (rs.currentTarget as HTMLElement)?.offsetWidth;

                    // if (img_height > max_height && img_width > max_width) {
                    //     this.imageError =
                    //         'Maximum dimentions allowed ' +
                    //         max_height +
                    //         '*' +
                    //         max_width +
                    //         'px';
                    //     return false;
                    // } else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        fileInput = this.cardImageBase64;
                        this.imgFile = fileInput;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                        this.imageChange.emit({
                            data: this.imgFile
                        });
                    // }
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
