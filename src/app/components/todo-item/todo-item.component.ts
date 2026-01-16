import { Component, inject } from '@angular/core';
import { TodoService } from '../../servcies/todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  todoService = inject(TodoService)
}
