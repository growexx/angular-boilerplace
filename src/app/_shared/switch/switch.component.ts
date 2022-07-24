import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() switches: any;
  @Output() slide: EventEmitter<any> = new EventEmitter<any>();
  name?:string;
  switchArray:any;
  eliminatedValue:any;

  ngOnInit() {
  
    this.switchArray=[];
   
    for(let i=0; i<this.switches.length;i++){
    if( this.switches[i].checked===true){
      this.switchArray.push(this.switches[i].name);
      }
     
    }
   
    this.slide.emit(this.switchArray)
  }


  onSelect($event:any){
    
if($event.checked===true){
  this.switchArray.push($event.source.name)
       }else{
         for(let i =0; i<this.switchArray.length;i++){
           if(this.switchArray[i]===$event.source.name){
             this.eliminatedValue=this.switchArray.splice(i,1);
             $event.source.name = this.eliminatedValue[0];
           }
         }
       }
        this.slide.emit(this.switchArray)
  }
}
