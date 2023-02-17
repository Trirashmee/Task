
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  
 user_db=[{firstname:'Trirashmee',email:'tri@gmail.com',state:'Maharashtra',tags:'cricket,tennis,rugby',number:1234567898}]

  
savedb(ft:any){
  this.user_db.push(ft)

}


}
