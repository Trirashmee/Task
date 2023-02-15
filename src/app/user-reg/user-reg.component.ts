import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
 

  constructor(private dataser:DataService,private route: Router) { }

  ngOnInit(): void {
  }
  age:any;
  tags:any;
  
  adduser(data:any){
    console.log(data.value)
    this.dataser.savedb(data.value)
this.route.navigate(['/user_profile'])
  }

  
}
