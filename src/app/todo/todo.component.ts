import { Component, OnInit } from '@angular/core';
import { Todo } from '../todoClass/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  todoItem: string = '';

  todoList: Todo[] = [];

  completedList: Todo[] = [];

  constructor() { }


  addToDo(){{
    if (this.todoItem !== ''){
      this.todoList.push({task: this.todoItem});
      console.log(this.todoList)
      this.todoItem = '';
    }}}


    addCompletedTodo(){
      this.completedList.push({task: this.todoItem});
      console.log(this.completedList)
      this.todoItem = '';
    }
    

    completedTodo(index: number){
      let item = this.todoList.splice(index, 1);
      console.log(this.todoList);
      this.completedList.push(item[0])
    }

    unfinishedTodo(index: number){
      let unfinishedItem = this.completedList.splice(index, 1);
      console.log(this.todoList);
      this.todoList.push(unfinishedItem[0])
    }


    clearTodoList(){
      this.todoList.splice(0, this.todoList.length)
      console.log(this.todoList)
    }

    clearCompletedList(){
      this.completedList.splice(0, this.completedList.length)
    }


    ngOnInit(): void{
      
    }

}
