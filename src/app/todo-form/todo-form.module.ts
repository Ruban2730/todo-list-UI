import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormRoutingModule } from './todo-form-routing.module';
import { TodoFormComponent } from './todo-form.component';

@NgModule({
  declarations: [
    TodoFormComponent,
  ],
  imports: [
    CommonModule,
    TodoFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TodoFormModule {
}
