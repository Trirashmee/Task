import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  firstname:any;
  lastname:any;
  email:any;
  number:any;
  tags_values:any;
  state:any;
  country:any;
  address:any;

  showtag(){
    this.tags_values = this.tags.split(' ')
  }
  adduser(data:any){
    console.log(data.value)
    
    this.dataser.savedb(data.value)
this.route.navigate(['/user_profile'])
  }

  adduser1(){
    console.log({age:this.age, 
      tags:this.tags_values,
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      number:this.number,
      state:this.state,
      country:this.country,
      address:this.address,

    })
    this.dataser.savedb({age:this.age, 
      tags:this.tags_values,
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      number:this.number,
      state:this.state,
      country:this.country,
      address:this.address,

    })
  }
  
  
}
