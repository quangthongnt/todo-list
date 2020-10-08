import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';


const todoListStorageKey = 'Todo_List';

const defaultTodoList =[
{
title: 'one'
},
{
title: 'two'
},
{
title: 'three'
},
];



@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  // private todoList: TodoItem[] =[
  //       {
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

  todoList: TodoItem[];


  constructor(private storageServices: StorageService) {
    this.todoList = storageServices.getData(todoListStorageKey) || defaultTodoList;
   }

   saveList() {
    this.storageServices.setData(todoListStorageKey, this.todoList);
  }

  getTodoList(){
    return this.todoList;
  }

  addItem(item: TodoItem){
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes){
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
    this.saveList();
  }


  deleteItem(item: TodoItem){
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index,1);
    this.saveList();
  }


}
