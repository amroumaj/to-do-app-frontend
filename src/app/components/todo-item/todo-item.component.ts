import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TodoService } from '../../servcies/todo.service';
import { Todo } from '../../model/todo.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  todoService = inject(TodoService)

  @Input() todo!: Todo;
  @Output() toggleComplete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();
}
