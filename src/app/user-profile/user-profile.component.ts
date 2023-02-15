import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private dataser:DataService,private route:Router) { }

  ngOnInit(): void {
    this.onsub()
  }

user:any;


onsub(){
  this.user=this.dataser.user_db
}
edit(){
  this.route.navigate(['/user_reg'])
}

edpc(){
  this.route.navigate(['/user_reg'])
}
}