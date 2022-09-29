import { TodoPriority } from '../enums/todo-priority';

/**
 * Represents data structure of a single task/to-do.
 * @see AppService.todos
 */
export interface Todo {
  // Title of the task
  title: string;
  // Is this task completed/done?
  done: boolean;
  // Due date of the task (milliseconds)
  date: number;
  // Priority of the task
  priority: TodoPriority;
}

export interface TodoForm {
  title: string,
   priority: {
    name: string, 
    priority: number
  }
}


