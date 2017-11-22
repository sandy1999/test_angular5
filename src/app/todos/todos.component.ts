import { Component, OnInit } from '@angular/core';
import { trigger,transition, style, animate,state, useAnimation, query, animateChild, group } from "@angular/animations";
import { fade, slide, bounceLeftAnimation, fadeInAnimation } from '../animations/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[
    trigger('todosAnimation',[
      transition(':enter',[
        group([
          query('h1',[
            style({transform:'translateY(-20px)'}),
            animate(1000)
          ]),
          query('@todoAnimation',animateChild())
        ])
      ])
    ]),
    trigger('todoAnimation',[
      transition(':enter',[
        useAnimation(fadeInAnimation,{
          params:{
            duration:'500ms'
          }
        })
      ]),
      transition(':leave',[
        style({backgroundColor:'red'}),
        animate(1000),
        useAnimation(bounceLeftAnimation)
      ]),
    ])
  ]
})
export class TodosComponent implements OnInit {

  constructor() { }

  myTodos:String[] = [
    'My new Car',
    'Create a linkedin account',
    'Pay credit card bill'
  ];

  addTodo(todo){
    this.myTodos.splice(0,0,todo);
    todo ='';
  }
  deleteTodo(todo){
    let index  = this.myTodos.indexOf(todo);
    this.myTodos.splice(index,1);
  }

  animationStarted($event){console.log($event)}
  animationDone($event){console.log($event)}
  ngOnInit() {
  }

}
