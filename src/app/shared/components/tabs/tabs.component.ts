import { Component, Input} from '@angular/core';
import { ThemePalette } from '@angular/material/core';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
 
})
export class TabsComponent {
  @Input() animationDuration:any;
  @Input() background:ThemePalette;
  @Input() color:ThemePalette;
  @Input() tabs:any=[];
 


  
}


