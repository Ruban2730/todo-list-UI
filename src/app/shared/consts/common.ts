import { TodoPriority } from "../enums/todo-priority";

export const COMMON = {
    TOASTR_ERROR: 'Please enter required fields',
    TOASTR_SUCCESS: 'ToDo added successfully',
    PRIORITY : [
        {name: "LOW", priority :TodoPriority.LOW},
        {name: "NORMAL", priority :TodoPriority.NORMAL},
        {name: "HIGH", priority :TodoPriority.HIGH}
    ],
}