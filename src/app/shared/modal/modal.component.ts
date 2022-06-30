import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  isModal: boolean = false;
  @Input() openModal!:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.openModal, 'open modal')
  }

  closeModal(){
    this.openModal = !this.openModal;
  }

}
