import { Component, OnInit } from '@angular/core';
import { taskDetailsType } from '../task-modal';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  taskDetails !: taskDetailsType;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks()
  }

  getAllTasks() {
    this.taskService.getAllTodos().subscribe((res: any) => {
      this.taskDetails = res
      console.log(this.taskDetails)
    })
  }

}
