import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name = "angular"
  salary = 25000 
  today  = new Date()

  users:Array<any> = [ ]
  ngOnInit(): void {
     
    this.users.push({"name":"ram1","email":"ram1@gmail.com"})
    this.users.push({"name":"ram2","email":"ram2@gmail.com"})
    this.users.push({"name":"ram3","email":"ram3@gmail.com"})
    this.users.push({"name":"ram4","email":"ram4@gmail.com"})



  }

}
