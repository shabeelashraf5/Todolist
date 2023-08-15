import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs'





declare const bootstrap: any;

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})


export class ToDoListComponent implements OnInit  {
 
  todoForm !: FormGroup
  title = 'Enter your Task'
  list: any[] = []
  


  constructor(private fb : FormBuilder, private datePipe: DatePipe ){}


  addTask(item: string){

    
    this.list.push({id:this.list.length, name:item})
    console.warn(this.list)


  }
 
  removeTask(id: number){
    console.warn(id)
    this.list = this.list.filter(item => item.id!==id)

  }

  

  ngOnInit(): void {

    this.todoForm = this.fb.group({
      item : ['', Validators.required]
    }) 


  }

  getCurrentDateTime(): string {
    const currentDate = new Date();
    return this.datePipe.transform(currentDate, 'dd-MM-yyyy') || '';
  }


  



}
