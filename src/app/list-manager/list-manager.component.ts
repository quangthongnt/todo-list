import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[] =[];

  constructor(private todoListService: TodoListService) {
    todoListService.getTodoList();
   }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string){
    this.todoListService.addItem({title});
  }

  removeItem(item){
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes){
    this.todoListService.updateItem(item, changes);
  }

  // addItem(value: string){
  //   this.todoList.push({title : value});
  // }
  

  // todoList: TodoItem[] = [
  //   {
  //     title: 'one'
  //   },
  //   {
  //     title: 'two'
  //   },
  //   {
  //     title: 'three'
  //   },
  //   {
  //     title: 'four'
  //   },
  //   {
  //     title: 'five'
  //   },
  //   {
  //     title: 'six'
  //   },
  //   {
  //     title: 'seven'
  //   },
  //   {
  //     title: 'eight'
  //   },
  //   {
  //     title: 'nine'
  //   },
  // ]

}
