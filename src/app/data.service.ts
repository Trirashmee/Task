
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 user_db=new Array()

  
savedb(ft:any){
  this.user_db.push(ft)

}


}
