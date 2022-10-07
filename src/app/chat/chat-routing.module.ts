import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'chat',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ChatComponent,
    data: {
      title: 'chat',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
