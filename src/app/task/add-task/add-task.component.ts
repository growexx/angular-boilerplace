import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { addTaskType } from '../task-modal';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  addTask!: addTaskType;
  taskFormGroup!: FormGroup;
  @ViewChild('successSwal')
  public readonly successSwal!: SwalComponent;

  @ViewChild('failedSwal')
  public readonly failedSwal!: SwalComponent;

  constructor(private taskService: TaskService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addTaskDetails()
  }


  addTaskDetails() {
    this.taskFormGroup = new FormGroup({
      todo: new FormControl('', [Validators.required]),
      completed: new FormControl('', [Validators.required]),
      userId: new FormControl(1),
    })
  }

  submitTodo() {
    const todoForm = this.taskFormGroup.value;
    this.taskService.addTodos(todoForm).subscribe({
      next: (data: any) => {
        this.addTask = data
        this.successSwal.fire();
      },
      error: (error: any) => {
        this.failedSwal.fire()
      }
    })
  }

  clearTodo() {
    this.taskFormGroup.reset()
  }

  cancelTodo(){
    this.router.navigate(['/admin/task/view'], {relativeTo: this.route})
  }

}


