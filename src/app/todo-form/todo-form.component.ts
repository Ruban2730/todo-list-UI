import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Todo, TodoForm} from '../shared/interfaces/todo';
import * as toastr from 'toastr';
import { COMMON } from '../shared/consts/common'
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  newToDoForm: FormGroup;
  priorityOption = COMMON.PRIORITY;
  subscription: any;
  todo: Todo[] = [];
  
  constructor(private appService: AppService, public router: Router) {
    toastr.options.positionClass = "toast-bottom-right";
   }

  ngOnInit(): void {
    this.newToDoForm = new FormGroup({
      priority: new FormControl(this.priorityOption[2],[Validators.required]),
      title: new FormControl(null,[Validators.required]),
    })
    this.getTodoList();
  }

  getTodoList() {
    this.appService.todos.subscribe({
      next: (value: Todo[]): void => {
        this.todo = value;
      }, error : (err) =>{
        console.log("ERROR !",err);
      }
    });
  }

  onSubmit(value: TodoForm) {
    if(value.title && value.title.length){
      let nname = {
        title: value.title,
        date: Date.now(),
        done: false,
        priority: value.priority.priority
      }
      this.todo.push(nname);
      this.appService.todos.next(this.todo);
      toastr.success(COMMON.TOASTR_SUCCESS);
      this.clearForm();
      this.router.navigateByUrl('')
    } else {
      toastr.error(COMMON.TOASTR_ERROR);
    }
  }


  clearForm(){
    this.newToDoForm.patchValue({
      priority: this.priorityOption[2],
      title:"",
    })
  }
}
