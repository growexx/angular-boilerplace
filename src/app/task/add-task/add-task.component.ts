import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { addTaskType, getSingleTodoType, updateTaskType } from '../task-modal';
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
  updateTodo!: updateTaskType;
  id!: number;
  getSingleTodo: getSingleTodoType[] | any;
  isCreateMode: boolean = false;
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addTaskDetails();
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getToDoById(params['id']);
        this.isCreateMode = true
      }
      else {
        this.isCreateMode = false;
      }
    })
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
    this.taskService.addTodos(todoForm).subscribe((res: any) => {
      this.addTask = res
      this.successSwal.fire();
    })
  }

  clearTodo() {
    this.taskFormGroup.reset()
  }

  cancelTodo() {
    this.router.navigate(['/admin/task/view'], { relativeTo: this.route })
  }

  editTodo(id: any) {
    const data = this.taskFormGroup.getRawValue();
    id = this.id;
    this.taskService.updateTodo(id, data).subscribe((res: any) => {
      this.successSwal.fire()
    })

  }

  getToDoById(id: number) {
    this.taskService.getToDoById(id).subscribe((res: any) => {
      this.getSingleTodo = res;
      this.taskFormGroup.patchValue(this.getSingleTodo)
    })

  }

}


