import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { taskDetailsType } from '../task-modal';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  taskDetails !: taskDetailsType;
  @ViewChild('successSwal')
  public readonly successSwal!: SwalComponent;

  @ViewChild('failedSwal')
  public readonly failedSwal!: SwalComponent;

  constructor(private taskService: TaskService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllTasks()
  }

  getAllTasks() {
    this.taskService.getAllTodos().subscribe((res: any) => {
      this.taskDetails = res
      console.log(this.taskDetails)
    })
  }

  createTodo(){
    this.router.navigate(['/admin/task/add'], {relativeTo: this.route})
  }

  deleteTodo(id:any){
    console.log(id)
    this.taskService.deleteTodos(id).subscribe({
      next:(data:any)=>{
        console.log(data)
        this.successSwal.fire();
        this.getAllTasks()
      }
    })
  }
}
