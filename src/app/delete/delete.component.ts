import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  //delete/ram1/ram2/ram3 
  //delete/:name/:x/:y 

  //route.s.p.name x y  
  ngOnInit(): void {
    let name = this.route.snapshot.params["name"]  //.name // ["name"]  //  
    alert(name)
  }

}
